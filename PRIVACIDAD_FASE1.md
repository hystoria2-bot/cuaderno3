# Privacidad y seguridad · fase 1

## Mejoras respecto a la PWA

- La base IndexedDB pertenece a la aplicación Android, no a Chrome.
- Otra página alojada en `hystoria2.github.io` no puede abrir esta base.
- Android separa los datos de las diferentes aplicaciones.
- Se ha desactivado `allowBackup` para impedir copias automáticas no controladas.
- Se ha bloqueado el tráfico HTTP sin cifrar.

## Lo que aún falta

IndexedDB no cifra por sí sola el contenido. Una persona con acceso avanzado al
dispositivo, una copia forense o un dispositivo rooteado podría intentar leerlo.

Antes del uso oficial con datos sensibles conviene incorporar:

- contraseña o PIN;
- cifrado AES-GCM;
- bloqueo automático;
- biometría;
- copias JSON cifradas;
- firma estable del APK;
- aprobación del centro y del Delegado de Protección de Datos.
