# Corrección de GitHub Actions

## Causa

El `package-lock.json` original contenía 97 URLs que apuntaban a un
registro interno no accesible desde GitHub Actions.

## Solución aplicada

- Sustitución de todas las URLs internas por `https://registry.npmjs.org/`.
- Nuevo archivo `.npmrc` con el registro público.
- `actions/setup-node` configurado con `registry-url`.
- `npm ci` ejecutado explícitamente contra el registro público.

## Sustitución mínima

Puedes reemplazar únicamente:

- `package-lock.json`
- `.npmrc`
- `.github/workflows/build-android.yml`

Después vuelve a ejecutar el workflow **Compilar APK Android**.
