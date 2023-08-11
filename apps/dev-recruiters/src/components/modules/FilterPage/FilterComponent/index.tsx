import React, { useEffect, useState } from 'react';
import {
  CommitmentText,
  ContainerBody,
  ContainerCommitment,
  ContainerHead,
  ContainerMain,
  ContainerRoles,
} from './styles';
import RolesButtons from '../RolesFilterComponent/RolesFilterList/CollapsibleContainerFilter/RolesButtons';
import Commitment from '../RolesFilterComponent/RolesFilterList/CollapsibleContainerFilter/Commitment';

function FilterComponent() {
  return (
    <>
      <ContainerMain>
        <ContainerHead>Search Filter</ContainerHead>
        <ContainerBody>
          <ContainerRoles>
            <RolesButtons />
          </ContainerRoles>
          <ContainerCommitment>
            <CommitmentText>Time Commitment</CommitmentText>

            <Commitment />
          </ContainerCommitment>
        </ContainerBody>
      </ContainerMain>
    </>
  );
}

export default FilterComponent;
