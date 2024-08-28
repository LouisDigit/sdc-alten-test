import { IProductRepository } from "@/application/repositories/product-repository.interface";
import { Product } from "@/domain/models/product";

export class ProductRepository implements IProductRepository {
  constructor() {}

  async getProducts(): Promise<Product[]> {
    return [];
  }
}
