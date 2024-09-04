import { ProductRepository } from "@/infrastructure/repositories/product-repository";
import { useEffect } from "react";

function HomePage() {
  const productRepository = new ProductRepository();
  productRepository.getProducts();
  // useEffect(() => {
  //   const productRepository = new ProductRepository();
  //   productRepository.getProducts();
  // }, []);
  return (
    <>
      <div className="flex  flex-col flex-1 items-center border py-3">
        <h2 className="text-black font-black text-xl">Bienvenue</h2>
        <p className="text-lg font-medium">Bienvenue sur ALTEN SHOP !</p>
      </div>
    </>
  );
}

export default HomePage;
