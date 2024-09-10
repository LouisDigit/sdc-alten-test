// __tests__/usecases/CreateProduct.test.ts
import { CreateProduct } from "../../src/usecases/CreateProduct";
import { Product } from "../../src/entities/Product";
import { IProductRepository } from "../../src/interfaces/IProductRepository";

// Crée un mock de ProductRepository
const mockProductRepository: jest.Mocked<IProductRepository> = {
  create: jest.fn(),
  findById: jest.fn(),
  findAll: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
};

describe("CreateProduct UseCase", () => {
  it("should create a new product", async () => {
    const productData = {
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

    // Mock the return value of the create method
    mockProductRepository.create.mockResolvedValue(productData as Product);

    const createProductUseCase = new CreateProduct(mockProductRepository);
    const createdProduct = await createProductUseCase.execute(productData);

    expect(createdProduct).toEqual(productData);
    expect(mockProductRepository.create).toHaveBeenCalledWith(productData);
  });

  it("should throw an error if product creation fails", async () => {
    const productData = {
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

    // Mock an error thrown by the create method
    mockProductRepository.create.mockRejectedValue(
      new Error("Product creation failed")
    );

    const createProductUseCase = new CreateProduct(mockProductRepository);

    await expect(createProductUseCase.execute(productData)).rejects.toThrow(
      "Product creation failed"
    );
    expect(mockProductRepository.create).toHaveBeenCalledWith(productData);
  });
});
