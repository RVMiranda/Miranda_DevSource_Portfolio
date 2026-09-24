# Miranda DevSource — guía de implementación

## Contexto maestro
Implementa un sitio estático bilingüe (es/en) orientado a clientes para Rafael Miranda. Astro y TypeScript estricto, CSS por componentes y tokens, Cloudflare Pages (`npm run build`, `dist`). No CMS, backend, base de datos, blog ni cuentas. React/Motion solo si una interacción concreta los necesita. Lee apple-design antes de diseñar: feedback inmediato, movimiento interrumpible, tipografía fluida, teclado y preferencias de accesibilidad.

Marca protagonista, estética editorial y tarjetas: crema #F4E6C8, azul #B5CBDC, ciruela #504650. Oscuro #211E23/#302A33. Sin retratos ni capturas inventadas. Diagramas conceptuales identificados como tales. Contenido del CV, sin inventar experiencia, métricas o testimonios. Casos anonimizados; el CV descargable original sí contiene organizaciones. Servicios: web, sistemas, móvil, consultoría, gestión técnica. Contacto rv.miranda.builds@gmail.com, WhatsApp 529986017858, GitHub RVMiranda y LinkedIn del CV.

Cada etapa debe inspeccionar el estado existente, implementar sin sobrescribir trabajo ajeno, ejecutar sus comprobaciones y reportar cambios y pendientes reales.

## 1. Base
**Prerrequisito:** contexto maestro. **Prompt:** configura Astro estático, TypeScript estricto, npm y lockfile. Separa layouts, componentes, estilos, traducciones y colecciones de proyectos. Define /es/, /en/, proyectos y privacidad en ambos idiomas; raíz a español. Centraliza datos y PUBLIC_SITE_URL/PUBLIC_FORMSPREE_ENDPOINT. Añade scripts dev/check/build/preview/test. **Entrega:** proyecto reproducible y .env.example. **Aceptación:** instalación limpia y tipos/compilación sin errores; sin secretos públicos.

## 2. Sistema visual
**Prerrequisito:** base. **Prompt:** implementa tokens claros/oscuros, tipografía system-ui, cabecera translúcida, botones, tarjetas, foco y layout responsive. Tema según sistema con persistencia tolerante a storage bloqueado y sin flash. Navegación móvil utilizable sin JS. **Entrega:** layout compartido. **Aceptación:** 360/768/1440 px, teclado, contraste AA, zoom 200%, movimiento/transparencia reducidos; contenido visible sin JS.

## 3. Contenido
**Prerrequisito:** colecciones. **Prompt:** redacta versiones completas es/en para servicios, perfil y tres casos: operación interna (Django/Docker, coordinación de dos equipos), administración escolar (reducción >80% según CV, Docker, sin atribuir framework no documentado), vinculación de productores (contribución Laravel/frontend). Distingue contribución y contexto. **Entrega:** colección validada y diccionarios tipados. **Aceptación:** equivalencia de idiomas, sin nombres de clientes ni métricas nuevas, sin atribuir proyectos móviles.

## 4. Páginas
**Prerrequisito:** diseño/contenido. **Prompt:** construye portada, servicios, proyectos, stack, perfil y contacto; detalles de casos con problema/aporte/solución/resultado. Añade diagramas conceptuales y copia exacta del CV a public/downloads. Traducción de ruta equivalente, canonicals, hreflang, sitemap, OG PNG y 404. **Entrega:** páginas estáticas. **Aceptación:** todos los enlaces internos y PDF responden; CV rotulado español en inglés; metadatos usan URL configurada.

## 5. Contacto
**Prerrequisito:** páginas. **Prompt:** integra Formspree vía POST; nombre/email/mensaje requeridos, servicio opcional, honeypot, errores traducidos inline y status accesible. Prevén duplicados, timeout y 429; conserva datos en fallo, éxito solo con respuesta OK. Sin endpoint muestra correo/WhatsApp y no simules envío. Explica tratamiento de datos en privacidad, sin analítica. **Entrega:** formulario funcional al configurar cuenta. **Aceptación:** mocks éxito/validación/red/429 y sin configuración; ningún envío real durante tests.

## 6. Pulido
**Prerrequisito:** funciones completas. **Prompt:** aplica apple-design con respuesta en pointer-down, transiciones reversibles y breves, jerarquía y espaciado editorial; no scroll secuestrado ni animación decorativa continua. Revisa ambos temas, idiomas y formatos con capturas. **Entrega:** UI consistente. **Aceptación:** sin overflow, teclado y foco claros, contenido accesible sin JS, preferencias reducidas respetadas.

## 7. Verificación y despliegue
**Prerrequisito:** anteriores. **Prompt:** ejecuta check/build/tests sobre producción; prueba navegación, tema persistente, idioma equivalente, CV, 404, y errores de formulario. Audita accesibilidad y Lighthouse móvil (objetivos performance >=90, accessibility/SEO >=95). Documenta resultados medidos sin inventarlos. Configura Cloudflare Pages con Node 22.12+, npm run build, dist y PUBLIC_SITE_URL real. **Entrega:** README y reporte QA. **Aceptación:** URL real/canónicos correctos, envío real recibido tras configurar Formspree, sin secretos. Si no hay acceso a cuentas, dejar instrucciones precisas; no afirmar publicación.

## Activación externa
- Crear proyecto Cloudflare y establecer su URL pages.dev real antes del build de producción; dominio personalizado opcional.
- Crear formulario Formspree, verificar destinatario, configurar endpoint y protección antispam. Comprobar plan/cuota vigentes en https://formspree.io/plans/ antes de producción.
- Verificar recepción de un mensaje real con autorización, una vez configurado.
- Capturas/retrato posteriores se incorporan sin bloquear v1.
