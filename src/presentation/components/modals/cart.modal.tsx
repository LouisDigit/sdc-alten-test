"use client";
import { useEffect, useState } from "react";

import { Modal } from "@/presentation/components/ui/modal";

import useCart from "@/presentation/hooks/use-cart";
import ProductCard from "../product-card";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  loading: boolean;
}

export const CartModal: React.FC<CartModalProps> = ({
  isOpen,
  onClose,
  loading,
}) => {
  const cart = useCart();
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Modal
      title="Cart modal"
      description="This is your cart"
      isOpen={isOpen}
      onClose={onClose}
    >
      <ul>
        {cart.items.map((item, index) => (
          <ProductCard key={index} product={item} inCart={true} />
        ))}
      </ul>
    </Modal>
  );
};
