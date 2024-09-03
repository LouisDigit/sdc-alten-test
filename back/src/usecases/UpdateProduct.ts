import { Product } from "../domain/Product";
import prisma from "../prismaClient";

export class UpdateProduct {
  async execute(id: number, data: Partial<Product>) {
    return prisma.product.update({
      where: { id },
      data: {
        ...data,
        updatedAt: Date.now(),
      },
    });
  }
}
