import { BarcodeIcon, HomeIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <nav className="border-r pr-3 flex flex-col py-3">
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
