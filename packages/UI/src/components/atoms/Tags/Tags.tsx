import * as React from 'react';
import type { ThemeType } from '../../../styles/theme';
import { Tag, CloseButton, CloseIcon } from './Styled.Tags';

export interface Props {
  onClose?: () => void;
  bgColor: keyof Pick<
    ThemeType['colors'],
    | 'GREYSCALE_CHARCOAL'
    | 'GREYSCALE_BLACK'
    | 'GREYSCALE_WHITE'
    | 'YELLOW_200'
    | 'LIGHT_BLUE_200'
    | 'BLUE_200'
    | 'ORANGE_200'
  >;
  txtColor: keyof Pick<
    ThemeType['colors'],
    'GREYSCALE_BLACK' | 'GREYSCALE_WHITE'
  >;
  isFilter?: boolean;
  children: string;
}

export default function Tags({
  onClose,
  children,
  bgColor,
  txtColor,
  isFilter,
}: Props) {
  const handleClose = () => {
    onClose();
  };
  return (
    <Tag {...onClose} bgColor={bgColor} txtColor={txtColor}>
      {children}
      {isFilter && (
        <CloseButton bgColor={bgColor} onClick={handleClose}>
          <CloseIcon
            txtColor={txtColor}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 -4 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </CloseIcon>
        </CloseButton>
      )}
    </Tag>
  );
}
