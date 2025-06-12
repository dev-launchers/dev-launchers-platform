import React from 'react';
import Link from 'next/link';

import { atoms } from '@devlaunchers/components/src/components';

import handWithLightbulbImage from '../../../images/submit-image.png';
import helpButtonImage from '../../../images/help-image.png';
import bulletinBoardPostItImage from '../../../images/bulletin-board-postit.png';
import rocketImage from '../../../images/logo-monogram.png';
// import lightbulbIcon from '../../../images/lightbulb.svg';
// import heartIcon from '../../../images/heart-handshake.svg';
import IdeaGeneratorButton from './IdeaGeneratorButton';
IdeaspaceNavCard;

import {
  HeadWapper,
  Headline,
  StyledRanbow,
  Subheader,
  RocketImage,
  NavButtonArea,
  ButtonArea,
  LightbulbIcon,
  HeartHandshakeIcon,
  ArrowRightIcon,
} from './StyledWelcomePage';
import IdeaspaceNavCard from './IdeaspaceNavCard';

const submitIdeaCardBackgroundColor = `rgba(255, 215, 180, 1)`;
const submitIdeaCardTitle = `Have a product idea?`;
const submitIdeaCardDescription = `Share your idea for a product, and turn it into a reality with the support of a our community. Gather feedback, refine your concept, and collaborate to bring your vision to life.`;
const submitIdeaCardCTA = `Submit An Idea`;

const helpExistingIdeaCardBackgroundColor = `rgba(216, 236, 243, 1)`;
const helpExistingIdeaCardTitle = `Want to help an existing idea?`;
const helpExistingIdeaCardDescription = `Browse ideas from fellow creators, share your insights, or contribute to building innovative products. Discover fresh concepts and help turn creative ideas into reality.`;
const helpExistingIdeaCardCTA = `Help Existing Ideas`;

function WelcomePage() {
  return (
    <>
      <HeadWapper>
        <Headline>IdeaSpace (Beta)</Headline>
        <StyledRanbow>
          <atoms.Layer hasRainbowBottom />
        </StyledRanbow>

        <atoms.Typography type="h4" className="text-center">
          WELCOME TO THE IDEA PLATFORM!
          <Subheader>
            Have an idea for a development project? Want to help develop an
            idea?
          </Subheader>
          LET'S GET STARTED <RocketImage src={rocketImage} />
        </atoms.Typography>
      </HeadWapper>

      <NavButtonArea>
        <ButtonArea>
          <Link href="/ideaspace/submit">
            <a>
              <IdeaspaceNavCard
                cardIcon={<LightbulbIcon />}
                cardBackgroundColor={submitIdeaCardBackgroundColor}
                cardTitle={submitIdeaCardTitle}
                cardDescription={submitIdeaCardDescription}
                cardCTA={submitIdeaCardCTA}
                cardIconCTA={<ArrowRightIcon />}
              />
            </a>
          </Link>

          <Link href="/ideaspace/browse">
            <a>
              <IdeaspaceNavCard
                cardIcon={<HeartHandshakeIcon />}
                cardBackgroundColor={helpExistingIdeaCardBackgroundColor}
                cardTitle={helpExistingIdeaCardTitle}
                cardDescription={helpExistingIdeaCardDescription}
                cardCTA={helpExistingIdeaCardCTA}
                cardIconCTA={<ArrowRightIcon />}
              />
            </a>
          </Link>
        </ButtonArea>
      </NavButtonArea>
    </>
  );
}

export default WelcomePage;
