import { z } from "zod";
import { contactSchema } from "./contactSchema";

export const userSchema = z.object({
    id: z.number(),
    nomeCompleto: z.string(),
    email: z
        .string()
        .min(1, {
            message: "O Email é obrigatório.",
        })
        .email("Email Invalido"),
    telefone: z.string(),
    dataRegistro: z.string(),
});

export const userSchemaRequest = userSchema
    .omit({
        id: true,
        dataRegistro: true,
    })
    .extend({
        password: z.string().max(120),
    });

export const userSchemaEdit = userSchema.omit({
    id:true,
    dataRegistro:true
})

export const userSchemaResponse = userSchema.extend({
    contacts: z.optional(contactSchema).array(),
});

export const userSchemaResponseArray = userSchemaResponse.array()

export const userUpdateSchema = userSchemaRequest.partial();

export const userResponseSchemaProfile = userSchema


