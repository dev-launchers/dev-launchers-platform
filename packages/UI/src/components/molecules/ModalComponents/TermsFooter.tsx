import { ChangeEvent, useEffect, useState } from 'react';
import Checkbox from '../../atoms/Checkbox/Checkbox';

const TermsFooter = () => {
    const [isChecked, setIsChecked] = useState(false);
    useEffect(() => {
      const submit = (document.getElementById('submit') as HTMLButtonElement);
      submit.disabled = !isChecked;
    }, [isChecked])
    

  const handleCheckboxChange = (e: ChangeEvent) => {
    setIsChecked(!isChecked);
    // console.log((e.target as HTMLInputElement).checked);
  };
    return (
    <div className="flex flex-row w-full items-center justify-between self-stretch shrink-0 relative ">
      <div className="flex flex-row gap-3 items-start justify-center shrink-0 relative">
        <Checkbox disabled={false} label={"I’ve read the terms of services"} required={true} onChange={handleCheckboxChange}/>
      </div>
      <button id={'submit'} className={`${isChecked ? 'bg-brand-alt-nebula-600 text-grayscale-50' : 'bg-brand-alt-nebula-300 text-brand-alt-nebula-600'} rounded-lg pt-2 pr-6 pb-2 pl-6 flex flex-row gap-2.5 items-center justify-center shrink-0 relative`} onClick={() => {console.log('submit')}}>
        <div
          className="text-center relative"
          style={{
            font: "var(--tosort-universal-button, 400 16px/150% 'NunitoSans-Regular', sans-serif)",
          }}
        >
          Submit{" "}
        </div>
      </button>
    </div>
);
}
TermsFooter.displayName = "TermsFooter";
export default TermsFooter;