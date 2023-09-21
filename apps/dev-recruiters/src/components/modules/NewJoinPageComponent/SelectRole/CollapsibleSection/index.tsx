// components/CollapsibleSection.tsx
import React, { useState } from 'react';
import {
  RoleContainerBody,
  RoleContainerHead,
  Title,
  ToggleButton,
} from './styles';
import ArrowUp from '../../../../../images/icons/ArrowUp.png';
import ArrowDown from '../../../../../images/icons/ArrowDown.png';

interface CollapsibleSectionProps {
  title: string;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  title,
  children,
}) => {
  
  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  const [showBody, setShowBody] = useState(!isMobile);

  const toggleBody = () => {
    setShowBody((prevShow) => !prevShow);
  };

  return (
    <>
      <RoleContainerHead onClick={toggleBody}>
        <Title>{title}</Title>
        <img src={showBody ? ArrowUp : ArrowDown} alt="Vector" />
      </RoleContainerHead>
      <RoleContainerBody show={showBody}>{children}</RoleContainerBody>
    </>
  );
};

export default CollapsibleSection;
