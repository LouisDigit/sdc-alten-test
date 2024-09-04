import { IProductRepository } from "@/application/repositories/product-repository.interface";
import { Product } from "@/domain/models/product";

export class DeleteProductsUseCase {
  constructor(private productRepository: IProductRepository) {}

  async execute(productId: number): Promise<Product> {
    return this.productRepository.deleteProduct(productId);
  }
}
