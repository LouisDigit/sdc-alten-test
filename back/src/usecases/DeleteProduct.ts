import { IProductRepository } from "../interfaces/IProductRepository";

export class DeleteProduct {
  constructor(private productRepository: IProductRepository) {}

  async execute(id: number): Promise<void> {
    await this.productRepository.delete(id);
  }
}
