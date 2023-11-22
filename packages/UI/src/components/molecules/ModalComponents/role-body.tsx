import { EventHandler, useEffect, useState } from "react";
import { tv } from "tailwind-variants";



const roleBody = () => {
    const [isSelected, setIsSelected] = useState<string>('developer');
  const handleRoleChange = (e: React.MouseEvent) => {
    setIsSelected((e.target as HTMLElement).id);
  };
    return (
        <div
      className={
        "bg-[#f9f9f9] flex flex-row gap-6 items-center justify-center flex-wrap self-stretch flex-1 relative "
      }
    >
      <button onClick={handleRoleChange} className={`${isSelected === 'developer' ? 'bg-grayscale-900 text-grayscale-50' : 'bg-grayscale-50 border-grayscale-900 border-solid border-grayscale-900 border-4'} rounded-3xl pt-2 pr-4 pb-2 pl-4 flex flex-row gap-2.5 items-center justify-center shrink-0 relative`}>
        <div id='developer'
          className="text-left relative"
          style={{
            font: "var(--tosort-universal-button, 400 16px/150% 'NunitoSans-Regular', sans-serif)",
          }}
        >
          Developer{" "}
        </div>
      </button>
      <button onClick={handleRoleChange} className={`${isSelected === 'designer' ? 'bg-grayscale-900 text-grayscale-50' : 'bg-grayscale-50 border-grayscale-900 border-solid border-grayscale-900 border-4'} rounded-3xl pt-2 pr-4 pb-2 pl-4 flex flex-row gap-2.5 items-center justify-center shrink-0 relative`}>
        <div id='designer'
          className="text-left relative"
          style={{
            font: "var(--tosort-universal-button, 400 16px/150% 'NunitoSans-Regular', sans-serif)",
          }}
        >
          Designer{" "}
        </div>
      </button>
      <button onClick={handleRoleChange} className={`${isSelected === 'researcher' ? 'bg-grayscale-900 text-grayscale-50' : 'bg-grayscale-50 border-grayscale-900 border-solid border-grayscale-900 border-4'} rounded-3xl pt-2 pr-4 pb-2 pl-4 flex flex-row gap-2.5 items-center justify-center shrink-0 relative`}>
        <div id='researcher'
          className="text-left relative"
          style={{
            font: "var(--tosort-universal-button, 400 16px/150% 'NunitoSans-Regular', sans-serif)",
          }}
        >
          Researcher{" "}
        </div>
      </button>
      <button onClick={handleRoleChange} className={`${isSelected === 'manager' ? 'bg-grayscale-900 text-grayscale-50' : 'bg-grayscale-50 border-grayscale-900 border-solid border-grayscale-900 border-4'} rounded-3xl pt-2 pr-4 pb-2 pl-4 flex flex-row gap-2.5 items-center justify-center shrink-0 relative`}>
        <div id='manager'
          className="text-left relative"
          style={{
            font: "var(--tosort-universal-button, 400 16px/150% 'NunitoSans-Regular', sans-serif)",
          }}
        >
          Project Manager{" "}
        </div>
      </button>
      <button  className={`${isSelected === 'other' ? 'bg-grayscale-900 text-grayscale-50' : 'bg-grayscale-50 border-grayscale-900 border-solid border-grayscale-900 border-4'} rounded-3xl pt-2 pr-4 pb-2 pl-4 flex flex-row gap-2.5 items-center justify-center shrink-0 relative`}>
        <div onClick={handleRoleChange} id='other'
          className="text-left relative"
          style={{
            font: "var(--tosort-universal-button, 400 16px/150% 'NunitoSans-Regular', sans-serif)",
          }}
        >
          Other{" "}
        </div>
      </button>
    </div>
    )
  }
  
  export default roleBody;