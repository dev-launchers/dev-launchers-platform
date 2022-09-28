import Link from 'next/link';

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
      <Newsletter />
      <FooterNav>
        <Link href={'/create'} passHref className="nav-link">
          <a>
            <NavEntry>CREATE</NavEntry>
          </a>
        </Link>
        <Link href={'/learn'} passHref className="nav-link">
          <a>
            <NavEntry>LEARN</NavEntry>
          </a>
        </Link>
        {/* }
        <Link href={"/play"} passHref className="nav-link">
          <NavEntry>PLAY</NavEntry>
        </Link>
        { */}
        <Link href={'/support-us'} passHref className="nav-link">
          <a>
            <NavEntry>SUPPORT US</NavEntry>
          </a>
        </Link>
        <Link href={'/projects'} passHref className="nav-link">
          <a>
            <NavEntry>JOIN</NavEntry>
          </a>
        </Link>
      </FooterNav>
      <SocialMediaContainer>
        <SocialMediaLink Type="Instagram" />
        <Link href={'/'} passHref className="nav-link">
          <a>
            <FooterLogo />
          </a>
        </Link>
        <SocialMediaLink Type="Linkedin" />
      </SocialMediaContainer>
      <RandomQuote />
      <OrgInfoArea>
        -
        <Link href="/page/terms-and-conditions" passHref>
          <a>Terms of Service </a>
        </Link>
        - | -
        <Link href="/page/privacy-policy" passHref>
          <a>Privacy Policy </a>
        </Link>{' '}
        {'- | '} ©Dev Launchers, 2021.
      </OrgInfoArea>
    </Wrapper>
  );
}
