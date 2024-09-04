import { Product } from "@/domain/models/product";

export interface IProductRepository {
  getProducts(): Promise<Product[]>;

  deleteProduct(id: number): Promise<Product>;
}
