import { useState } from "react";
import { Product } from "@/domain/models/product";

import { Button } from "@/presentation/components/ui/button";
import { UpdateProductModal } from "./modals/edit-product.modal";
import { DeleteProductModal } from "./modals/delete-product.modal";
import useCart from "@/presentation/hooks/use-cart";
import { useToast } from "@/presentation/hooks/use-toast";
import { ProductController } from "../controllers/ProductController";
import { Badge } from "./ui/badge";
import Rating from "./ui/rating";

type ProductCart = Product & { quantity: number };

interface ProductCardProps {
  product: ProductCart;
  inCart?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  inCart = false,
}) => {
  const [openUpdateModal, setOpenUpdateModal] = useState<boolean>(false);
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const { toast } = useToast();
  const cart = useCart();

  const productController = new ProductController();

  const deleteProduct = () => {
    productController.deleteProduct(product.id);
    setOpenDeleteModal(false);
    toast({
      title: "Supprimé",
      description: "Produit supprimé du catalogue",
    });
  };

  const onAddToCart = () => {
    const result = cart.addItem({ ...product, quantity: 1 });
    if (result) {
      toast({
        title: "Ajouté",
        description: "Produit ajouté au panier",
      });
    } else {
      toast({
        title: "Non ajouté",
        description: "Produit déjà dans le panier ou en rupture de stock",
      });
    }
  };

  return (
    <>
      <UpdateProductModal
        isOpen={openUpdateModal}
        onClose={() => setOpenUpdateModal(false)}
        loading={loading}
        product={product}
      />
      <DeleteProductModal
        isOpen={openDeleteModal}
        onClose={() => setOpenDeleteModal(false)}
        onConfirm={deleteProduct}
        loading={loading}
      />

      <div className="flex flex-col p-2 border gap-3">
        <div className="flex flex-col">
          <div className="w-full flex flex-row justify-between">
            <p className="text-md font-light text-gray-500 ">
              {product.category}
            </p>
            <Badge>{product.inventoryStatus}</Badge>
          </div>
          <Rating rating={product.rating} />

          <p className="text-lg font-semibold">{product.name}</p>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex gap-3">
            {!inCart && (
              <>
                <Button variant="success" onClick={onAddToCart}>
                  Ajouter au panier
                </Button>
                <Button onClick={() => setOpenUpdateModal(true)}>
                  Modifier
                </Button>
              </>
            )}
            {inCart ? (
              <>
                <Badge>Quantité : {product.quantity}</Badge>
                <Button
                  variant="destructive"
                  onClick={() => cart.removeItem(product.id)}
                >
                  Supprimer
                </Button>
              </>
            ) : (
              <Button
                variant="destructive"
                onClick={() => setOpenDeleteModal(true)}
              >
                Supprimer
              </Button>
            )}
          </div>
          <p className="text-lg font-semibold">{product.price} €</p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
