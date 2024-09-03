import { IProductRepository } from "../interfaces/IProductRepository";
import { Product } from "../entities/Product";

export class GetAllProducts {
  constructor(private productRepository: IProductRepository) {}

  async execute(): Promise<Product[]> {
    return this.productRepository.findAll();
  }
}
