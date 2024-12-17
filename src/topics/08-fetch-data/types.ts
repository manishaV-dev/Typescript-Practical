import { z } from 'zod'

export const tourSchema = z.object({
    // this id name n all come from api that we call in index.tsx file
    // to set type we use here zod
    id: z.string(),
    name: z.string(),
    image: z.string(),
    price: z.string(),
    info: z.string(),
})

export type Tour = z.infer<typeof tourSchema>