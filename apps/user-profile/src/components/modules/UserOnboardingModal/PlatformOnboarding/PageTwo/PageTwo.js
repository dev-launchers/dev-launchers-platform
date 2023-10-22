import React from 'react';
import { PageTwoContainer, Header, ImageGroupContainer, ImageContainer, } from './StyledPageTwo';
import { Typography } from '@devlaunchers/components/components/atoms';
import ProjectImagePath from './../../../../../images/onboarding/onboarding-project.png';
import NetworkImagePath from './../../../../../images/onboarding/onboarding-network.png';
import LevelUpImagePath from './../../../../../images/onboarding/onboarding-level-up.png';
import {m} from "framer-motion";

export default function PageTwo() {
  return (
    <>
      <PageTwoContainer>
        <Header>
          <Typography type="pLarge" textAlign="center">
            ABOUT US
          </Typography>
          <Typography type="h2" textAlign="center">
            What is DevLaunchers
          </Typography>
        </Header>
        
        <ImageGroupContainer>

          <m.div
          transition={{delay:1.5, duration: 1.5}}
          initial={{ opacity:0 }}
          animate={{ opacity:1 }}
          >
          <ImageContainer>
            <img src={NetworkImagePath} />
            <div>
              <Typography>Network With Other Developers</Typography>
              <Typography type="pSmall" style={{color: "#7F7E7F"}}>
                Expand your network, join discussions, and find opportunities.
              </Typography>
            </div>
          </ImageContainer>
          </m.div>

          <m.div
          transition={{delay:3, duration: 1.5}}
          initial={{ opacity:0 }}
          animate={{ opacity:1 }}
          >
          <ImageContainer>
              <img src={ProjectImagePath} />
              <div>
                <Typography>Make An Impact</Typography>
                <Typography type="pSmall" style={{color: "#7F7E7F"}}>
                  Join a real team and work on projects that matter to you.
                </Typography>
              </div>
            </ImageContainer>
          </m.div>
          
          <m.div
          transition={{delay:4.5, duration: 1.5}}
          initial={{ opacity:0 }}
          animate={{ opacity:1 }}
          >
          <ImageContainer>
            <img src={LevelUpImagePath} />
            <div>
              <Typography>Gain Job Experience</Typography>
              <Typography type="pSmall" style={{color: "#7F7E7F"}}>
                Build confidence to level up your career.
              </Typography>
            </div>
          </ImageContainer>
          </m.div>
          
        </ImageGroupContainer>
      </PageTwoContainer>
    </>
  );
}
