import { Product } from "../domain/Product";
import prisma from "../prismaClient";

export class CreateProduct {
  async execute(
    data: Omit<Product, "id" | "createdAt" | "updatedAt">
  ): Promise<Product> {
    const createdProduct = await prisma.product.create({
      data: {
        ...data,
      },
    });

    // Mapping Prisma Product to Domain Product
    return new Product(
      createdProduct.id,
      createdProduct.code,
      createdProduct.name,
      createdProduct.description,
      createdProduct.image,
      createdProduct.category,
      createdProduct.price,
      createdProduct.quantity,
      createdProduct.internalReference,
      createdProduct.shellId,
      createdProduct.inventoryStatus,
      createdProduct.rating,
      createdProduct.createdAt,
      createdProduct.updatedAt
    );
  }
}
