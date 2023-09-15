import React from 'react';
import { tv } from 'tailwind-variants';
import Toggle from '../../atoms/Toggle'

const paragraph = tv({
    base: "weight-",
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