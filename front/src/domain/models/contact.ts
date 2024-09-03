import { z } from "zod";

export const ContactSchema = z.object({
  objet: z.string(),
  email: z.string(),
  message: z.string(),
});
