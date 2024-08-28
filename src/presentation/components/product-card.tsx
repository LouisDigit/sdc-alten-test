import { Product } from "@/domain/models/product";
import { Button } from "./ui/button";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="flex flex-col p-2 border gap-3">
      <div className="flex flex-col">
        <p className="text-md font-light text-gray-500">{product.category}</p>
        <p className="text-lg font-semibold">{product.name}</p>
      </div>

      <div className="flex gap-3">
        <Button variant="success">Modifier</Button>
        <Button variant="destructive">Supprimer</Button>
      </div>
    </div>
  );
};

export default ProductCard;
