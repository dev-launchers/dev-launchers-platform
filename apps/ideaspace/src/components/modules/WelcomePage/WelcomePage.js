import React from 'react';
import Link from 'next/link';

import RainbowBar from '../../../../../site-projects/src/components/common/RainbowBar';

import handWithLightbulbImage from '../../../images/submit-image.png';
import helpButtonImage from '../../../images/help-image.png';
import bulletinBoardPostItImage from '../../../images/bulletin-board-postit.png';
import rocketImage from '../../../images/logo-monogram.png';
import IdeaspaceNavCard from '../IdeaspaceNavCard';

import {
  Description,
  ButtonArea,
  Header,
  WelcomeMessage,
  Subheader,
  GetStartedDiv,
  RocketImage,
  NavButtonArea,
} from './StyledWelcomePage';

import IdeaGeneratorButton from '../IdeaGeneratorButton';

const appGeneratorCardBackgroundColor = `rgba(58,124,165, 0.9), rgba(58,124,165, 0.9))`;

const submitIdeaCardBackgroundColor = `rgba(255,127,14, 0.9), rgba(255,127,14, 0.9))`;
const submitIdeaCardTitle = `Submit Your Idea`;
const submitIdeaCardDescription = `Have an idea for development? Turn your idea into a product through community.`;

const helpExistingIdeaCardBackgroundColor = `rgba(255,171,0, 0.9), rgba(255,171,0, 0.9))`;
const helpExistingIdeaCardTitle = `Help Existing Idea`;
const helpExistingIdeaCardDescription = ` Want to help developing an idea? Check out ideas submitted by other Dev Launchers!`;

function WelcomePage() {
  return (
    <>
      <Header>
        <h1>IdeaSpace (Beta)</h1>
        <RainbowBar />
      </Header>

      <Description>
        <WelcomeMessage>WELCOME TO THE IDEA PLATFORM!</WelcomeMessage>
        <Subheader>
          Have an idea for a development project? Want to help develop an
          idea? Want to generate an idea?
        </Subheader>
        <GetStartedDiv>
          LET'S GET STARTED
          <RocketImage src={rocketImage} />
        </GetStartedDiv>
      </Description>

      <NavButtonArea>
        <ButtonArea>
          <Link href="/ideaspace/submit">
            <a>
              <IdeaspaceNavCard
                cardBackgroundColor={submitIdeaCardBackgroundColor}
                cardBackgroundImage={bulletinBoardPostItImage}
                cardTitle={submitIdeaCardTitle}
                cardDescription={submitIdeaCardDescription}
              />
            </a>
          </Link>

          <Link href="/ideaspace/browse">
            <a>
              <IdeaspaceNavCard
                cardBackgroundColor={helpExistingIdeaCardBackgroundColor}
                cardBackgroundImage={helpButtonImage}
                cardTitle={helpExistingIdeaCardTitle}
                cardDescription={helpExistingIdeaCardDescription}
              />
            </a>
          </Link>

          <IdeaGeneratorButton showExtendedContent>
            <IdeaspaceNavCard
              cardBackgroundColor={appGeneratorCardBackgroundColor}
              cardBackgroundImage={handWithLightbulbImage}
              cardTitle="Generate an Idea"
              cardDescription="Want to generate Ideas for you? Use machine learning to generate an idea
                to get you started!" />
          </IdeaGeneratorButton>
        </ButtonArea>
      </NavButtonArea>
    </>
  );
}

export default WelcomePage;