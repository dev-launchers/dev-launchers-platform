export const styles = {
  container:
    'ml-[260px] mt-[477px] h-[1416px] w-[260px] gap-[8px] rounded-[5px] border-[1px] py-[20px] outline-dashed outline-2 outline-brand-alt-nebula-500',
  formField: 'h-[268px] w-[260px] min-w-[260px] max-w-[544px] pt-4',
  labelBox:
    'flex h-[28px] w-[104px] items-center justify-start gap-1 px-[24px] py-[2px]',
  label: ' font-nunito-sans font-normal text-grayscale-900 whitespace-nowrap',
  state: {
    default: 'border-gray-800',
    focus: 'border-gray-800 focus:border-brand-alt-nebula-800',
    success: 'border-alert-success-o-100-700',
    error: 'border-alert-error-o-100-700',
    disabled: 'border-grayscale-200 cursor-not-allowed',
  },
  textArea:
    'h-[192px] w-[260px] min-w-[260px] max-w-[544px] gap-[10px] rounded-3xl border-solid border-4 p-6 focus:outline-none placeholder:font-nunito-sans placeholder:text-[18px] placeholder:leading-6 placeholder:text-[#b6b6b6] placeholder:font-light font-nunito-sans text-black font-normal size-[18px] leading-6 resize-none',
  messageContainer:
    'h-[52px] w-[260px] min-w-[260px] max-w-[544px] gap-0.5 py-[4px] px-[24px]',
  hintMessageBase: 'size-[15px] font-nunito-sans text-sm font-normal leading-5',
  hintMessage: {
    default: ' text-gray-800',
    focus: ' text-brand-alt-nebula-800',
    success: ' text-alert-success-o-100-700',
    error: ' text-alert-error-o-100-700',
    disabled: ' text-[#b6b6b6]',
  },
};
