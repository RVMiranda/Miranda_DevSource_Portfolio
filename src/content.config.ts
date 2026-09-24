import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { file } from "astro/loaders";
const text = z.object({
  title: z.string(),
  category: z.string(),
  summary: z.string(),
  challenge: z.string(),
  contribution: z.string(),
  solution: z.string(),
  outcome: z.string(),
  steps: z.array(z.string()),
});
export const collections = {
  projects: defineCollection({
    loader: file("src/content/projects.json"),
    schema: z.object({
      order: z.number(),
      year: z.string(),
      tone: z.enum(["blue", "plum", "cream"]),
      tech: z.array(z.string()),
      es: text,
      en: text,
    }),
  }),
};
