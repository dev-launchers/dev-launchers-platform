import React from 'react';
import { atoms, molecules } from '@devlaunchers/components/src/components';
import testImage from '../../../../assets/images/test-image.png';
import useResponsive from '../../../../hooks/useResponsive';
import { CardDescription } from '../StyledCommonComponents';
import type { ProductProps } from '.';
const ProductCardWide = ({ social, defaultButton }: ProductProps) => {
  const { isMobile } = useResponsive();
  return (
    <atoms.Layer
      type="white"
      css={{ maxWidth: isMobile ? '640px' : '966px', borderRadius: '16px' }}
    >
      <atoms.Box flexDirection="column">
        <img src={testImage} alt="Banner" height="642px"></img>

        <atoms.Box flexDirection="column" padding="48px 64px 32px 64px">
          <CardDescription
            title="Product Name"
            subtitle="Product Type"
            body="This is a tagline for a product"
          />

          <atoms.Box
            justifyContent={social ? 'space-between' : 'flex-end'}
            flexWrap="wrap"
          >
            {social && !isMobile ? (
              <atoms.Box gap="1rem">
                <molecules.LikeButton text="Like " />
                <molecules.ShareButton text="Share" />
              </atoms.Box>
            ) : undefined}
            <atoms.Box gap="1rem">
              <atoms.Button
                buttonType={defaultButton ? 'secondary' : 'alternative'}
                buttonSize="xl"
              >
                Available Position
              </atoms.Button>
              <atoms.Button
                buttonType={defaultButton ? 'secondary' : 'alternative'}
                buttonSize="xl"
              >
                Donate
              </atoms.Button>
            </atoms.Box>
          </atoms.Box>
        </atoms.Box>
      </atoms.Box>
    </atoms.Layer>
  );
};
export default ProductCardWide;
