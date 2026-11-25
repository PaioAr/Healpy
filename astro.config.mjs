import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Si la página se ve sin estilos o sin imágenes en GitHub Pages, completá estos dos datos
// con tu usuario de GitHub y el nombre EXACTO del repositorio (ej: 'valentina' y 'divercity').
// Si los dejás vacíos, se toman solos de GitHub Actions.
const USUARIO = '';
const REPO = '';

const [o, r] = (process.env.GITHUB_REPOSITORY ?? '').split('/');
const owner = USUARIO || o;
const repo = REPO || r;
const esSitioPersonal = repo?.toLowerCase() === `${owner?.toLowerCase()}.github.io`;

export default defineConfig({
  site: owner ? `https://${owner}.github.io` : undefined,
  base: repo && !esSitioPersonal ? `/${repo}` : '/',
  vite: { plugins: [tailwindcss()] },
});
