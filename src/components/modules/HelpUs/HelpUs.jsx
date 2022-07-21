import React from "react";
import {
  Container,
  ContentContainer,
  Dot1,
  Dot2,
  Heading,
  HeadlineContainer,
  HeroContainer,
} from "./StyledHelpUs";

const HelpUs = () => (
  <Container>
    <HeroContainer>
      <Dot1 />
      <Dot2 />
      <Heading>Become a Product Tester</Heading>
      <Dot2 />
      <Dot1 />
    </HeroContainer>
    <HeadlineContainer>
      <h3>Help us test our new products!</h3>
    </HeadlineContainer>
    <ContentContainer>
      <div className="page-info">
        <h3>
          Please check out{" "}
          <strong className="lighter-light-blue-30">
            {" "}
            opportunities below
          </strong>{" "}
          to{" "}
          <strong className="lighter-yellow-30">
            participate in a useability testing
          </strong>{" "}
          interview or survey.
        </h3>
      </div>
      <div className="row product-post">
        <div>
          <h3 className="product-title">Dev Recruitment Product</h3>
          <p className="product-description">
            Dev Recruit will allow members and non-members to{" "}
            <strong className="lighter-orange-30">
              browse projects they can join
            </strong>{" "}
            and as well as available opportunities. This product is currently
            undergoing useability testing for the
            <strong className="lighter-light-blue-30">
              {" "}
              MVP (Minimum Viable Product) iteration release
            </strong>
            .
          </p>
          <h4 className="product-description">
            Become a Product Tester by selecting an option below :
          </h4>
          <ul>
            <li>
              <a href="https://calendly.com/christyfic/dev-launchers-recruitment-platform-usability-test?back=1&amp;month=2022-07">
                <button className="button-one button-text" type="button">
                  Useability interview <br /> (Desktop / Laptop) <br />
                </button>
              </a>
            </li>
            <li>
              <a href="https://forms.gle/MTQbPaRAC2Xcfbdj9">
                <button className="button-two button-text" type="button">
                  survey form
                </button>
              </a>
            </li>
            <li>
              <a href="https://calendly.com/anna-isaacks/dl-recruitment-mvp-mobile-testing">
                <button className="button-three button-text" type="button">
                  Useability interview <br />
                  (Mobile Device) <br />{" "}
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="page-info">
        <h3>About Our Products</h3>
        <p className="page-description">
          At Dev Launchers we believe in creating{" "}
          <strong className="lighter-orange-30">
            {" "}
            user-centered products{" "}
          </strong>
          . This means throughout product development we{" "}
          <strong className="lighter-light-blue-30">
            {" "}
            conduct useability tests{" "}
          </strong>{" "}
          to determine if the product intuitive and{" "}
          <strong className="lighter-yellow-30">
            {" "}
            find areas for improvement{" "}
          </strong>
          .<br /> We really appreciate our{" "}
          <strong className="lighter-orange-30">
            user testers as they play an essential role
          </strong>{" "}
          in the development of successful products.
          <br />
        </p>
        <h3>About User Testing</h3>
        <p className="page-description">
          During useability interviews, our UX Researchers will give you access
          to{" "}
          <strong className="lighter-yellow-30">
            check out our latest products
          </strong>
          , <strong className="lighter-yellow-30">interact with them</strong>{" "}
          and <strong className="lighter-yellow-30">share your thoughts</strong>
          .<strong className="lighter-orange-30">Survey forms</strong> typically
          take about <strong className="lighter-orange-30">10 minutes</strong>{" "}
          to fill out and our{" "}
          <strong className="lighter-light-blue-30">
            one on one interviews
          </strong>{" "}
          last about{" "}
          <strong className="lighter-light-blue-30">30 minutes</strong>.Our{" "}
          <strong className="lighter-yellow-30">
            one-on-one interviews are recorded
          </strong>{" "}
          for research{" "}
          <strong className="lighter-yellow-30">documentation purposes</strong>{" "}
          and will only be shared within the organization.
        </p>
      </div>
    </ContentContainer>
  </Container>
);

export default HelpUs;
