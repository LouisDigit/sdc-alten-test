import { PrismaClient } from "@prisma/client";
import { IProductRepository } from "../../interfaces/IProductRepository";
import { Product } from "../../entities/Product";

const prisma = new PrismaClient();

export class PrismaProductRepository implements IProductRepository {
  async create(data: Omit<Product, "id">): Promise<Product> {
    return prisma.product.create({ data });
  }

  async findById(id: number): Promise<Product | null> {
    return prisma.product.findUnique({ where: { id } });
  }

  async findAll(): Promise<Product[]> {
    return prisma.product.findMany();
  }

  async update(id: number, data: Partial<Product>): Promise<Product | null> {
    return prisma.product.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<Product> {
    const deletedProduct = await prisma.product.delete({ where: { id } });
    return deletedProduct;
  }
}
