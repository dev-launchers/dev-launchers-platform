// components/CollapsibleSection.tsx
import React, { useState } from 'react';
import { RoleContainerBody, RoleContainerHead, ToggleButton } from './styles';
import ArrowUp from '../../../../../images/icons/ArrowUp.png';
import ArrowDown from '../../../../../images/icons/ArrowDown.png';

interface CollapsibleSectionProps {
  title: string;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  title,
  children,
}) => {
  const [showBody, setShowBody] = useState(true);

  const toggleBody = () => {
    setShowBody((prevShow) => !prevShow);
  };

  return (
    <>
      <RoleContainerHead onClick={toggleBody}>
        <h1>{title}</h1>
        <img src={showBody ? ArrowUp : ArrowDown} alt="Vector" />
      </RoleContainerHead>
      <RoleContainerBody show={showBody}>{children}</RoleContainerBody>
    </>
  );
};

export default CollapsibleSection;
