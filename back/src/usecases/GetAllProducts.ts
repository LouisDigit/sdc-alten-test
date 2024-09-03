import { Product } from "../domain/Product";
import { ProductRepository } from "../repositories/ProductRepository";

export class GetAllProducts {
  constructor(private productRepository: ProductRepository) {}

  async execute(): Promise<Product[]> {
    return this.productRepository.findAll();
  }
}
