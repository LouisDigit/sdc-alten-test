// __tests__/usecases/UpdateProduct.test.ts
import { UpdateProduct } from "../../src/usecases/UpdateProduct";
import { Product } from "../../src/entities/Product";
import { IProductRepository } from "../../src/interfaces/IProductRepository";

const mockProductRepository: jest.Mocked<IProductRepository> = {
  create: jest.fn(),
  findById: jest.fn(),
  findAll: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
};

describe("UpdateProduct UseCase", () => {
  it("should update a product", async () => {
    const productData = {
      id: 1,
      code: "P12345",
      name: "Test Product",
      description: "This is a test product",
      image: "https://example.com/product.jpg",
      category: "Electronics",
      price: 199.99,
      quantity: 50,
      internalReference: "REF12345",
      shellId: 1,
      inventoryStatus: "INSTOCK" as const,
      rating: 4,
      createdAt: Number(new Date()),
      updatedAt: Number(new Date()),
    };

    const updatedData = { name: "Updated Product" };

    mockProductRepository.update.mockResolvedValue({
      ...productData,
      ...updatedData,
    } as Product);

    const updateProductUseCase = new UpdateProduct(mockProductRepository);
    const updatedProduct = await updateProductUseCase.execute(1, updatedData);

    expect(updatedProduct).toEqual({ ...productData, ...updatedData });
    expect(mockProductRepository.update).toHaveBeenCalledWith(1, updatedData);
  });

  it("should return null if product not found", async () => {
    const updatedData = { name: "Updated Product" };

    mockProductRepository.update.mockResolvedValue(null);

    const updateProductUseCase = new UpdateProduct(mockProductRepository);
    const updatedProduct = await updateProductUseCase.execute(1, updatedData);

    expect(updatedProduct).toBeNull();
    expect(mockProductRepository.update).toHaveBeenCalledWith(1, updatedData);
  });
});
