import { BarcodeIcon, HomeIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <div className="border-r h-[calc(100vh-96px)]">
      <nav>
        <ul>
          <SidebarLink href="/">
            <HomeIcon /> Accueil
          </SidebarLink>
          <SidebarLink href="/products">
            <BarcodeIcon />
            Produits
          </SidebarLink>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

const SidebarLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const isActive = false;

  return (
    <li
      className={`${
        isActive ? "bg-neutral-100 dark:bg-neutral-900" : ""
      } px-2 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-900`}
    >
      <Link
        to={href}
        className="flex text-sm gap-x-5 items-center transition-color h-full w-full  rounded-lg"
      >
        {children}
      </Link>
    </li>
  );
};
