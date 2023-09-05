import { tv, type VariantProps } from "tailwind-variants";

const button = tv({
    base: "bg-black shadow rounded  flex flex-row items-center justify-center",
    variants: {
      color: {
        primary: "bg-white",
        secondary: "bg-purple-500",
       
      },
      size: {
        sm: "p-2 text-xs",
        md: "py-2 px-4 text-sm",
        lg: "py-2 px-6 text-md",
      },
    },
  });

interface ButtonProps extends VariantProps<typeof button> {
  children: React.ReactNode;
  onclick?: () => void;
}
 
const CloseButton = ({size, color, children, onclick}: ButtonProps) => {
  return <button  onClick={onclick} className={button({size, color})}>{children}</button>;
};

export default CloseButton;