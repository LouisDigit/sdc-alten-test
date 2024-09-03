import { Product } from "@/domain/models/product";
import { Button } from "./ui/button";
import { UpdateProductModal } from "./modals/edit-product.modal";
import { DeleteProductModal } from "./modals/delete-product.modal";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [openUpdateModal, setOpenUpdateModal] = useState<boolean>(false);
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const deleteProduct = () => {};

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
          <Button variant="success" onClick={() => setOpenUpdateModal(true)}>
            Modifier
          </Button>
          <Button
            variant="destructive"
            onClick={() => setOpenDeleteModal(true)}
          >
            Supprimer
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
