import { z } from "zod";

export const ProductSchema = z.object({
  id: z.number(),
  code: z.string(),
  name: z.string(),
  description: z.string(),
  image: z.string(),
  price: z.number(),
  category: z.string(),
  createdAt: z.number(),
  updatedAt: z.number(),
  shellId: z.number(),
  internalReference: z.string(),
  inventoryStatus: z.string(),
  rating: z.number(),
});

export type Product = z.infer<typeof ProductSchema>;
