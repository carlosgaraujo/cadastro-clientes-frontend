import { z } from "zod";
import { contactSchema, contactSchemaRequest, contactSchemaResponseArray, contactUpdateSchema } from "../../schemas/contactSchema";


export type ContactProviderpros = {
    children: React.ReactNode;
  };


  export type TContact = z.infer<typeof contactSchema>;

  export type TContactRequest = z.infer<typeof contactSchemaRequest>;

  export type TContactUpdateRequest = z.infer<typeof contactUpdateSchema>;


  export type TContactResponse = z.infer<typeof contactSchemaResponseArray>;