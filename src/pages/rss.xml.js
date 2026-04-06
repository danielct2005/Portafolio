import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const projects = await getCollection('projects');
  
  const items = projects.map((project) => ({
    title: project.data.title,
    pubDate: new Date(), // Los proyectos no tienen fecha, usamos actual
    description: project.data.description,
    link: `/projects/${project.id.replace(/\.md$/, '')}/`,
  }));

  return rss({
    title: 'DC Dev - Portafolio',
    description: 'Sistemas de agendamiento y catálogos web para negocios chilenos',
    site: context.site,
    items: items,
    customData: `<language>es-cl</language>`,
  });
}