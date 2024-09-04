import { Product } from "@/domain/entities/product";

export interface IProductRepository {
  getProducts(): Promise<Product[]>;
}
