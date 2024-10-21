import React from 'react';
import Link from 'next/link';

import { atoms } from '@devlaunchers/components/src/components';

import handWithLightbulbImage from '../../../images/submit-image.png';
import helpButtonImage from '../../../images/help-image.png';
import bulletinBoardPostItImage from '../../../images/bulletin-board-postit.png';
import rocketImage from '../../../images/logo-monogram.png';
import IdeaspaceNavCard from './IdeaspaceNavCard';
import IdeaGeneratorButton from './IdeaGeneratorButton';

import {
  HeadWapper,
  Headline,
  StyledRanbow,
  Subheader,
  RocketImage,
  NavButtonArea,
  ButtonArea,
} from './StyledWelcomePage';

const submitIdeaCardBackgroundColor = `rgba(255,127,14, 0.9), rgba(255,127,14, 0.9))`;
const submitIdeaCardTitle = `Submit Your Idea`;
const submitIdeaCardDescription = `Have an idea for development? Turn your idea into a product through community.`;

const helpExistingIdeaCardBackgroundColor = `rgba(255,171,0, 0.9), rgba(255,171,0, 0.9))`;
const helpExistingIdeaCardTitle = `Help Existing Idea`;
const helpExistingIdeaCardDescription = ` Want to help developing an idea? Check out ideas submitted by other Dev Launchers!`;

function WelcomePage() {
  return (
    <>
      <HeadWapper>
        <Headline>IdeaSpace (Beta)</Headline>
        <StyledRanbow>
          <atoms.Layer hasRainbowBottom />
        </StyledRanbow>

        <atoms.Typography type="h4" textAlign="center">
          WELCOME TO THE IDEA PLATFORM!
          <Subheader>
            Have an idea for a development project? Want to help develop an
            idea? Want to generate an idea?
          </Subheader>
          LET'S GET STARTED <RocketImage src={rocketImage} />
        </atoms.Typography>
      </HeadWapper>

      <NavButtonArea>
        <ButtonArea>
          <Link href="/ideaspace/submit">
            <a>
              <IdeaspaceNavCard
                cardBackgroundColor={submitIdeaCardBackgroundColor}
                cardTitle={submitIdeaCardTitle}
                cardDescription={submitIdeaCardDescription}
              />
            </a>
          </Link>

          <Link href="/ideaspace/browse">
            <a>
              <IdeaspaceNavCard
                cardBackgroundColor={helpExistingIdeaCardBackgroundColor}
                cardTitle={helpExistingIdeaCardTitle}
                cardDescription={helpExistingIdeaCardDescription}
              />
            </a>
          </Link>
        </ButtonArea>
      </NavButtonArea>
    </>
  );
}

export default WelcomePage;
