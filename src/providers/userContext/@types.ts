import { z } from "zod";
import {
    userUpdateSchema,
    userSchema,
    userSchemaRequest,
    userSchemaResponse,
    userSchemaResponseArray,
    userResponseSchemaProfile,
    userSchemaEdit,
} from "../../schemas/userSchema";

export interface UserProviderpros {
    children: React.ReactNode;
}

export type TUser = z.infer<typeof userSchema>;

export type TUserRequest = z.infer<typeof userSchemaRequest>;
export type TUserRequestEdit = z.infer<typeof userSchemaEdit>;

export type TUserUpdate = z.infer<typeof userUpdateSchema>;

export type TUserResponseArray = z.infer<typeof userSchemaResponseArray>;

export type TUserResponse = z.infer<typeof userSchemaResponse>;
export type TUserResponseProfile = z.infer<typeof userResponseSchemaProfile>;
