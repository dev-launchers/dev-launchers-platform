import { ChangeEvent, useState } from 'react';
import Checkbox from '../../atoms/Checkbox/Checkbox';

const termsFooter = () => {
    const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e: ChangeEvent) => {
    console.log(e.target);
  };
    return (
    <div className="flex flex-row items-center justify-between self-stretch shrink-0 relative ">
      <div className="flex flex-row gap-3 items-start justify-center shrink-0 relative">
        <Checkbox disabled={false} label={"I’ve read the terms of services"} required={true} onChange={handleCheckboxChange}/>
      </div>
      <div className={"bg-brand-alt-nebula-300 rounded-lg pt-2 pr-6 pb-2 pl-6 flex flex-row gap-2.5 items-center justify-center shrink-0 relative"}>
        <div
          className="text-brand-alt-nebula-600 text-center relative"
          style={{
            font: "var(--tosort-universal-button, 400 16px/150% 'NunitoSans-Regular', sans-serif)",
          }}
        >
          Submit{" "}
        </div>
      </div>
    </div>
);
}
termsFooter.displayName = "TermsFooter";
export default termsFooter;