import Link from 'next/link';
import { ThemeProvider } from 'styled-components';
import theme from '../../../styles/theme';

import Newsletter from './Newsletter';
import RandomQuote from './RandomQuote';
import {
  FooterLogo,
  FooterNav,
  NavEntry,
  OrgInfoArea,
  SocialMediaContainer,
  SocialMediaLink,
  Wrapper,
} from './StyledFooter';

export default function Footer() {
  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
        <Newsletter />
        <FooterNav>
          <Link href={'/create'} passHref>

            <NavEntry>CREATE</NavEntry>

          </Link>
          <Link href={'/learn'} passHref>

            <NavEntry>LEARN</NavEntry>

          </Link>
          <Link href={'/ideaspace'} passHref>

            <NavEntry>DREAM</NavEntry>

          </Link>
          {/* }
          <Link href={"/play"} passHref>
            <NavEntry>PLAY</NavEntry>
          </Link>
          { */}
          <Link href={'/support-us'} passHref>

            <NavEntry>SUPPORT US</NavEntry>

          </Link>
          <Link href={'/projects'} passHref>

            <NavEntry>JOIN</NavEntry>

          </Link>
        </FooterNav>
        <SocialMediaContainer>
          <SocialMediaLink Type="Instagram" />
          <Link href={'/'} passHref>

            <FooterLogo />

          </Link>
          <SocialMediaLink Type="Linkedin" />
        </SocialMediaContainer>
        <RandomQuote />
        <OrgInfoArea>
          -
          <Link href="/page/terms-and-conditions" passHref>
            Terms of Service 
          </Link>
          - | -
          <Link href="/page/privacy-policy" passHref>
            Privacy Policy 
          </Link>{' '}
          {'- | '} ©Dev Launchers, 2021.
        </OrgInfoArea>
      </ThemeProvider>
    </Wrapper>
  );
}
