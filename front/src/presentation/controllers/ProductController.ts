// src/presentation/controllers/ProductController.ts
import { DeleteProductsUseCase } from "@/application/use-cases/DeleteProduct.usecase";
import { GetProductsUseCase } from "@/application/use-cases/GetProducts.usecase";
import { ProductRepository } from "@/infrastructure/repositories/product-repository";

export class ProductController {
  private getProductsUseCase: GetProductsUseCase;
  private deleteProductUseCase: DeleteProductsUseCase;

  constructor() {
    const productRepository = new ProductRepository();
    this.getProductsUseCase = new GetProductsUseCase(productRepository);
    this.deleteProductUseCase = new DeleteProductsUseCase(productRepository);
  }

  async getProducts() {
    return this.getProductsUseCase.execute();
  }

  async deleteProduct(id: number) {
    return this.deleteProductUseCase.execute(id);
  }
}
