import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Colección de proyectos con validación estricta
const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string().min(1, "El título es requerido"),
    description: z.string().min(10, "La descripción debe tener al menos 10 caracteres"),
    technologies: z.array(z.string()).min(1, "Debes incluir al menos una tecnología"),
    image: z.string().url("URL de imagen inválida"),
    liveUrl: z.string().url().optional(),
    order: z.number().default(0),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { projects };