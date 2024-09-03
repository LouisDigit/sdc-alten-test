import { Request, Response } from "express";
import { CreateProduct } from "../usecases/CreateProduct";
import { GetAllProducts } from "../usecases/GetAllProducts";
import { GetProductById } from "../usecases/GetProductById";
import { UpdateProduct } from "../usecases/UpdateProduct";
import { DeleteProduct } from "../usecases/DeleteProduct";
import { InMemoryProductRepository } from "../repositories/InMemoryProductRepository";

const productRepository = new InMemoryProductRepository();

export const createProduct = async (req: Request, res: Response) => {
  const createProductUseCase = new CreateProduct(productRepository);

  try {
    const product = await createProductUseCase.execute(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const getAllProducts = async (req: Request, res: Response) => {
  const getAllProductsUseCase = new GetAllProducts(productRepository);

  try {
    const products = await getAllProductsUseCase.execute();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const getProductById = async (req: Request, res: Response) => {
  const getProductByIdUseCase = new GetProductById(productRepository);

  try {
    const product = await getProductByIdUseCase.execute(Number(req.params.id));
    if (!product) return res.status(404).json({ error: "Product not found" });

    res.json(product);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  const updateProductUseCase = new UpdateProduct(productRepository);

  try {
    const product = await updateProductUseCase.execute(
      Number(req.params.id),
      req.body
    );
    if (!product) return res.status(404).json({ error: "Product not found" });

    res.json(product);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  const deleteProductUseCase = new DeleteProduct(productRepository);

  try {
    const deleted = await deleteProductUseCase.execute(Number(req.params.id));
    if (!deleted) return res.status(404).json({ error: "Product not found" });

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};
