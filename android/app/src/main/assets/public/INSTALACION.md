# Instalación de Cuaderno GH

## Publicación en GitHub Pages

Sube a la misma carpeta todos estos archivos y directorios:

- `index.html`
- `manifest.webmanifest`
- `service-worker.js`
- `offline.html`
- `.nojekyll`
- carpeta `icons`

No basta con sustituir únicamente `index.html`, porque la instalación necesita el manifiesto, el service worker y los iconos.

En **Settings → Pages**, mantén activada la publicación de la rama correspondiente y comprueba **Enforce HTTPS**.

## Android

1. Abre la dirección en Chrome.
2. Entra en **Datos**.
3. Pulsa **Instalar app**.
4. Confirma la instalación.

También puede instalarse desde el menú de Chrome mediante **Instalar aplicación** o **Añadir a pantalla de inicio**.

## iPad

1. Abre la dirección en Safari.
2. Pulsa el botón **Compartir**.
3. Elige **Añadir a pantalla de inicio**.
4. Activa **Abrir como app web** cuando aparezca.
5. Pulsa **Añadir**.

## Datos

La instalación no sincroniza móvil y ordenador. Cada dispositivo conserva su propia base IndexedDB. La app funciona sin conexión después de la primera carga, pero las copias y la sincronización siguen siendo responsabilidades separadas.
