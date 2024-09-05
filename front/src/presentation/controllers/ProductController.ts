// src/presentation/controllers/ProductController.ts
import { CreateProductsUseCase } from "@/application/use-cases/CreateProduct.usecase";
import { DeleteProductsUseCase } from "@/application/use-cases/DeleteProduct.usecase";
import { GetProductsUseCase } from "@/application/use-cases/GetProducts.usecase";
import { UpdateProductsUseCase } from "@/application/use-cases/UpdateProduct.usecase";
import { ProductInsert, ProductUpdate } from "@/domain/models/product";
import { ProductRepository } from "@/infrastructure/repositories/product-repository";

export class ProductController {
  private getProductsUseCase: GetProductsUseCase;
  private deleteProductUseCase: DeleteProductsUseCase;
  private updateProductUseCase: UpdateProductsUseCase;
  private createProductUseCase: CreateProductsUseCase;

  constructor() {
    const productRepository = new ProductRepository();
    this.getProductsUseCase = new GetProductsUseCase(productRepository);
    this.deleteProductUseCase = new DeleteProductsUseCase(productRepository);
    this.updateProductUseCase = new UpdateProductsUseCase(productRepository);
    this.createProductUseCase = new CreateProductsUseCase(productRepository);
  }

  async createProduct(product: ProductInsert) {
    return this.createProductUseCase.execute(product);
  }

  async getProducts() {
    return this.getProductsUseCase.execute();
  }

  async deleteProduct(id: number) {
    return this.deleteProductUseCase.execute(id);
  }

  async updateProduct(id: number, product: ProductUpdate) {
    return this.updateProductUseCase.execute(id, product);
  }
}
