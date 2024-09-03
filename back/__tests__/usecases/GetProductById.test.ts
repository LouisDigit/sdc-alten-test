// __tests__/usecases/GetProductById.test.ts
import { GetProductById } from "../../src/usecases/GetProductById";
import { Product } from "../../src/entities/Product";
import { IProductRepository } from "../../src/interfaces/IProductRepository";

const mockProductRepository: jest.Mocked<IProductRepository> = {
  create: jest.fn(),
  findById: jest.fn(),
  findAll: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
};
describe("GetProductById UseCase", () => {
  it("should return a product by ID", async () => {
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
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    mockProductRepository.findById.mockResolvedValue(productData as Product);

    const getProductByIdUseCase = new GetProductById(mockProductRepository);
    const product = await getProductByIdUseCase.execute(1);

    expect(product).toEqual(productData);
    expect(mockProductRepository.findById).toHaveBeenCalledWith(1);
  });

  it("should return null if product not found", async () => {
    mockProductRepository.findById.mockResolvedValue(null);

    const getProductByIdUseCase = new GetProductById(mockProductRepository);
    const product = await getProductByIdUseCase.execute(1);

    expect(product).toBeNull();
    expect(mockProductRepository.findById).toHaveBeenCalledWith(1);
  });
});
