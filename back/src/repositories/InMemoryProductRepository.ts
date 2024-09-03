import { Product } from "../domain/Product";
import { ProductRepository } from "./ProductRepository";

export class InMemoryProductRepository implements ProductRepository {
  private products: Product[] = [];
  private currentId = 1;

  async create(product: Product): Promise<Product> {
    product.id = this.currentId++;
    product.createdAt = Date.now();
    product.updatedAt = Date.now();
    this.products.push(product);
    return product;
  }

  async findAll(): Promise<Product[]> {
    return this.products;
  }

  async findById(id: number): Promise<Product | null> {
    return this.products.find((product) => product.id === id) || null;
  }

  async update(
    id: number,
    productData: Partial<Product>
  ): Promise<Product | null> {
    const product = await this.findById(id);
    if (!product) return null;

    Object.assign(product, productData);
    product.updatedAt = Date.now();
    return product;
  }

  async delete(id: number): Promise<boolean> {
    const index = this.products.findIndex((product) => product.id === id);
    if (index === -1) return false;

    this.products.splice(index, 1);
    return true;
  }
}
