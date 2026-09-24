# Verificación de Miranda DevSource

Fecha: 23 de septiembre de 2026. Entorno: Windows, Node 24.19.0, Astro 6.4.8, Microsoft Edge. Sitio servido desde la compilación estática local.

## Resultados

- Instalación reproducible con `npm ci` y `package-lock.json`: completada. npm 12 advirtió sobre scripts de instalación de esbuild/sharp bloqueados por su política; los binarios opcionales instalados permitieron compilar correctamente sin modificar esa política.
- `astro check`: 0 errores, 0 advertencias, 0 hints.
- `astro build`: 12 páginas estáticas; sitemap, robots, imagen social y PDF presentes.
- Suite final sin endpoint: **17 pruebas aprobadas**, 2 de formulario omitidas intencionalmente en este modo.
- Suite con endpoint de prueba: **16 pruebas aprobadas**, incluido formulario en ambos idiomas; 1 prueba del fallback omitida intencionalmente. Esta ejecución precedió las dos pruebas adicionales de rutas y texto ampliado, verificadas en la suite final.
- Formulario: requeridos, éxito, 422, 429, 500, desconexión, prevención de duplicados y conservación de mensaje tras fallo. Solicitudes interceptadas; no se enviaron correos.
- Axe: ninguna infracción detectada en las portadas es/en, temas claros/oscuros y anchos 360, 768 y 1440. Casos y privacidad también revisados automáticamente con Axe.
- Tema persistente, almacenamiento bloqueado, texto al 200%, contenido/navegación sin JavaScript, cambio a caso equivalente en otro idioma, PDF y respuesta 404: aprobados.
- Revisión visual en navegador: portada clara de escritorio, portada oscura estrecha, servicios de escritorio y proyectos en móvil. Se corrigió un desbordamiento detectado con texto ampliado pasando a composición de una columna en tableta.
- SHA-256 del PDF servido coincide con el original: `E388671DEF132198F25F8E8D7297CB737FF470D2E0CEBF5E703A33711C9F371A`.

## Lighthouse

Lighthouse 13.5.0, emulación móvil, portada española con formulario de prueba:

| Métrica | Resultado |
| --- | --- |
| Rendimiento | 94 |
| Accesibilidad | 100 |
| SEO | 100 |
| LCP | 2.7 s |
| CLS | 0.001 |
| TBT | 0 ms |

Reporte local completo: `tmp/lighthouse-es.json` (ignorado por Git). La auditoría generó el reporte, pero la limpieza posterior del perfil temporal de Edge terminó con EPERM. Estos números son una medición local, no datos de campo ni una auditoría de todas las rutas. Se midieron antes del ajuste final de texto ampliado y retirada del endpoint de prueba. Las pruebas automáticas no equivalen a una certificación completa de accesibilidad.

## Activación pendiente

La compilación final **no contiene el endpoint de prueba**. Mientras no se configure uno verificado, ofrece contacto real por correo y WhatsApp. Quedan pendientes crear/verificar Formspree, comprobar su plan actual, realizar un envío real y publicar en la cuenta Cloudflare del propietario, estableciendo PUBLIC_SITE_URL con la URL asignada. No se creó ni reservó `miranda-devsource.pages.dev`.
