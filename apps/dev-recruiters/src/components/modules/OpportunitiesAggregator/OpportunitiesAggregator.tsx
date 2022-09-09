import {
  Wrapper,
  Heading,
  FeaturedProductsSection,
  FeaturedProducts,
  CardsContainer,
  HeadingContainer,
} from "../../modules/OpportunitiesAggregator/StyledOpportunitiesAggregator";

import * as React from "react";
import ShortCard from "./ShortCard";
import FilteringComponent, {
  FilteringComponentProps,
} from "./filtering/FilteringComponent";
import BoxContainer from "../../common/BoxContainer";
import Slider from "react-slick";
import { useTheme } from "styled-components";
interface Props extends FilteringComponentProps {}

const OpportunitiesAggregator: React.FunctionComponent<Props> = ({
  projects,
  opportunities,
}) => {
  const theme = useTheme()
  const customSlider = React.useRef<Slider | null>(null);
  const settings = {
    className: "cards",
    dots: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 4000,
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
          <span>Find a Project to Join!</span>
        </HeadingContainer>
      </BoxContainer>
      <div id="background" />
      <FeaturedProductsSection>
        <BoxContainer
          bgColor="BlackCoral"
          paddingVertical={35}
          paddingHorizontal={16}
        >
          <FeaturedProducts>
            <h2>Featured Products</h2>
          </FeaturedProducts>
          <Slider
            ref={(slider) => customSlider.current = slider}
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
