import { IProductRepository } from "@/application/repositories/product-repository.interface";
import { Product, ProductUpdate } from "@/domain/models/product";

export class UpdateProductsUseCase {
  constructor(private productRepository: IProductRepository) {}

  async execute(productId: number, product: ProductUpdate): Promise<Product> {
    return this.productRepository.updateProduct(productId, product);
  }
}
