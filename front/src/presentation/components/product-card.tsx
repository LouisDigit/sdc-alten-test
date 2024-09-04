import { useState } from "react";
import { Product } from "@/domain/models/product";

import { Button } from "@/presentation/components/ui/button";
import { UpdateProductModal } from "./modals/edit-product.modal";
import { DeleteProductModal } from "./modals/delete-product.modal";
import useCart from "@/presentation/hooks/use-cart";
import { useToast } from "@/presentation/hooks/use-toast";
import { ProductController } from "../controllers/ProductController";

interface ProductCardProps {
  product: Product;
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
    const result = cart.addItem(product);
    if (result) {
      toast({
        title: "Ajouté",
        description: "Produit ajouté au panier",
      });
    } else {
      toast({
        title: "Non ajouté",
        description: "Produit déjà dans le panier",
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
          <p className="text-md font-light text-gray-500">{product.category}</p>
          <p className="text-lg font-semibold">{product.name}</p>
        </div>

        <div className="flex gap-3">
          {!inCart && (
            <>
              <Button variant="success" onClick={onAddToCart}>
                Ajouter au panier
              </Button>
              <Button onClick={() => setOpenUpdateModal(true)}>Modifier</Button>
            </>
          )}
          {inCart ? (
            <Button
              variant="destructive"
              onClick={() => cart.removeItem(product.id)}
            >
              Supprimer
            </Button>
          ) : (
            <Button
              variant="destructive"
              onClick={() => setOpenDeleteModal(true)}
            >
              Supprimer
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
