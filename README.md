# Operativo Táctico · Grupo MCU

Landing page estática (HTML + CSS + JS, sin dependencias ni build).

## Ejecutar
- Abrir `index.html` en el navegador, o servir la carpeta:
  `python3 -m http.server 8080` → http://localhost:8080
- Deploy en Vercel: importar la carpeta como proyecto estático (sin framework, sin build command).
  `recursos-originales/` está excluida del deploy vía `.vercelignore`.

## Estructura
- `index.html` — página única con anclas (#inicio, #categorias, #uniformes, #accesorios, #vehiculos, #nosotros, #contacto)
- `css/styles.css` — estilos y responsive
- `js/main.js` — menú móvil, header al hacer scroll, sección activa y enlaces de WhatsApp
  (el número está en la constante `WHATSAPP_NUMBER`)
- `assets/img/` — imágenes optimizadas en WebP, con el nombre del archivo original
  (los recortes de imágenes compuestas llevan sufijo: `63-perseo`, `63-aquiles`, `63-odiseo`, `66-esposas`, `66-gorras`)
- `assets/fonts/` — Montserrat (autoalojadas, licencia OFL)
- `recursos-originales/` — (no versionada) archivos originales recibidos; ignorada en git y en Vercel

## Pendientes de confirmar
- URL de la página de Facebook "Operativo Tactico mx" (hoy solo se muestra el nombre, sin enlace; ver comentario PENDIENTE en el footer).
- Correo: el tríptico dice `cotizaciones@grupomcu.com` y el sitio de Grupo MCU usa el dominio `grupomcu.com.mx`.
- Instagram/TikTok: aparecen solo en el mockup; no se incluyeron.
