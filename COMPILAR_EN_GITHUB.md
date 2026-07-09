# Obtener el APK mediante GitHub Actions

## Repositorio recomendado

Usa un repositorio independiente llamado, por ejemplo:

`cuaderno-geh-android`

No es necesario mezclar el proyecto Android con el repositorio de GitHub Pages.

## Pasos

1. Descomprime `cuaderno-geh-android-fase1.zip`.
2. Sube todos los archivos y carpetas al repositorio.
3. Comprueba que existe:

   `.github/workflows/build-android.yml`

4. Abre **Actions** en GitHub.
5. En la columna izquierda, selecciona **Compilar APK Android**.
6. Pulsa **Run workflow** y confirma.
7. Cuando aparezca el indicador verde, abre la ejecución.
8. En **Artifacts**, descarga `cuaderno-gh-android-debug`.
9. Descomprime el archivo descargado para obtener `app-debug.apk`.

## Instalación en Android

1. Envía `app-debug.apk` al móvil.
2. Ábrelo desde Archivos o Descargas.
3. Android puede pedir autorización para instalar aplicaciones desde esa fuente.
4. Autoriza solo la aplicación usada para abrir el APK.
5. Instala `Cuaderno GH`.

## Actualizaciones

Mientras se use la misma firma de depuración de una misma compilación local, Android puede actualizar la app. Los APK generados en ejecuciones distintas de GitHub Actions pueden usar claves de depuración diferentes. Para actualizaciones estables será necesario crear una clave de firma propia en la fase 2.
