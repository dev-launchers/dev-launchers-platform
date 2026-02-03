import React from 'react';
import Link from 'next/link';
import { atoms } from '@devlaunchers/components/src/components';
import rocketImage from '../../../images/logo-monogram.png';

import {
  HeadWapper,
  NavButtonArea,
  ButtonArea,
  LightbulbIcon,
  HeartHandshakeIcon,
  ArrowRightIcon,
  MainContainer,
  BetaButton,
} from './StyledWelcomePage';
import IdeaspaceNavCard from './IdeaspaceNavCard';

const submitIdeaCardBackgroundColor = `rgba(63, 31, 95, 0.40)`;
const submitIdeaCardTitle = `Have a product idea?`;
const submitIdeaCardDescription = `Share your idea for a product, and turn it into a reality with the support of a our community. Gather feedback, refine your concept, and collaborate to bring your vision to life.`;
const submitIdeaCardCTA = `Submit An Idea`;

const helpExistingIdeaCardBackgroundColor = `rgba(31, 42, 95, 0.40)`;
const helpExistingIdeaCardTitle = `Want to help an existing idea?`;
const helpExistingIdeaCardDescription = `Browse ideas from fellow creators, share your insights, or contribute to building innovative products. Discover fresh concepts and help turn creative ideas into reality.`;
const helpExistingIdeaCardCTA = `Help Existing Ideas`;

function WelcomePage() {
  return (
    <>
      <div style={{ backgroundColor: 'black' }}>
        <MainContainer>
          <BetaButton>BETA</BetaButton>

          <HeadWapper>
            <atoms.Typography
              as="h1"
              variant="primary"
              leading="tight"
              textCase="capitalize"
              textAlign="center"
              textWeight="bold"
              textStyle="normal"
              size="xl6"
              style={{ color: "white", marginBottom: "16px" }}
            >
              {' '}
              Explore & Share <br />
              Your Ideas with the Community
            </atoms.Typography>

            <atoms.Typography
              variant="secondary"
              as="p"
              leading="normal"
              size="body_xl"
              textAlign="center"
              textCase="normal"
              textDecoration="noUnderline"
              textStyle="normal"
              textWeight="light"
              style={{ color: "white" }}
            >
              Transform your ideas into open-source products with the community.
              Share your vision and collaborate with others to bring it to life.
              Whether you're seeking feedback, partnerships, or inspiration,
              Ideaspace helps make it a reality.
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
                    cardBorderColor="#A681CA"
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
                    cardBorderColor="#7A87C7"
                  />
                </a>
              </Link>
            </ButtonArea>
          </NavButtonArea>
        </MainContainer>
      </div>
    </>
  );
}

export default WelcomePage;
