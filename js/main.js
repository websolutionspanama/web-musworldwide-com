/* ═══════════════════════════════════════════════════════════════════
   MUS WORLDWIDE — Main JavaScript
   ═══════════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── Navbar: scroll effect + active link ──────────────────────── */
  const navbar   = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('main section[id]');

  function updateNavbar() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  function updateActiveLink() {
    let current = '';
    sections.forEach(function (section) {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(function (link) {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', function () {
    updateNavbar();
    updateActiveLink();
  }, { passive: true });

  updateNavbar();

  /* ── Mobile navigation toggle ─────────────────────────────────── */
  const navToggle = document.getElementById('navToggle');
  const navMenu   = document.getElementById('navMenu');

  function closeMenu() {
    navToggle.classList.remove('open');
    navMenu.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      const isOpen = navMenu.classList.toggle('open');
      navToggle.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close when a nav link is clicked
    navMenu.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    // Close when clicking outside
    document.addEventListener('click', function (e) {
      if (!navbar.contains(e.target)) {
        closeMenu();
      }
    });
  }

  /* ── Scroll reveal ────────────────────────────────────────────── */
  const revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
    );

    revealEls.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    // Fallback: show all elements
    revealEls.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  /* ── Counter animation ────────────────────────────────────────── */
  const counters = document.querySelectorAll('.stat-number');

  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-target'), 10);
    if (isNaN(target)) return;

    const duration = 1800;
    const step = 16;
    const increment = target / (duration / step);
    let current = 0;

    const timer = setInterval(function () {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = Math.floor(current).toLocaleString('es');
    }, step);
  }

  if ('IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach(function (counter) {
      counterObserver.observe(counter);
    });
  } else {
    counters.forEach(function (counter) {
      counter.textContent = counter.getAttribute('data-target');
    });
  }

  /* ── Testimonials slider ──────────────────────────────────────── */
  const track      = document.getElementById('testimonialTrack');
  const prevBtn    = document.getElementById('sliderPrev');
  const nextBtn    = document.getElementById('sliderNext');
  const dotsContainer = document.getElementById('sliderDots');

  if (track && prevBtn && nextBtn && dotsContainer) {
    const slides = track.querySelectorAll('.testimonial-card');
    let current  = 0;
    let autoTimer;

    // Build dots
    slides.forEach(function (_, i) {
      const dot = document.createElement('button');
      dot.className = 'slider-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('role', 'tab');
      dot.setAttribute('aria-label', 'Ir al testimonio ' + (i + 1));
      dot.setAttribute('aria-selected', String(i === 0));
      dot.addEventListener('click', function () { goTo(i); });
      dotsContainer.appendChild(dot);
    });

    function goTo(index) {
      current = (index + slides.length) % slides.length;
      track.style.transform = 'translateX(-' + (current * 100) + '%)';

      dotsContainer.querySelectorAll('.slider-dot').forEach(function (dot, i) {
        dot.classList.toggle('active', i === current);
        dot.setAttribute('aria-selected', String(i === current));
      });

      resetAuto();
    }

    function resetAuto() {
      clearInterval(autoTimer);
      autoTimer = setInterval(function () { goTo(current + 1); }, 5000);
    }

    prevBtn.addEventListener('click', function () { goTo(current - 1); });
    nextBtn.addEventListener('click', function () { goTo(current + 1); });

    // Keyboard navigation
    document.getElementById('testimonialsSlider').addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft')  { goTo(current - 1); }
      if (e.key === 'ArrowRight') { goTo(current + 1); }
    });

    // Touch swipe support
    let touchStartX = 0;
    track.addEventListener('touchstart', function (e) {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    track.addEventListener('touchend', function (e) {
      const diff = touchStartX - e.changedTouches[0].screenX;
      if (Math.abs(diff) > 50) {
        goTo(diff > 0 ? current + 1 : current - 1);
      }
    }, { passive: true });

    resetAuto();
  }

  /* ── Contact form validation ──────────────────────────────────── */
  const contactForm  = document.getElementById('contactForm');
  const formSuccess  = document.getElementById('formSuccess');

  if (contactForm) {
    function showError(fieldId, message) {
      const errorEl = document.getElementById(fieldId + '-error');
      const input   = document.getElementById(fieldId);
      if (errorEl) errorEl.textContent = message;
      if (input)   input.setAttribute('aria-invalid', 'true');
    }

    function clearError(fieldId) {
      const errorEl = document.getElementById(fieldId + '-error');
      const input   = document.getElementById(fieldId);
      if (errorEl) errorEl.textContent = '';
      if (input)   input.removeAttribute('aria-invalid');
    }

    function validateEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function validate() {
      let valid = true;
      const nombre  = document.getElementById('nombre');
      const email   = document.getElementById('email');
      const asunto  = document.getElementById('asunto');
      const mensaje = document.getElementById('mensaje');

      ['nombre', 'email', 'asunto', 'mensaje'].forEach(clearError);

      if (!nombre.value.trim()) {
        showError('nombre', 'Por favor ingresa tu nombre.');
        valid = false;
      }
      if (!email.value.trim() || !validateEmail(email.value)) {
        showError('email', 'Por favor ingresa un email válido.');
        valid = false;
      }
      if (!asunto.value) {
        showError('asunto', 'Por favor selecciona el motivo de contacto.');
        valid = false;
      }
      if (!mensaje.value.trim() || mensaje.value.trim().length < 10) {
        showError('mensaje', 'Por favor escribe un mensaje de al menos 10 caracteres.');
        valid = false;
      }

      return valid;
    }

    // Inline validation
    ['nombre', 'email', 'asunto', 'mensaje'].forEach(function (id) {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener('blur', validate);
      }
    });

    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!validate()) return;

      const submitBtn = document.getElementById('submitBtn');
      submitBtn.disabled = true;
      submitBtn.querySelector('.btn-text').textContent = 'Enviando…';

      // Simulate async send (replace with real fetch() to your backend)
      setTimeout(function () {
        contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.querySelector('.btn-text').textContent = 'Enviar Mensaje';
        if (formSuccess) {
          formSuccess.classList.add('visible');
          setTimeout(function () {
            formSuccess.classList.remove('visible');
          }, 5000);
        }
      }, 1200);
    });
  }

  /* ── Newsletter form ──────────────────────────────────────────── */
  const newsletterForm = document.getElementById('newsletterForm');

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const input = newsletterForm.querySelector('input[type="email"]');
      if (input && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
        input.value = '';
        input.placeholder = '¡Suscrito! Gracias.';
        setTimeout(function () {
          input.placeholder = 'tu@email.com';
        }, 3000);
      }
    });
  }

  /* ── Back to top ──────────────────────────────────────────────── */
  const backToTop = document.getElementById('backToTop');

  if (backToTop) {
    window.addEventListener('scroll', function () {
      backToTop.classList.toggle('visible', window.scrollY > 600);
    }, { passive: true });

    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ── Footer year ──────────────────────────────────────────────── */
  const yearEl = document.getElementById('footerYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

})();
