import { z } from "zod";

export const schemaEditProfile = z.object({
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

export type TEditProfile = z.infer<typeof schemaEditProfile>;
