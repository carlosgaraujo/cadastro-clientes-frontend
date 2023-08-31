import { z } from "zod";
import { userSchema } from "../../schemas/userSchema";

export const loginSchema = z.object({
    email: z.string().email("Deve ser um e-mail"),
    password: z.string().nonempty("Senha é obrigatória"),
});

export const loginSchermaResponse = loginSchema.extend({
    user: z.optional(userSchema)
})

export type LoginData = z.infer<typeof loginSchema>;


export type logindataResponse = z.infer<typeof loginSchermaResponse>