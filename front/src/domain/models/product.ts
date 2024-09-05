import { z } from "zod";

export const ProductSchema = z.object({
  id: z.number(),
  code: z.string(),
  name: z.string(),
  description: z.string(),
  image: z.string(),
  // price number or string
  price: z.union([z.number(), z.string()]),
  category: z.string(),
  createdAt: z.number(),
  updatedAt: z.number(),
  shellId: z.number(),
  internalReference: z.string(),
  inventoryStatus: z.string(),
  rating: z.number(),
});

export type Product = z.infer<typeof ProductSchema>;

export const ProductInsertSchema = ProductSchema.pick({
  name: true,
  description: true,
  price: true,
  category: true,
});

export type ProductInsert = z.infer<typeof ProductInsertSchema>;

export const ProductUpdateSchema = ProductSchema.pick({
  name: true,
  description: true,
  price: true,
  category: true,
  inventoryStatus: true,
});

export type ProductUpdate = z.infer<typeof ProductUpdateSchema>;
