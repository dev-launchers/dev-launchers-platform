import * as Form from '@radix-ui/react-form';
import React from 'react';
import { cn } from '../../../utils/classesMerger';
import { styles } from './style';
import type { OpenResponseProps } from './index';

const OpenResponse = React.forwardRef<HTMLTextAreaElement, OpenResponseProps>(
  (
    {
      fieldLabel,
      placeholder,
      inputValue,
      isRequired,
      status = 'default',
      hintMessage,
      hasMessage,
      onInputChange,
      className,
      ...props
    },
    ref
  ) => {
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
      <div className="flex">
        <Form.Root>
          <Form.Field name={fieldLabel} className={styles.formField}>
            <Form.Label className={styles.labelBox}>
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
            </Form.Label>
            <Form.Control asChild>
              <textarea
                ref={ref}
                className={cn(styles.textArea, stateClass, className)}
                placeholder={placeholder}
                value={inputValue}
                required={isRequired}
                disabled={status === 'disabled'}
                onChange={handleInputChange}
                {...props}
              />
            </Form.Control>
            {hasMessage && (
              <div className={styles.messageContainer}>
                <span
                  className={cn(
                    styles.hintMessageBase,
                    hintMessageClass[status]
                  )}
                >
                  {hintMessage}
                </span>
              </div>
            )}
          </Form.Field>
        </Form.Root>
      </div>
    );
  }
);

OpenResponse.displayName = 'OpenResponse';

export { OpenResponse };
