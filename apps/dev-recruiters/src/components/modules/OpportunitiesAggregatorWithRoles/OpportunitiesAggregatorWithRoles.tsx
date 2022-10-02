import {
  FeaturedProducts, FeaturedProductsSection, Heading, HeadingContainer, Wrapper
} from "../OpportunitiesAggregator/StyledOpportunitiesAggregator";

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

const OpportunitiesAggregatorWithRoles: React.FunctionComponent<Props> = ({
  projects,
  opportunities,
}) => {
  const customSlider = React.useRef<Slider>();
  const settings = {
    className: "cards",
    dots: true,
    arrows: true,
    speed: 1000,
    slidesToShow: projects.length > 1 ? projects.length - 1 : projects.length,
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
      <BoxContainer 
        paddingVertical={32}
        bgColor="BlackCoral"
      >
        <HeadingContainer>
          <Heading>Join Us!</Heading>
          <span>Find a Project to Join!</span>
        </HeadingContainer>
      </BoxContainer>
      <div id="background" />

      <BoxContainer 
        paddingHorizontal={20} 
        paddingVertical={32}
        bgColor="OuterSpace"
      >
        <FilteringComponent projects={projects} opportunities={opportunities} />
      </BoxContainer>

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
      <div className="pusher" style={{height:"5rem"}}></div>
    </Wrapper>
  );
};

export default OpportunitiesAggregatorWithRoles;
