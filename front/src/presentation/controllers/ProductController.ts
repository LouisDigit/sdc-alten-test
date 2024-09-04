// src/presentation/controllers/ProductController.ts
import { GetProductsUseCase } from "@/application/use-cases/GetProducts.usecase";
import { ProductRepository } from "@/infrastructure/repositories/product-repository";

export class ProductController {
  private getProductsUseCase: GetProductsUseCase;

  constructor() {
    const productRepository = new ProductRepository();
    this.getProductsUseCase = new GetProductsUseCase(productRepository);
  }

  async getProducts() {
    return this.getProductsUseCase.execute();
  }
}
