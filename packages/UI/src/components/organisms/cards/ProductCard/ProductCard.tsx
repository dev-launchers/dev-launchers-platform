import React from 'react';
import { atoms } from '@devlaunchers/components/src/components';
import { Container } from './Styled.ProductCard';
import { CardDescription } from '../StyledCommonComponents';

const ProductCard = () => {
  return (
    <Container>
      <CardDescription title='test' subtitle='test' body='test'/>
    </Container>
  )
};
export default ProductCard;
