import { Typography } from '@devlaunchers/components/components/atoms';
import LogoMonogram from './../../../../../../images/logo-monogram.png';
import {
  PageSixContainer,
  Header,
  AnimationContainer,
  RocketAnamation,
  CongratulationsShadow,
  CongratulationsImg,
  CircleAnamation,
} from './StyledPageSeven';

export default function PageSeven() {
  return (
    <PageSixContainer>
      <Header>
        <Typography type="h2">Congratulations!</Typography>
        <Typography className="modal-subtitle" type="pLarge">
          Thank you for taking the time to complete onboarding. Next, view the
          ongoing projects and if you find one that you like, contact the
          project lead.
        </Typography>
      </Header>
      <AnimationContainer>
        <RocketAnamation>
          <CongratulationsImg src={LogoMonogram} alt="" />
        </RocketAnamation>
        <CircleAnamation>
          <CongratulationsShadow>&nbsp;</CongratulationsShadow>
        </CircleAnamation>
      </AnimationContainer>
    </PageSixContainer>
  );
}
