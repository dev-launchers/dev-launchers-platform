'use client';
import { useState } from 'react';

import Modal from '../../../../../DetailedPage/PositionPopupModal';
import RoleDetailsModal from '../RoleModal/RoleDetailsModal';

import LogoMonogram from '../../../../../../../images/logo-monogram.png';

import {
  AboutDescription,
  ButtonsContainer,
  CardContainer,
  CardContent,
  ContentSection,
  IconContainer,
  MetadataContainer,
  MetadataItem,
  modalStyle,
  RoleCountBadge,
  RoleIcon,
  Subtitle,
  Title,
} from './styledRoleCard';
import { Button } from '@devlaunchers/components/src/components/atoms';
import { Opportunity } from '@devlaunchers/models';
import { useRouter } from 'next/router';

interface Props {
  role: Opportunity;
  key22: number;
  opportunities: Opportunity[];
}

const RoleCard = ({ role, key22, opportunities }: Props) => {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const handleOpenModal = (apply: boolean) => {
    sessionStorage.setItem(
      `role_${role.id}`,
      JSON.stringify({
        role: role,
      })
    );
    sessionStorage.setItem(`role_${role.id}_apply`, apply.toString());
    router.push(`/join/role?id=${role.id}`);
    // setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <CardContainer>
      <CardContent>
        <IconContainer>
          <RoleIcon as="img" src={LogoMonogram} alt="Role icon" />
        </IconContainer>

        <ContentSection>
          <Title>{role?.attributes?.title}</Title>
          <Subtitle>
            {role?.attributes?.roleCategory} Team | {role?.attributes?.roleType}
          </Subtitle>

          <MetadataContainer>
            <MetadataItem>{role?.attributes?.level}</MetadataItem>
            <MetadataItem>
              {role?.attributes?.commitmentHoursPerWeek} Hours Per Week
            </MetadataItem>
          </MetadataContainer>

          <AboutDescription>{role?.attributes?.description}</AboutDescription>

          <ButtonsContainer>
            <Button onClick={() => handleOpenModal(false)}>Role Details</Button>
            <Button onClick={() => handleOpenModal(true)}>Apply</Button>
          </ButtonsContainer>
        </ContentSection>
      </CardContent>

      {/* <Modal
        modalIsOpen={showModal}
        closeModal={handleCloseModal}
        handleOpenModal={handleOpenModal}
        style = {modalStyle}
        modalContent={
          <RoleDetailsModal
            position={role}
            projectId={role?.attributes?.projects?.data[key22]?.id}
            projectSlug={role?.attributes?.projects?.data[key22]?.attributes?.slug}
            handleCloseModal={handleCloseModal}
          />
        }
      /> */}
    </CardContainer>
  );
};

export default RoleCard;
