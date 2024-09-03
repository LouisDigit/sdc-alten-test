// __tests__/usecases/DeleteProduct.test.ts
import { DeleteProduct } from "../../src/usecases/DeleteProduct";
import { IProductRepository } from "../../src/interfaces/IProductRepository";

const mockProductRepository: jest.Mocked<IProductRepository> = {
  create: jest.fn(),
  findById: jest.fn(),
  findAll: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
};

describe("DeleteProduct UseCase", () => {
  it("should delete a product", async () => {
    mockProductRepository.delete.mockResolvedValue();

    const deleteProductUseCase = new DeleteProduct(mockProductRepository);
    await deleteProductUseCase.execute(1);

    expect(mockProductRepository.delete).toHaveBeenCalledWith(1);
  });

  it("should throw an error if deletion fails", async () => {
    mockProductRepository.delete.mockRejectedValue(
      new Error("Deletion failed")
    );

    const deleteProductUseCase = new DeleteProduct(mockProductRepository);

    await expect(deleteProductUseCase.execute(1)).rejects.toThrow(
      "Deletion failed"
    );
    expect(mockProductRepository.delete).toHaveBeenCalledWith(1);
  });
});
