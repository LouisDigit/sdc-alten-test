import { IProductRepository } from "../interfaces/IProductRepository";
import { Product } from "../entities/Product";

export class DeleteProduct {
  constructor(private productRepository: IProductRepository) {}

  async execute(id: number): Promise<Product> {
    return await this.productRepository.delete(id);
  }
}
