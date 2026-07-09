# Cuaderno GH para Android · fase 1

Proyecto Android híbrido creado con Capacitor 8 a partir del cuaderno web.

## Estado

- Identificador Android: `es.hystoria2.cuadernogeh`
- Nombre visible: `Cuaderno GH`
- Versión: `1.0`
- Android mínimo: 7.0, API 24
- Android objetivo: API 36
- Java: 21
- Capacitor: 8.4.1

## Funciones nativas incorporadas

- Aplicación instalada con espacio de datos propio.
- IndexedDB privada de la aplicación.
- Icono adaptable y pantalla de inicio.
- Botón Atrás de Android.
- Exportación JSON y CSV mediante el panel Compartir de Android.
- Importación con selector de archivos.
- Service worker desactivado dentro del APK.
- Tráfico HTTP sin cifrar bloqueado.
- Copia automática del sistema Android desactivada.

## Compilar con GitHub

El proyecto incluye `.github/workflows/build-android.yml`.

1. Crea un repositorio, por ejemplo `cuaderno-geh-android`.
2. Sube el contenido de esta carpeta, no el ZIP cerrado.
3. Abre la pestaña **Actions**.
4. Selecciona **Compilar APK Android**.
5. Pulsa **Run workflow**.
6. Al terminar, descarga el artefacto `cuaderno-gh-android-debug`.
7. Dentro encontrarás `app-debug.apk`.

## Compilar en Android Studio

Requisitos:

- Node.js 22 o posterior.
- Android Studio 2025.2.1 o posterior.
- Android SDK 36.

Comandos:

```bash
npm ci
npx cap sync android
npx cap open android
```

Desde Android Studio, selecciona **Build > Build APK(s)**.

También puede compilarse desde terminal:

```bash
./scripts/build-debug.sh
```

## Datos de la PWA anterior

La PWA y el APK usan bases distintas. Para trasladar los datos:

1. En la PWA, abre **Datos > Copia JSON**.
2. Instala el APK.
3. En el APK, abre **Datos > Importar copia JSON**.

## Limitaciones de esta fase

- No hay sincronización entre dispositivos.
- Los datos todavía no están cifrados mediante contraseña.
- No se ha creado una firma de publicación estable.
- La primera carga de los currículos completos necesita conexión; después quedan almacenados localmente.
- El APK de depuración sirve para pruebas, no para Google Play.
