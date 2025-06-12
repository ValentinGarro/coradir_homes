import z from 'zod';

export const FormSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    phone: z.string(),
    interesting: z.string(),
    message: z.string().optional()
});
export type FormSchema = z.infer< typeof FormSchema >;