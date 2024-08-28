import { Outlet } from "react-router-dom";

import Container from "@/presentation/components/layout/container";
import Sidebar from "@/presentation/components/sidebar";
import Header from "@/presentation/components/header";

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <div className="flex h-full flex-row min-h-[calc(100vh-5rem)]">
            <Sidebar />
            <Container className="flex-1 py-5">
              <Outlet />
            </Container>
          </div>
        </Container>
      </main>
    </>
  );
};

export default Layout;
