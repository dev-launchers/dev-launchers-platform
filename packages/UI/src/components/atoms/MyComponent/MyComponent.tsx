import React from 'react';
import { tv } from 'tailwind-variants';
import Chevron from '../../../assets/icons/Chevron';
import Close from '../../../assets/icons/Close'

const button = tv({
    base: "rounded-lg pt-2 pr-4 pb-2 pl-4 flex flex-row gap-2.5 items-center justify-center relative ",
    variants: {
        color: {
            primary: "bg-[#ffffff]",
            secondary: "text-white",        
        },
        size: {
            xs: 'p-2',
            sm: 'text-sm px-4 py-2',
            md: 'text-md',
            lg: 'text-lg py-3 px-4',
        },
    },
     defaultVariants: {
        size: "md",
        color: "primary"
    }
});

interface MyComponentProps {
    size?: 'xs' | 'sm' | 'md' | 'lg';
    color?: 'primary';
}

const MyComponent: React.FC<MyComponentProps> = ({ size, color }) => {
    return (
        <button className={button({ size, color })} style={{
            boxShadow:
              "var(--shadow-xl-box-shadow, 0px 10px 18px 10px rgba(127, 126, 127, 0.25))",
          }}>
            {size === "xs" ? <Close/> : size === "sm" ? <Chevron/> : <Chevron className="mr-2"/>}
            {(size === 'sm' || size === 'xs') ? null : 'BACK'}
            </button>
    )
}
  export default MyComponent;