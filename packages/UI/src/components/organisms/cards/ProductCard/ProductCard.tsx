import React from 'react';
import { atoms } from '@devlaunchers/components/src/components';
import { CardDescription } from '../StyledCommonComponents';
import { Container } from './Styled.ProductCard';

const ProductCard = () => {
  return (
    <atoms.Layer type="white">
      <Container>
        <CardDescription
          title="Product Name"
          subtitle="Product Type"
          body="This is a tagline for a product"
        />
      </Container>
    </atoms.Layer>
  );
};
export default ProductCard;
