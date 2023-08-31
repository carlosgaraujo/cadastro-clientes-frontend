import { z } from "zod";

export const contactSchema = z.object({
    id: z.number(),
    nomeCompleto: z.string(),
    email: z.string().email(),
    telefone: z.string(),
    dataRegistro: z.string(),
});

export const contactSchemaRequest = contactSchema.omit({
    id: true,
    dataRegistro: true,
});

export const contactSchemaResponseArray = contactSchema.array();

export const contactUpdateSchema = contactSchemaRequest.partial();
