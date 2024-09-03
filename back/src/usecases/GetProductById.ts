import { Product } from "../domain/Product";
import prisma from "../prismaClient";

export class GetProductById {
  async execute(id: number): Promise<Product | null> {
    const product = await prisma.product.findUnique({
      where: { id },
    });

    if (!product) return null;

    // Mapping Prisma Product to Domain Product
    return new Product(
      product.id,
      product.code,
      product.name,
      product.description,
      product.image,
      product.category,
      product.price,
      product.quantity,
      product.internalReference,
      product.shellId,
      product.inventoryStatus,
      product.rating,
      product.createdAt,
      product.updatedAt
    );
  }
}
