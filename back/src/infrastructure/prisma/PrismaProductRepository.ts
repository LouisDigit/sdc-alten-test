import { PrismaClient } from "@prisma/client";
import { IProductRepository } from "../../interfaces/IProductRepository";
import { Product } from "../../entities/Product";

const prisma = new PrismaClient();

export class PrismaProductRepository implements IProductRepository {
  private toDomain(product: any): Product {
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
      Number(product.createdAt), // Conversion de bigint en number
      Number(product.updatedAt) // Conversion de bigint en number
    );
  }

  async create(data: Omit<Product, "id">): Promise<Product> {
    const newProduct = await prisma.product.create({ data });
    return this.toDomain(newProduct);
  }

  async findById(id: number): Promise<Product | null> {
    const product = await prisma.product.findUnique({ where: { id } });
    return product ? this.toDomain(product) : null;
  }

  async findAll(): Promise<Product[]> {
    const products = await prisma.product.findMany();
    return products.map(this.toDomain);
  }

  async update(id: number, data: Partial<Product>): Promise<Product | null> {
    const updatedProduct = await prisma.product.update({
      where: { id },
      data,
    });
    return this.toDomain(updatedProduct);
  }

  async delete(id: number): Promise<Product> {
    const deletedProduct = await prisma.product.delete({ where: { id } });
    return this.toDomain(deletedProduct);
  }
}
