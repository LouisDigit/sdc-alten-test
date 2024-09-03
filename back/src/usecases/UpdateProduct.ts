import { IProductRepository } from "../interfaces/IProductRepository";
import { Product } from "../entities/Product";

export class UpdateProduct {
  constructor(private productRepository: IProductRepository) {}

  async execute(id: number, data: Partial<Product>): Promise<Product | null> {
    return this.productRepository.update(id, data);
  }
}
