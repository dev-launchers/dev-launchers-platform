import React from 'react';
import { atoms, molecules } from '@devlaunchers/components/src/components';
import testImage from '../../../../assets/images/test-image.png';
import useResponsive from '../../../../hooks/useResponsive';
import { CardDescription } from '../StyledCommonComponents';
import type { ProductProps } from '.';
const ProductCardWide = ({
  socialButton,
  defaultButton,
  image,
  saveButton,
  title,
  subtitle,
  body,
  button1Text,
  button2Text,
}: ProductProps) => {
  const { isMobile } = useResponsive();
  return (
    <atoms.Layer
      type="white"
      css={{ maxWidth: isMobile ? '640px' : '966px', borderRadius: '16px' }}
    >
      <atoms.Box flexDirection="column">
        {image ? (
          <img src={testImage} alt="Banner" height="642px"></img>
        ) : undefined}
        {saveButton ? (
          <atoms.Box justifyContent="flex-end">
            <molecules.SaveButton text="Save" />
          </atoms.Box>
        ) : undefined}
        <atoms.Box flexDirection="column" padding="48px 64px 32px 64px">
          <atoms.Box gap="48px">
            <CardDescription title={title} subtitle={subtitle} body={body} />
          </atoms.Box>
          <atoms.Box
            justifyContent={socialButton ? 'space-between' : 'flex-end'}
            flexWrap="wrap"
          >
            {socialButton && !isMobile ? (
              <atoms.Box gap="1rem">
                <molecules.LikeButton text="Like" />
                <molecules.ShareButton text="Share" />
              </atoms.Box>
            ) : undefined}
            <atoms.Box gap="1rem">
              <atoms.Button
                buttonType={defaultButton ? 'secondary' : 'alternative'}
                buttonSize="xl"
              >
                {button1Text}
              </atoms.Button>
              <atoms.Button
                buttonType={defaultButton ? 'secondary' : 'alternative'}
                buttonSize="xl"
              >
                {button2Text}
              </atoms.Button>
            </atoms.Box>
          </atoms.Box>
        </atoms.Box>
      </atoms.Box>
    </atoms.Layer>
  );
};
export default ProductCardWide;
