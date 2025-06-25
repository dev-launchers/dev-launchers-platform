import React from 'react';
import { useTheme, withTheme } from 'styled-components';
import { Typography } from '@devlaunchers/components/components/atoms/Typography';
import Section from '../Section';
import { Wrapper, ButtonsContainer, Button } from './StyledVision';

const Vision = ({ scrollMethods, vision }) => {
  const theme = useTheme();
  if (vision === '') {
    return null;
  }
  return (
    <Section
      bgColor="#3A7CA5"
      Title="Vision"
      Content={
        <Wrapper>
          <Typography
            as="p"
            variant="secondary"
            size="body_xl"
            style={{ marginBottom: '2rem' }}
          >
            {vision}
          </Typography>
          <ButtonsContainer>
            <Button
              style={{ cursor: 'pointer' }}
              onClick={scrollMethods.scrollToRoles}
            >
              <i className="fas fa-info"></i> Join Now
            </Button>
            <Button
              style={{ cursor: 'pointer' }}
              onClick={scrollMethods.scrollToDonate}
              bgColor={theme?.colors?.ACCENT_2}
            >
              <i className="fas fa-coins"></i> Donate
            </Button>
          </ButtonsContainer>
        </Wrapper>
      }
    />
  );
};
export default withTheme(Vision);
