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
} from './StyledPageSix';

export default function PageSix() {
  return (
    <PageSixContainer>
      <Header>
        <Typography textweight="light" textalign="center" type="h3">
          Congratulations!
        </Typography>
        <Typography className="modal-subtitle" variant="primary">
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
