import React from 'react';
import { PageTwoContainer, Header, ImageGroupContainer, ImageContainer, } from './StyledPageTwo';
import { Typography } from '@devlaunchers/components/components/atoms';
import projectImagePath from './../../../../../images/Onboarding/onboarding-project.png';
import networkImagePath from './../../../../../images/Onboarding/onboarding-network.png';
import levelUpImagePath from './../../../../../images/Onboarding/onboarding-level-up.png';
import {m} from "framer-motion";
import Image from "next/image";

export default function PageTwo() {
  return (
    <>
      <PageTwoContainer>
        <Header>
          <Typography type="p" textAlign="center">
            ABOUT US
          </Typography>
          <Typography type="h3" textAlign="center">
            What is DevLaunchers?
          </Typography>
        </Header>
        
        <ImageGroupContainer>

          <m.div
          transition={{delay:1.5, duration: 1.5}}
          initial={{ opacity:0 }}
          animate={{ opacity:1 }}
          >
          <ImageContainer>
            <Image src={networkImagePath} width="64" height="64"/>
            <div>
              <Typography type="pLarge">Network With Other Developers</Typography>
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
              <Image src={projectImagePath}  width="64" height="64"/>
              <div>
                <Typography type="pLarge">Make An Impact</Typography>
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
            <Image src={levelUpImagePath}  width="64" height="64"/>
            <div>
              <Typography type="pLarge">Gain Job Experience</Typography>
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
