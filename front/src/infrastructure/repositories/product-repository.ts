import { IProductRepository } from "@/application/repositories/product-repository.interface";
import { Product, ProductInsert, ProductUpdate } from "@/domain/models/product";
import { apiClient } from "../api/client";
import { generateRandomString } from "../utils/random";

export class ProductRepository implements IProductRepository {
  constructor() {}

  async createProduct(product: ProductInsert): Promise<Product> {
    try {
      const response = await apiClient.post("/products", {
        ...product,
        price: Number(product.price),
        image: product.name + ".jpg",
        createdAt: Number(new Date()),
        updatedAt: Number(new Date()),
        shellId: 15,
        internalReference: "REF-123-456",
        inventoryStatus: "INSTOCK",
        rating: Math.floor(Math.random() * 6),
        code: generateRandomString(9),
      });
      return response.data;
    } catch (e) {
      // TODO : create custom error
      throw new Error("Product create failed.");
    }
  }

  async getProducts(): Promise<Product[]> {
    try {
      const response = await apiClient.get("/products");
      return response.data;
    } catch (e) {
      // TODO : create custom error
      throw new Error("Products fetch failed.");
    }
  }

  async deleteProduct(id: number): Promise<Product> {
    try {
      const response = await apiClient.delete(`/products/${id}`);
      return response.data;
    } catch (e) {
      // TODO : create custom error
      throw new Error("Product delete failed.");
    }
  }

  async updateProduct(id: number, product: ProductUpdate): Promise<Product> {
    try {
      const response = await apiClient.put(`/products/${id}`, product);
      return response.data;
    } catch (e) {
      // TODO : create custom error
      throw new Error("Product update failed.");
    }
  }
}
