import {
  FeaturedProducts, FeaturedProductsSection, Heading, HeadingContainer, Wrapper
} from "../../modules/OpportunitiesAggregator/StyledOpportunitiesAggregator";

import * as React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import BoxContainer from "../../common/BoxContainer";
import FilteringComponent, {
  FilteringComponentProps
} from "./filtering/FilteringComponent";
import ShortCard from "./ShortCard";
interface Props extends FilteringComponentProps {}

const OpportunitiesAggregator: React.FunctionComponent<Props> = ({
  projects,
  opportunities,
}) => {
  const customSlider = React.useRef<Slider>();
  const settings = {
    className: "cards",
    dots: true,
    arrows: true,
    speed: 1000,
    slidesToShow: projects.length > 1 ? 3 : projects.length,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1535,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <Wrapper>
      <BoxContainer paddingVertical={32}>
        <HeadingContainer>
          <Heading>Join Us!</Heading>
          <span>We're an agile team bringing together people from around the world to learn and build world-changing tech.</span>
          <span>We're excited that you're looking to join us in our mission.</span>
        </HeadingContainer>
      </BoxContainer>
      <div id="background" />
      <FeaturedProductsSection>
        <BoxContainer
          bgColor="NEUTRAL_1"
          paddingVertical={35}
          paddingHorizontal={16}
        >
          <FeaturedProducts>
            <h2>Featured Products</h2>
          </FeaturedProducts>
          <Slider
            ref={(slider) => (customSlider.current = slider)}
            {...settings}
          >
            {projects.map((project) => (
              <ShortCard
                key={project.id}
                title={project.title}
                id={project.id}
                catchPhrase={project.catchPhrase}
                commitmentLevel={project.commitmentLevel}
                isPlatform={project.isPlatform}
                opportunities={project.opportunities}
                slug={project.slug}
              />
            ))}
          </Slider>
        </BoxContainer>
      </FeaturedProductsSection>
      <BoxContainer paddingHorizontal={20} paddingVertical={32}>
        <FilteringComponent projects={projects} opportunities={opportunities} />
      </BoxContainer>
    </Wrapper>
  );
};

export default OpportunitiesAggregator;
