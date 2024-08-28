import reactLogo from "@/presentation/assets/react-logo.png";
import { ShoppingCartIcon } from "lucide-react";
import Container from "./layout/container";

const Header: React.FC = () => {
  return (
    <header className="h-24 border-b">
      <Container>
        <div className="flex md:flex-row justify-between items-center py-3">
          <img src={reactLogo} className="h-16" alt="React logo" />
          <h1 className="uppercase md:text-xl font-semibold">alten shop</h1>
          <ShoppingCartIcon size={24} />
        </div>
      </Container>
    </header>
  );
};

export default Header;
