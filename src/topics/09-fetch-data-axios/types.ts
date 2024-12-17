import { z } from 'zod'
import axios from 'axios'

const url = "https://www.course-api.com/react-tours-project";

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


export const fetchTours = async (): Promise<Tour[]> => {
    const response = await axios.get<Tour[]>(url)
    const result = tourSchema.array().safeParse(response.data);
    if (!result.success) {
        console.log(result.error.message);
        throw new Error("Falied to Parse");
    }
    return result.data
}