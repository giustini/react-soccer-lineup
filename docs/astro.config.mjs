import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';
import catppuccin from '@catppuccin/starlight';

// https://astro.build/config
export default defineConfig({
  vite: {
    ssr: {
      noExternal: ['react-soccer-lineup'],
    },
  },
  integrations: [
    starlight({
      title: 'React Soccer Lineup',
      description: 'A soccer pitch representation component for React',
      logo: {
        src: '/public/favicon.png',
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/giustini/react-soccer-lineup',
        },
      ],
      favicon: '/favicon.png',
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'English',
          lang: 'en',
        },
        es: {
          label: 'Español',
          lang: 'es',
        },
      },
      sidebar: [
        {
          label: 'Introduction',
          translations: { es: 'Introducción' },
          items: [
            {
              label: 'Getting started',
              slug: 'getting-started',
              translations: { es: 'Empezando' },
            },
            {
              label: 'Basic Usage',
              slug: 'basic-usage',
              translations: { es: 'Uso básico' },
            },
          ],
        },
        {
          label: 'API Reference',
          translations: { es: 'Referencia API' },
          items: [
            {
              label: 'Overview',
              slug: 'api',
              translations: { es: 'Resumen' },
            },
            {
              label: 'Props',
              slug: 'api/props',
            },
            {
              label: 'Types',
              slug: 'api/types',
              translations: { es: 'Tipos' },
            },
          ],
        },
        {
          label: 'Guides',
          translations: { es: 'Guías' },
          items: [
            {
              label: 'Team configuration',
              slug: 'guides/teams',
              translations: { es: 'Configuración de equipos' },
            },
            {
              label: 'Player configuration',
              slug: 'guides/players',
              translations: { es: 'Configuración de jugadores' },
            },
            {
              label: 'Styling',
              slug: 'guides/styling',
              translations: { es: 'Estilos' },
            },
            {
              label: 'Formations',
              slug: 'guides/formations',
              translations: { es: 'Formaciones' },
            },
            {
              label: 'Responsive design',
              slug: 'guides/responsive',
              translations: { es: 'Diseño responsive' },
            },
          ],
        },
        {
          label: 'Examples',
          translations: { es: 'Ejemplos' },
          items: [
            {
              label: 'Real teams',
              slug: 'examples/teams',
              translations: { es: 'Equipos reales' },
            },
            {
              label: 'Real matches',
              slug: 'examples/matches',
              translations: { es: 'Partidos reales' },
            },
          ],
        },
      ],
      plugins: [
        catppuccin({
          dark: { flavor: 'mocha', accent: 'flamingo' },
          light: { flavor: 'latte', accent: 'rosewater' },
        }),
      ],
      customCss: ['./src/styles/custom.css'],
    }),
    react(),
  ],
});
