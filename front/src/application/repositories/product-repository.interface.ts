import { Product, ProductInsert, ProductUpdate } from "@/domain/models/product";

export interface IProductRepository {
  createProduct(product: ProductInsert): Promise<Product>;

  getProductById(id: number): Promise<Product>;

  getProducts(): Promise<Product[]>;

  deleteProduct(id: number): Promise<Product>;

  updateProduct(id: number, product: ProductUpdate): Promise<Product>;
}
