# Miranda DevSource

Portafolio profesional y presentación de servicios de Rafael Miranda. Sitio estático con Astro 6, TypeScript estricto y CSS, disponible en español e inglés, con temas claro/oscuro, proyectos anonimizados, CV descargable y contacto.

## Requisitos y compatibilidad

- Git, Node.js **22.14.0** (fijado en `.nvmrc` y `.node-version`) y npm incluido con Node. Mínimo declarado: Node 22.12.
- Compatible por configuración con **macOS (Apple Silicon e Intel)**, Linux y Windows. No necesita Python, Docker, Codex ni archivos externos al repositorio.
- Instalar dependencias en cada equipo con `npm ci`: no copiar `node_modules` entre sistemas o arquitecturas. El lockfile incluye dependencias opcionales para macOS ARM64/x64.
- Las pruebas usan Chromium administrado por Playwright, sin rutas fijas a Edge. Consultar los [sistemas soportados](https://playwright.dev/docs/intro) para tu versión de macOS.
- La validación inicial se realizó en Windows. El workflow comprueba macOS y Linux; consulta el resultado real en Actions antes de asumir que pasó en esos sistemas.

## Clonar y levantar en macOS / Linux

```sh
git clone https://github.com/RVMiranda/Miranda_DevSource_Portfolio.git
cd Miranda_DevSource_Portfolio
```

Si ya utilizas nvm:

```sh
nvm install
nvm use
```

Si no utilizas un gestor de versiones, instala Node compatible desde [Node.js](https://nodejs.org/en/download). Comprueba `node --version` y `npm --version`.

```sh
npm ci
cp .env.example .env
npm run dev
```

Abre [la portada en español](http://127.0.0.1:4321/es/) o [en inglés](http://127.0.0.1:4321/en/). El servidor recarga al guardar. Detén el proceso con `Ctrl+C`. No instales dependencias con `sudo`.

## Levantar en Windows (PowerShell)

Instala Git y Node compatible y ejecuta:

```powershell
git clone https://github.com/RVMiranda/Miranda_DevSource_Portfolio.git
cd Miranda_DevSource_Portfolio
npm ci
Copy-Item .env.example .env
npm run dev
```

Si PowerShell bloquea `npm.ps1`, usa `npm.cmd` y `npx.cmd` sin cambiar la política del sistema.

## Comandos habituales

| Comando | Uso |
| --- | --- |
| `npm run dev` | Desarrollo con recarga automática |
| `npm run check` | Diagnóstico de Astro y TypeScript |
| `npm run build` | Genera páginas estáticas en `dist/` |
| `npm run preview` | Sirve el último build; no recompila |
| `npm test` | Pruebas sobre el build existente |
| `npx playwright show-report` | Abre el reporte de pruebas |

Para producción local: detén `dev`, ejecuta `npm run check`, `npm run build` y `npm run preview`. Puedes cambiar el puerto con `-- --port 4322`; las pruebas siempre usan 4321.

## Configuración y contacto

Edita `.env` (excluido de Git):

```dotenv
PUBLIC_SITE_URL=https://miranda-devsource.pages.dev
PUBLIC_FORMSPREE_ENDPOINT=
```

La URL debe coincidir con el despliegue real para canonicals, sitemap y redes sociales; el valor de ejemplo no implica que esté reservado. Dejar el endpoint vacío ofrece correo y WhatsApp reales. Reinicia desarrollo tras cambiar variables y reconstruye para producción. Las variables `PUBLIC_` son públicas: nunca guardes secretos en ellas.

Para activar el formulario: crea uno en Formspree, verifica el destinatario y configura antispam. Establece `PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/ID_REAL` y reconstruye. Revisa [planes y límites actuales](https://formspree.io/plans/) y comprueba la recepción de un mensaje real antes de anunciarlo como activo. No necesita backend propio.

## Editar el contenido

| Ubicación | Contenido |
| --- | --- |
| `src/i18n.ts` | Textos es/en, servicios y trayectoria |
| `src/content/projects.json` | Casos bilingües validados por Astro |
| `src/config.ts` | Correo, WhatsApp, redes y CV |
| `src/styles/global.css` | Paleta, temas y responsive |
| `src/components/`, `src/layouts/` | Componentes y estructura compartida |
| `src/pages/` | Portadas, proyectos, privacidad, 404 y robots |
| `public/downloads/CV_Rafael_Miranda.pdf` | Original autorizado; contiene nombres reales |

Actualizar ambos idiomas. No inventar métricas ni atribuir autoría completa en trabajos de equipo. Los gráficos conceptuales pueden complementarse con capturas autorizadas. Guía por etapas: [docs/implementation-prompts.md](docs/implementation-prompts.md).

## Pruebas multiplataforma

Instala el navegador una vez y después de actualizar Playwright:

```sh
npx playwright install chromium
npm run build
npm test
```

En Linux, si faltan bibliotecas, usa `npx playwright install --with-deps chromium`. No se necesita navegador para desarrollar o compilar.

Las pruebas arrancan preview automáticamente. Detén cualquier servidor anterior en 4321 para asegurar que revisan el build correcto. Cubren idiomas, rutas, temas, accesibilidad, responsive, texto ampliado y CV. Opcionalmente `CHROME_PATH` admite una ruta absoluta a tu propio Chromium; por defecto se usa el instalado por Playwright.

### Formulario con respuestas simuladas

macOS/Linux, con preview detenido:

```sh
PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/testform npm run build
TEST_FORM=1 npm test
npm run build
```

PowerShell:

```powershell
$env:PUBLIC_FORMSPREE_ENDPOINT='https://formspree.io/f/testform'
npm run build
$env:TEST_FORM='1'
npm test
Remove-Item Env:PUBLIC_FORMSPREE_ENDPOINT
Remove-Item Env:TEST_FORM
npm run build
```

Se interceptan solicitudes sin enviar correos. La última compilación restaura la configuración de `.env`: no guardar allí el endpoint de prueba ni publicar ese build. En modo directo se omiten dos tests de formulario; en modo formulario se omite el test del contacto alternativo. Actions ejecuta ambos modos en macOS y Linux. Mediciones y limitaciones: [docs/qa.md](docs/qa.md).

## Cloudflare Pages

1. Conecta este repositorio a Pages y selecciona `main`.
2. Comando `npm run build`, salida `dist`, Node 22.14.0 o superior compatible. Sin adaptador de servidor.
3. Configura `PUBLIC_SITE_URL` con la URL pages.dev realmente asignada o tu dominio, y el endpoint verificado de Formspree si corresponde.
4. Reconstruye y verifica idiomas, casos, privacidad, CV, 404, metadatos, robots y sitemap. `_redirects` dirige `/` a `/es/`.

Actions valida pero **no publica** el sitio. No hay analítica, CMS, base de datos ni cuentas de usuario. `.env`, `node_modules`, `dist` y reportes temporales están excluidos de Git.
