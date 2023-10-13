import Link from 'next/link';
import {ThemeProvider} from 'styled-components';
import theme from "../../../styles/theme";

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
          <Link href={'/create'} passHref className="nav-link">

            <NavEntry>CREATE</NavEntry>

          </Link>
          <Link href={'/learn'} passHref className="nav-link">

            <NavEntry>LEARN</NavEntry>

          </Link>
          <Link href={'/ideaspace'} passHref className="nav-link">

            <NavEntry>DREAM</NavEntry>

          </Link>
          {/* }
          <Link href={"/play"} passHref className="nav-link">
            <NavEntry>PLAY</NavEntry>
          </Link>
          { */}
          <Link href={'/support-us'} passHref className="nav-link">

            <NavEntry>SUPPORT US</NavEntry>

          </Link>
          <Link href={'/projects'} passHref className="nav-link">

            <NavEntry>JOIN</NavEntry>

          </Link>
        </FooterNav>
        <SocialMediaContainer>
          <SocialMediaLink Type="Instagram" />
          <Link href={'/'} passHref className="nav-link">

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
