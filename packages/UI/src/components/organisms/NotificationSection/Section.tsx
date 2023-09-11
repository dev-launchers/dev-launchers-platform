import React from 'react';
import { tv } from 'tailwind-variants';
import Toggle from '../../atoms/Toggle'

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

interface SectionProps {
    disabled: true | false;
    header: string;
    paragraph: string;
}

const Section: React.FC<SectionProps> = ({ paragraph, header, disabled }) => {
    return (
        <div className='w-[820px] py-8 flex flex-col border-b-gray-200 border-b'>
            <div className='flex justify-between align-middle'>
                <h2 className='leading-10'>{header}</h2>
                <Toggle label="" disabled={disabled}/>
            </div>
            <div className='pt-2'>
                <p>
                    {paragraph}
                </p>
            </div>
        </div>
    )
}
  export default Section;