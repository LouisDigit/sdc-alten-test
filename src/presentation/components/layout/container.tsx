import { cn } from "@/presentation/_libs/utils";

interface ContainerProps {
  children?: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return <div className={cn("container", className)}>{children}</div>;
};

export default Container;
