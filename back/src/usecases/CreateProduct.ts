import { IProductRepository } from "../interfaces/IProductRepository";
import { Product } from "../entities/Product";

export class CreateProduct {
  constructor(private productRepository: IProductRepository) {}

  async execute(data: Omit<Product, "id">): Promise<Product> {
    return this.productRepository.create(data);
  }
}
