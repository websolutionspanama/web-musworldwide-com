# Documentación de actualización — MUS Worldwide (19 feb 2026)

Esta guía resume el contenido real de https://musworldwide.com y define qué debe cambiarse en este proyecto para que el sitio actual coincida con el contenido oficial.

> Nota: El sitio actual del repositorio es de **distribución musical**. El sitio real es una **firma internacional de servicios corporativos, legales, contables, bancarios, tecnológicos y bienes raíces**. La actualización es un cambio completo de contenido y narrativa.

---

## 1) Resumen del contenido real del sitio

**Identidad y mensaje principal**
- Marca: **MUS WORLDWIDE**
- Mensaje principal (hero):
  - “We are an international company which offers all kinds of services among we highlight the incorporation of companies in different jurisdictions, structuring of trust, accounting services, banking services, technological and real estate services through professional experts in the matters assisting clients from all parts in the world. MUS WORLDWIDE offers a menu of global services that seek to complement the establishment of your business.”

**Secciones/Servicios principales**
1. **Corporate Services**
   - Incorporation of companies, foundations and trusts in: BVI, Belize, Delaware, Panama, Costa Rica, Florida, Wyoming, Anguilla, Seychelles, Hong Kong, Bahamas, Samoa, Cyprus, UK, New York, Nevis, Uruguay, etc.
2. **Estate & Succession Planning**
   - Constitution of Foundations, trusts and other instruments in: Belize, BVI, Seychelles, New Hampshire (USA), Wyoming, Nevada, etc.
3. **Accounting Services**
   - Preparation and custody of accounting records in: Uruguay, Panama, Belize, USA.
4. **Opening of Bank Accounts Services**
   - Opening of bank accounts in: Puerto Rico, USA, Panama, St. Lucia, Belize, Cyprus, etc.
5. **Technology Services**
   - Programming services, website, domain, institutional email, company logo, etc.
6. **Real Estate**
   - Real estate services in Panama and USA.
7. **Registration and Flag Assignation of Vessels**
   - Registration and flag assignation for vessels in Marshall Islands, Liberia, Panama, BVI, Nevis, Delaware, etc.

**Contacto y canales**
- Teléfono: **+507 6060 3067**
- Email: **mus@musworldwide.com**
- Dirección: **COMOSA BUILDING, E2 floor, Samuel Lewis Ave. and Manuel Maria Icaza St. Obarrio, Panama City, Panama**
- Redes:
  - Facebook: https://www.facebook.com/musworldwide
  - Instagram: https://www.instagram.com/musworldwide/
  - WhatsApp: http://wa.me/50760603067

**Otros bloques visibles**
- Instagram feed embebido (múltiples publicaciones).
- Descargas: “Our Brochure”.
- Footer legal: “© All rights reserved MUS Worldwide. Powered By Web Solutions Panama”.

---

## 2) Diferencias con el sitio actual del repositorio

**Actual (repositorio):**
- Orientado a industria musical (hero, servicios, artistas, noticias, plataformas, etc.).

**Real (musworldwide.com):**
- Orientado a servicios corporativos/legales/contables/bancarios/tecnológicos/real estate.
- No hay sección “Artistas”, “Noticias musicales”, “Distribución musical”, etc.

Conclusión: se requiere **reemplazar todo el contenido textual y la estructura de secciones**, manteniendo solo la base técnica (layout, estilos, animaciones, JS).

---

## 3) Estructura recomendada para el HTML

Reemplazar secciones actuales por una estructura alineada al sitio real:

1. **Hero**
   - Título: “MUS WORLDWIDE”
   - Subtítulo/copy principal: texto del hero real.
   - CTA: “Our Services” → ancla a #services
   - CTA secundario: “Contact Us” → ancla a #contact

2. **Services** (grid con 7 servicios)
   - Corporate Services
   - Estate & Succession Planning
   - Accounting Services
   - Opening of Bank Accounts Services
   - Technology Services
   - Real Estate
   - Registration and Flag Assignation of Vessels

3. **Instagram**
   - Bloque para feed (si no se integra API, usar placeholders con enlace a Instagram).

4. **Contact**
   - Teléfono, email, dirección.
   - Formulario “Send us a message” (nombre, email, asunto, mensaje).

5. **Footer**
   - Datos de marca + redes + copyright.
   - Enlace “Our Brochure” (si se define archivo PDF, colocar ruta local o enlace externo).

---

## 4) Mapeo de navegación

Actualizar el menú:
- Inicio → #inicio
- Servicios → #servicios
- Instagram → #instagram
- Contacto → #contacto
- (Opcional) Descargas → #downloads

Eliminar enlaces a “Nosotros”, “Artistas”, “Noticias”, etc.

---

## 5) Lineamientos de contenido (copy)

**Hero**
- Mantener el texto exacto del sitio real para evitar discrepancias.

**Servicios**
- Usar títulos y descripciones tal como se listan en la sección 1.

**Contacto**
- Usar teléfono, email y dirección exactos.

---

## 6) Cambios requeridos en archivos

### HTML
- Archivo: index.html
- Reemplazar secciones actuales por las descritas arriba.
- Actualizar meta description y keywords para servicios corporativos.
- Ajustar títulos H1/H2 al nuevo contenido.
- Actualizar enlaces sociales y CTA.

### CSS
- Mantener estructura base.
- Ajustar estilos de cards si se eliminan bloques “artistas/noticias”.
- Crear estilos simples para bloque Instagram y Descargas si no existen.

### JS
- Mantener navbar, scroll, reveal y formulario.
- Eliminar slider/testimonials si no se usa.
- Ajustar validación del formulario si cambian IDs.

---

## 7) Checklist de implementación

- [ ] Actualizar meta tags (title, description, keywords).
- [ ] Reescribir hero copy.
- [ ] Reemplazar secciones musicales por servicios corporativos.
- [ ] Actualizar menú de navegación.
- [ ] Agregar bloque Instagram con link.
- [ ] Actualizar contacto y footer con datos oficiales.
- [ ] Revisar formulario y validación.

---

## 8) Fuentes

- Sitio oficial: https://musworldwide.com
