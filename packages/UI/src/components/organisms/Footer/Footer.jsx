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
            <a href={'/create'}>
              <NavEntry>CREATE</NavEntry>
            </a>
          </Link>
          <Link href={'/learn'} passHref>
            <a href={'/learn'}>
              <NavEntry>LEARN</NavEntry>
            </a>
          </Link>
          <Link href={'/ideaspace'} passHref>
            <a href={'/ideaspace'}>
              <NavEntry>DREAM</NavEntry>
            </a>
          </Link>
          {/* }
          <Link href={"/play"} passHref>
            <NavEntry>PLAY</NavEntry>
          </Link>
          { */}
          <Link href={'/support-us'} passHref>
            <a href={'/support-us'}>
              <NavEntry>SUPPORT US</NavEntry>
            </a>
          </Link>
          <Link href={'/projects'} passHref>
            <a href={'/projects'}>
              <NavEntry>JOIN</NavEntry>
            </a>
          </Link>
        </FooterNav>
        <SocialMediaContainer>
          <SocialMediaLink Type="Instagram" />
          <Link href={'/'} passHref>
            <a href={'/'}>
              <FooterLogo />
            </a>
          </Link>
          <SocialMediaLink Type="Linkedin" />
        </SocialMediaContainer>
        <RandomQuote />
        <OrgInfoArea>
          -
          <Link href="/page/terms-and-conditions" passHref>
            <a href="/page/terms-and-conditions">Terms of Service </a>
          </Link>
          - | -
          <Link href="/page/privacy-policy" passHref>
            <a href="/page/privacy-policy">Privacy Policy </a>
          </Link>{' '}
          {'- | '} ©Dev Launchers, 2021.
        </OrgInfoArea>
      </ThemeProvider>
    </Wrapper>
  );
}
