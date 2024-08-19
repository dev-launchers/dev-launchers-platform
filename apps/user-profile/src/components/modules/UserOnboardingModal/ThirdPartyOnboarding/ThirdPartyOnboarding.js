import Typography from '@devlaunchers/components/components/atoms/Typography';
import { ThirdPartyContainer } from './StyledThirdPartyOnboarding';

export default function ThirdPartyOnboarding() {
  return (
    <ThirdPartyContainer>
      <Typography type="h2">Sign Up with Third Party Sites</Typography>
      <Typography type="p">
        These are the platforms we’ll use to collaborate on projects
      </Typography>
    </ThirdPartyContainer>
  );
}