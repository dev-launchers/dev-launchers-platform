import React from 'react';
import { tv } from 'tailwind-variants';
import Toggle from '../../atoms/Toggle';

const paragraph = tv({});

interface SectionProps {
  disabled?: boolean;
  header: string;
  paragraph: string;
  name?: string;
  htmlFor?: string;
}

const Section: React.FC<SectionProps> = ({
  paragraph,
  header,
  disabled = false,
}) => {
  return (
    <div className="flex w-full flex-wrap content-center items-center justify-between gap-[17px] self-stretch border-b border-b-gray-200 py-8">
      <div className="flex flex-col items-start gap-1 flex-[1_0_0]">
        <h2 className="font-nunito-sans font-normal text-grayscale-800">
          {header}
        </h2>
        <p className="font-nunito-sans font-normal leading-6 text-GreyScale-grey">
          {paragraph}
        </p>
      </div>
      <div className="flex h-6 w-12 items-center justify-center">
        <Toggle
          disabled={disabled}
          onChange={(e) =>
            // TODO: make this event interact with backend
            console.log(`${header} was toggled to ${e.target.checked}`)
          }
        />
      </div>
    </div>
  );
};
export default Section;
