import React, { useEffect, useState } from 'react';
import {
  CommitmentText,
  ContainerBody,
  ContainerCommitment,
  ContainerHead,
  ContainerMain,
  ContainerRoles,
} from './styles';
import RolesButtons from './RolesButtons';
import Commitment from './Commitment';

function FilterComponent() {
  return (
    <>
      <ContainerMain>
        <ContainerHead>Search FIlter</ContainerHead>
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
