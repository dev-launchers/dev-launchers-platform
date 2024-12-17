import type * as React from 'react';

export interface OpenResponseProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**
   * Label for the input field
   */
  fieldLabel: string;

  /**
   * Placeholder for the textarea
   */
  placeholder?: string;

  /**
   * Represents the string of text entered by the user in the text area.
   */
  inputValue?: string;

  /**
   * Whether the input is required
   */
  isRequired?: boolean;

  hintMessage?: string;

  /**
   * Toggles the visibility of a help or status message below the text area.
   * - true: Displays additional context or status messages (which is the hint message)
   * - false: No message is shown.
   */
  hasMessage?: boolean;

  /**
   * State of the field: default, focus, success, error, or disabled
   */
  status?: 'default' | 'focus' | 'success' | 'error' | 'disabled';

  /**
   * Callback when the input value changes
   */
  onInputChange?: (value: string) => void;
}
