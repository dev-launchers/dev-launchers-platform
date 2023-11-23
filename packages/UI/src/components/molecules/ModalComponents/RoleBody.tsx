import { EventHandler, useEffect, useState } from "react";
import { tv } from "tailwind-variants";



const RoleBody = () => {
    const [isSelected, setIsSelected] = useState<string>('developer');
  const handleRoleChange = (e: React.MouseEvent) => {
    setIsSelected((e.target as HTMLElement).id);
  };
  const button = tv({
    base: "text-left relative rounded-3xl pt-2 pr-4 pb-2 pl-4 flex flex-row gap-2.5 items-center justify-center shrink-0 relative",
    variants: {
      color: {
        primary: "bg-grayscale-900 text-grayscale-50",
        secondary: "bg-grayscale-50 border-grayscale-900 border-solid border-grayscale-900 border-4",
      },
    },
    defaultVariants: {
      size: "md",
      color: "primary",
    }
  });
    return (
        <div
      className={
        "bg-[#f9f9f9] flex flex-row gap-6 items-center justify-center flex-wrap self-stretch flex-1 relative "
      }
    >
      <button onClick={handleRoleChange} id='developer' className={`${isSelected === 'developer' ? button({color: 'primary'}) : button({color: 'secondary'})}`} style={{
            font: "var(--tosort-universal-button, 400 16px/150% 'NunitoSans-Regular', sans-serif)",
          }}>
          Developer{" "}
      </button>
      <button onClick={handleRoleChange} id='designer' className={`${isSelected === 'designer' ? button({color: 'primary'}) : button({color: 'secondary'})}`}
      style={{
        font: "var(--tosort-universal-button, 400 16px/150% 'NunitoSans-Regular', sans-serif)",
      }}>
          Designer{" "}
      </button>
      <button onClick={handleRoleChange} id='researcher' className={`${isSelected === 'researcher' ? button({color: 'primary'}) : button({color: 'secondary'})}`} style={{
            font: "var(--tosort-universal-button, 400 16px/150% 'NunitoSans-Regular', sans-serif)",
          }}>
          Researcher{" "}
      </button>
      <button onClick={handleRoleChange} id='manager' className={`${isSelected === 'manager' ? button({color: 'primary'}) : button({color: 'secondary'})}`} style={{
            font: "var(--tosort-universal-button, 400 16px/150% 'NunitoSans-Regular', sans-serif)",
          }}>
          Project Manager{" "}
      </button>
      <button onClick={handleRoleChange} id='other' className={`${isSelected === 'other' ? button({color: 'primary'}) : button({color: 'secondary'})}`} style={{
            font: "var(--tosort-universal-button, 400 16px/150% 'NunitoSans-Regular', sans-serif)",
          }}>
          Other{" "}
      </button>
    </div>
    )
  }
  
  export default RoleBody;