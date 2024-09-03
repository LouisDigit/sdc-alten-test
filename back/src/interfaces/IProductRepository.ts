import { Product } from "../entities/Product";

export interface IProductRepository {
  create(data: Omit<Product, "id">): Promise<Product>;
  findById(id: number): Promise<Product | null>;
  findAll(): Promise<Product[]>;
  update(id: number, data: Partial<Product>): Promise<Product | null>;
  delete(id: number): Promise<void>;
}
