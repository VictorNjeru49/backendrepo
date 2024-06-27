import { z } from 'zod'

export const authorSchema = z.object({
    id: z.number(),
    name: z.string(),
    
})

export const bookSchema = z.object({
    id: z.number(),
    title: z.string(),
    year: z.number(),
    authorId: z.number(),
    
});