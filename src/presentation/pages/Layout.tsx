import { Outlet } from "react-router-dom";

import Container from "@/presentation/components/layout/container";
import Sidebar from "@/presentation/components/sidebar";
import Header from "@/presentation/components/header";
import { Toaster } from "@/presentation/components/ui/toaster";

const Layout: React.FC = () => {
  return (
    <>
      <Toaster />
      <Header />
      <main>
        <Container>
          <div className="flex w-full h-full flex-row min-h-[calc(100vh-5rem)]">
            <Sidebar />
            <div className="flex-1 md:px-3 py-3">
              <Outlet />
            </div>
          </div>
        </Container>
      </main>
    </>
  );
};

export default Layout;
