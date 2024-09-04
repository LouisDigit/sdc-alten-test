import { Button } from "@/presentation/components/ui/button";
import { Separator } from "@/presentation/components/ui/separator";
import ProductCard from "../components/product-card";
import { CreateProductModal } from "@/presentation/components/modals/create-product.modal";
import { useEffect, useState } from "react";
import { Product } from "@/domain/entities/product";
import { ProductController } from "@/presentation/controllers/ProductController";

const ProductsPage = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<Product[]>([]);
  const productController = new ProductController();

  useEffect(() => {
    const fetchProducts = async () => {
      const productsList = await productController.getProducts();
      setProducts(productsList);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <CreateProductModal
        isOpen={open}
        onClose={() => setOpen(false)}
        loading={loading}
      />
      <div>
        <div className="flex flex-col items-center gap-3 w-full mb-3">
          <h2 className="text-2xl font-semibold">Liste des produits</h2>
          <Button onClick={() => setOpen(true)}>Créer produit</Button>
        </div>
        <Separator />
        <ul className="flex flex-col mt-3 gap-2">
          {products.map((product) => (
            <li>
              <ProductCard key={product.id} product={product} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProductsPage;
