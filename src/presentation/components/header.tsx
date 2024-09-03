import reactLogo from "@/presentation/assets/react-logo.png";
import { ShoppingCartIcon } from "lucide-react";
import Container from "./layout/container";
import useCart from "@/presentation/hooks/use-cart";
import { CartModal } from "./modals/cart.modal";
import { useEffect, useState } from "react";

const Header: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const cart = useCart();

  useEffect(() => {
    if (cart.items.length === 0) {
      setOpen(false);
    }
  }, [cart]);

  return (
    <>
      <CartModal isOpen={open} onClose={() => setOpen(false)} />

      <header className="h-24 border-b">
        <Container>
          <div className="flex md:flex-row justify-between items-center py-3">
            <img src={reactLogo} className="h-16" alt="React logo" />
            <h1 className="uppercase md:text-xl font-semibold">alten shop</h1>
            <div
              className="relative cursor-pointer"
              onClick={() => {
                if (cart.items.length > 0) {
                  setOpen(true);
                }
              }}
            >
              <ShoppingCartIcon size={24} />
              {cart.items.length > 0 && (
                <span className=" absolute bg-red-500 rounded-full w-5 h-5 text-white flex items-center justify-center top-3 left-4">
                  {cart.items.length > 0 && cart.items.length}
                </span>
              )}
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
