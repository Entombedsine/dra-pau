# Sitio de la Dra. Paula

Página estática (HTML + CSS + JS), sin build. Lista para GitHub Pages.

## Reemplazar placeholders
Busca los comentarios `<!-- EDITAR: ... -->` en `index.html`:

- **Nombre / apellido**: `[Apellido]` (título, header, hero, footer).
- **Cédula profesional**: `[00000000]`.
- **WhatsApp**: cambia `520000000000` (código de país + número, sin `+`) en los 3 enlaces `wa.me`.
- **Foto**: sustituye `assets/avatar.svg` o cambia el `src` de la imagen del hero.
- **Ubicación y horarios**: sección `#ubicacion`; reemplaza el bloque `.map-placeholder` por el `<iframe>` de Google Maps.
- **Biografía**: sección `#sobre-mi`.

Colores en `css/styles.css` (variables en `:root`).

## Publicar en GitHub Pages
1. Crea un repositorio y sube estos archivos a la raíz.
2. Settings → Pages → *Deploy from a branch* → `main` / `/ (root)`.
3. Tu sitio quedará en `https://<usuario>.github.io/<repo>/`.

Prueba local: `python -m http.server` y abre http://localhost:8000.
# dra-pau
