import React from 'react';
import { cn } from '../../../utils/classesMerger';
import { styles } from './style';
import type { OpenResponseProps } from './index';

const OpenResponse = ({
  fieldLabel,
  placeholder,
  inputValue,
  isRequired,
  status = 'default',
  hintMessage,
  hasMessage,
  onInputChange,
  className,
}: OpenResponseProps) => {
  const stateClass = styles.state[status];
  const hintMessageClass = styles.hintMessage;

  const handleInputChange: React.ChangeEventHandler<HTMLTextAreaElement> = (
    e
  ) => {
    const newValue = e.target.value;
    if (onInputChange) {
      onInputChange(newValue); // Call the provided callback
    }
  };

  return (
    <>
      <form name={fieldLabel} className={styles.formField}>
        <label className={styles.labelBox}>
          <div className={styles.label}>{fieldLabel}</div>
          <div>
            {isRequired && (
              <span
                className={cn(
                  'font-nunito-sans text-alert-error-o-50-600 size-[18px] leading-6'
                )}
              >
                *
              </span>
            )}
          </div>
        </label>
        <textarea
          className={cn(styles.textArea, stateClass, className)}
          placeholder={placeholder}
          value={inputValue}
          required={isRequired}
          disabled={status === 'disabled'}
          onChange={handleInputChange}
        />
        {hasMessage && (
          <div className={styles.messageContainer}>
            <span
              className={cn(styles.hintMessageBase, hintMessageClass[status])}
            >
              {hintMessage}
            </span>
          </div>
        )}
      </form>
    </>
  );
};

OpenResponse.displayName = 'OpenResponse';

export { OpenResponse };
