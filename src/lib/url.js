// Agrega el "base" del sitio (por ejemplo /divercity en GitHub Pages) a las rutas de public/
export const asset = (path) => import.meta.env.BASE_URL.replace(/\/$/, '') + path;
