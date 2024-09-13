import { IProductRepository } from "@/application/repositories/product-repository.interface";
import { Product, ProductInsert, ProductUpdate } from "@/domain/models/product";
import { apiClient } from "../api/client";
import { generateRandomString } from "../utils/random";
import { ApiOperationError, NotFoundError } from "@/domain/errors/common";

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
      throw new ApiOperationError("Product create failed.");
    }
  }

  async getProductById(id: number): Promise<Product> {
    try {
      const response = await apiClient.get(`/products/${id}`);
      return response.data;
    } catch (e) {
      throw new NotFoundError("Product fetch failed.");
    }
  }

  async getProducts(): Promise<Product[]> {
    try {
      const response = await apiClient.get("/products");
      return response.data;
    } catch (e) {
      throw new NotFoundError("Products fetch failed.");
    }
  }

  async deleteProduct(id: number): Promise<Product> {
    try {
      const response = await apiClient.delete(`/products/${id}`);
      return response.data;
    } catch (e) {
      throw new ApiOperationError("Product delete failed.");
    }
  }

  async updateProduct(id: number, product: ProductUpdate): Promise<Product> {
    try {
      const response = await apiClient.patch(`/products/${id}`, {
        ...product,
        price: Number(product.price),
      });
      return response.data;
    } catch (e) {
      // TODO : create custom error
      throw new ApiOperationError("Product update failed.");
    }
  }
}
