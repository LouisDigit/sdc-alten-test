import Header from "@/presentation/components/header";
import Container from "@/presentation/components/layout/container";
import Sidebar from "@/presentation/components/sidebar";

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <div className="flex flex-row">
            <Sidebar />
            <div className="flex flex-col flex-1 items-center border">
              <h2 className="text-black font-black text-xl">Bienvenue</h2>
              <p className="text-lg font-medium">Bienvenue sur ALTEN SHOP !</p>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}

export default HomePage;
