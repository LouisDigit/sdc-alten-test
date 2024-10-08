import { IProductRepository } from "@/application/repositories/product-repository.interface";
import { Product } from "@/domain/models/product";

export class GetProductsUseCase {
  constructor(private productRepository: IProductRepository) {}

  async execute(): Promise<Product[]> {
    return this.productRepository.getProducts();
  }
}
