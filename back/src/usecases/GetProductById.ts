import { IProductRepository } from "../interfaces/IProductRepository";
import { Product } from "../entities/Product";

export class GetProductById {
  constructor(private productRepository: IProductRepository) {}

  async execute(id: number): Promise<Product | null> {
    return this.productRepository.findById(id);
  }
}
