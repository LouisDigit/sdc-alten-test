import { Router } from "express";

import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../../controllers/ProductController";

const router = Router();

router.post("/products", createProduct);
router.get("/products", getAllProducts);
router.get("/products/:id", getProductById);
router.patch("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

export default router;
