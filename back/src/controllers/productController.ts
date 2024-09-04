// src/controllers/ProductController.ts
import { Request, Response } from "express";
import { PrismaProductRepository } from "../infrastructure/prisma/PrismaProductRepository";
import { CreateProduct } from "../usecases/CreateProduct";
import { GetProductById } from "../usecases/GetProductById";
import { GetAllProducts } from "../usecases/GetAllProducts";
import { UpdateProduct } from "../usecases/UpdateProduct";
import { DeleteProduct } from "../usecases/DeleteProduct";

const productRepository = new PrismaProductRepository();

export const createProduct = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const createProductUseCase = new CreateProduct(productRepository);
  const product = await createProductUseCase.execute(req.body);
  return res.status(201).json(product);
};

export const getProductById = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const getProductByIdUseCase = new GetProductById(productRepository);
  const product = await getProductByIdUseCase.execute(Number(req.params.id));
  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }
  return res.status(200).json(product);
};

export const getAllProducts = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const getAllProductsUseCase = new GetAllProducts(productRepository);
  const products = await getAllProductsUseCase.execute();
  return res.status(200).json(products);
};

export const updateProduct = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const updateProductUseCase = new UpdateProduct(productRepository);
  const product = await updateProductUseCase.execute(
    Number(req.params.id),
    req.body
  );
  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }
  return res.status(200).json(product);
};

export const deleteProduct = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const deleteProductUseCase = new DeleteProduct(productRepository);
  const deletedProduct = await deleteProductUseCase.execute(
    Number(req.params.id)
  );
  return res.status(204).json(deletedProduct);
};
