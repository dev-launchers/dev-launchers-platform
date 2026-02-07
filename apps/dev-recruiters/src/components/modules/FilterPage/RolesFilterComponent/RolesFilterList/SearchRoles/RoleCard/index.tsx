'use client';
import { useState } from 'react';

import LogoMonogram from '../../../../../../../images/logo-monogram.png';

import {
  ButtonsContainer,
  CardContainer,
  CardContent,
  ContentSection,
  IconContainer,
  RoleIcon,
} from './styledRoleCard';
import { Button } from '@devlaunchers/components/src/components/atoms';
import { Opportunity } from '@devlaunchers/models';
import { useRouter } from 'next/router';
import { Typography } from '@devlaunchers/components/src/components/atoms';

interface Props {
  role: Opportunity;
  opportunities: Opportunity[];
}

const RoleCard = ({ role, opportunities }: Props) => {
  const router = useRouter();

  const handleOpenModal = (shouldApply: boolean) => {
    sessionStorage.setItem(
      `role_${role.id}`,
      JSON.stringify({
        role: role,
      })
    );
    sessionStorage.setItem(`role_${role.id}_apply`, shouldApply.toString());
    router.push(`/join/role?id=${role.id}`);
  };

  return (
    <CardContainer>
      <CardContent>
        <IconContainer>
          <RoleIcon as="img" src={LogoMonogram} alt="Role icon" />
        </IconContainer>

        <ContentSection>
          <Typography as="h3" size="xl2" textWeight="bold">
            {role?.attributes?.title}
          </Typography>
          <Typography as="p">
            {role?.attributes?.roleCategory} Team | {role?.attributes?.roleType}
          </Typography>

          <div className="flex gap-6 my-2">
            <Typography as="p">{role?.attributes?.level}</Typography>
            <Typography as="p">
              {role?.attributes?.commitmentHoursPerWeek} Hours Per Week
            </Typography>
          </div>

          <div className="line-clamp-2">
            <Typography as="p">{role?.attributes?.description}</Typography>
          </div>

          <ButtonsContainer>
            <Button onClick={() => handleOpenModal(false)}>Role Details</Button>
            <Button onClick={() => handleOpenModal(true)}>Apply</Button>
          </ButtonsContainer>
        </ContentSection>
      </CardContent>
    </CardContainer>
  );
};

export default RoleCard;
