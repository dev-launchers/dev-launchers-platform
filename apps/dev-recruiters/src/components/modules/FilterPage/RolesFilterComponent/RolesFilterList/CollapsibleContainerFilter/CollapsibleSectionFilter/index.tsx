// components/CollapsibleSection.tsx
import React, { useState } from 'react';
import {
  RoleContainerBody,
  RoleContainerHead,
  Title,
  ToggleButton,
} from './styles';

interface CollapsibleSectionProps {
  title: string;
}

const CollapsibleSectionFilter: React.FC<CollapsibleSectionProps> = ({
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
        <Title>{title}</Title>
      </RoleContainerHead>
      <RoleContainerBody show={showBody}>{children}</RoleContainerBody>
    </>
  );
};

export default CollapsibleSectionFilter;
