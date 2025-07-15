import { z } from "zod";

export const usuarioSchema = z.object({
  email: z.string().email(),
  nome: z.string().min(3),
  tipo: z.enum(["comprador", "vendedor"]),
  senha: z.string().min(6),
});

export type Usuario = z.infer<typeof usuarioSchema>;
