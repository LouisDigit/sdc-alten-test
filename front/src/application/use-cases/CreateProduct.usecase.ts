import { IProductRepository } from "@/application/repositories/product-repository.interface";
import { Product, ProductInsert } from "@/domain/models/product";

export class CreateProductsUseCase {
  constructor(private productRepository: IProductRepository) {}

  async execute(product: ProductInsert): Promise<Product> {
    return this.productRepository.createProduct(product);
  }
}
