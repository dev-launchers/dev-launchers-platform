import React from 'react';
import { PageTwoContainer, Header, ImageGroupContainer, ImageContainer, } from './StyledPageTwo';
import { Typography } from '@devlaunchers/components/components/atoms';
import ProjectImagePath from './../../../../../images/onboarding/onboarding-project.png';
import NetworkImagePath from './../../../../../images/onboarding/onboarding-network.png';
import LevelUpImagePath from './../../../../../images/onboarding/onboarding-level-up.png';

export default function PageTwo() {
  return (
    <>
      <PageTwoContainer>
        <Header>
          <Typography type="h2" textAlign="center">
            What is DevLaunchers
          </Typography>
        </Header>
        <ImageGroupContainer>
          <ImageContainer>
            <img src={ProjectImagePath} />
            <div>
              <Typography>Find Open Source Projects</Typography>
              <Typography>
                We have have upcoming projects that need your help
              </Typography>
            </div>
          </ImageContainer>
          <ImageContainer>
            <img src={NetworkImagePath} />
            <div>
              <Typography>Connect with Experienced People</Typography>
              <Typography>
                Work on agile teams to improve aspects of our software
              </Typography>
            </div>
          </ImageContainer>
          <ImageContainer>
            <img src={LevelUpImagePath} />
            <div>
              <Typography>Gain Industry Experience</Typography>
              <Typography>
                We’ll support your learning and leadership experience along the
                way
              </Typography>
            </div>
          </ImageContainer>
        </ImageGroupContainer>
      </PageTwoContainer>
    </>
  );
}
