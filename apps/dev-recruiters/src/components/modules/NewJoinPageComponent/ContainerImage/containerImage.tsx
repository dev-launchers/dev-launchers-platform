import React from 'react';
import { HeaderImage, HeaderImageContainer } from './StyledContainerImage';

function ContainerImage(props) {
  return (
    <HeaderImageContainer>
      <HeaderImage width={props.width} src={props.src} />
    </HeaderImageContainer>
  );
}

export default ContainerImage;
