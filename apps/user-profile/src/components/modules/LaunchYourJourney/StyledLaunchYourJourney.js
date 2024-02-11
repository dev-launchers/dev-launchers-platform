import styled from "styled-components";
import headerBG from "./../../../images/Onboarding/EmailTemplate/headerBG.png";

export const PageContainer = styled.div`
  background-color: #1C1C1C;
  padding: 50px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderSection = styled.div`
  background-image: url(${headerBG});
  padding: 50px 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  align-text: center;
  color: white;

  .header-text {
    font-size: 80px;
  }
`;

export const SubHeader = styled.div`
  width: 50%;
  align-text: center;
  color: white ;
`;

export const Icons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  .footer-icon {
    padding: 0px 10px;
  }
`;

export const Footer = styled.div`
  padding: 10px 5px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .footer-text {
    color: white;
  }
`;

