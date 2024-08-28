import { Button } from "@/presentation/components/ui/button";
import { Separator } from "@/presentation/components/ui/separator";
import ProductCard from "../components/product-card";
import products from "@/infrastructure/database/products.json";

const ProductsPage = () => {
  return (
    <div>
      <div className="flex flex-col items-center gap-3 w-full mb-3">
        <h2 className="text-2xl font-semibold">Liste des produits</h2>
        <Button>Créer produit</Button>
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
  );
};

export default ProductsPage;
