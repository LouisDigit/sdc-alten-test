import { BarcodeIcon, Contact2Icon, HomeIcon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <nav className="border-r flex flex-col py-3">
      <ul>
        <SidebarLink href="/">
          <HomeIcon /> Accueil
        </SidebarLink>
        <SidebarLink href="/products">
          <BarcodeIcon />
          Produits
        </SidebarLink>
        <SidebarLink href="/contact">
          <Contact2Icon />
          Contact
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
  const location = useLocation();
  const isActive = location.pathname === href;

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
