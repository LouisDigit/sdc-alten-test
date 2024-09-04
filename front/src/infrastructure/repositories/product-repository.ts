import { IProductRepository } from "@/application/repositories/product-repository.interface";
import { Product } from "@/domain/models/product";
import { apiClient } from "../api/client";

export class ProductRepository implements IProductRepository {
  constructor() {}

  async getProducts(): Promise<Product[]> {
    const response = await apiClient.get("/products");
    return response.data;
  }

  async deleteProduct(id: number): Promise<Product> {
    const response = await apiClient.delete(`/products/${id}`);
    return response.data;
  }
}
