import {z} from 'zod';

export const formSchema = z.object({
  title: z.string().min(3, {message: "Title must be at least 3 characters"}).max(100, {message: "Title must be at most 100 characters"}),
  description: z.string().min(20, {message: "Description must be at least 20 characters"}).max(500, {message: "Description must be at most 500 characters"}),
  category: z.string().min(3, {message: "Category must be at least 3 characters"}).max(20, {message: "Category must be at most 20 characters"}),
  link: z.string().url().refine((url) => /\.(jpg|jpeg|png|gif|bmp|webp)$/i.test(url), {
    message: "URL must end with an image format (jpg, jpeg, png, gif, bmp, webp)",
  }),
  pitch: z.string().min(10, {message: "Pitch must be at least 10 characters"}),
});