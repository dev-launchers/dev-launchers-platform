import React from 'react';
import { tv } from 'tailwind-variants';
import Toggle from '../../atoms/Toggle'

const paragraph = tv({});

interface SectionProps {
    disabled: true | false;
    header: string;
    paragraph: string;
    name?: string;
    htmlFor?: string
}

const Section: React.FC<SectionProps> = ({ paragraph, header, disabled, name = "checkbox", htmlFor ='checkbox' }) => {
    return (
        <div className='w-full py-8 flex border-b-gray-200 border-b gap-[17px] self-stretch content-center items-center flex-wrap xs:flex-nowrap'>
            <div className='flex xs:flex-[1_0_0] flex-col items-start gap-1 flex-align-middle'>
                <h2 className='leading-10'>{header}</h2>
                <p>
                    {paragraph}
                </p>
            </div>
            <div className='flex w-12 h-6 justify-center items-center'>
                <Toggle label="" disabled={disabled} name={name} htmlFor={htmlFor}/>
            </div>
        </div>
    )
}
  export default Section;