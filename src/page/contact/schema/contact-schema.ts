import { z } from "zod";

export const ContactSchema = z.object({
  firstName: z.string().min(2, {
    message: "Imię musi mieć co najmniej 2 znaki.",
  }),
  lastName: z.string().min(2, {
    message: "Nazwisko musi mieć co najmniej 2 znaki.",
  }),
  email: z.email({
    message: "Podaj poprawny adres e-mail.",
  }),
  topic: z.string().min(3, {
    message: "Temat powinien mieć co najmniej 3 znaki.",
  }),
  description: z.string().min(10, {
    message: "Treść wiadomości musi mieć co najmniej 10 znaków.",
  }),
});

export type ContactSchemaType = z.infer<typeof ContactSchema>;
