# Cuaderno del Departamento · versión 4.5

## Corrección de navegación en Android

La barra inferior se ha convertido en un carrusel horizontal táctil real:

- botones de ancho fijo;
- desplazamiento horizontal con el dedo;
- inercia nativa en Android;
- `touch-action: pan-x`;
- sin barra de desplazamiento visible;
- separación respecto a la zona de gestos del sistema;
- centrado automático de la sección activa;
- funcionamiento en móviles estrechos.

## Actualización de la PWA

El service worker usa ahora la caché `cuaderno-gh-v45`. Después de publicar los
archivos:

1. Abre la app con conexión.
2. Ciérrala por completo.
3. Vuelve a abrirla.
4. Si aún aparece la versión anterior, abre la web en Chrome y recarga una vez.

Los datos IndexedDB se conservan durante la actualización.
