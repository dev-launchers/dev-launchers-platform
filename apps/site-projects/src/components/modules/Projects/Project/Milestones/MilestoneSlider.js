import React from "react";
import { withTheme } from "styled-components";
import Slider from "react-slick";
import {
  TaskContent,
  TaskContentWrapper,
  CustomArrow,
} from "./StyledMilestoneSlider";
import { TaskGroup, Title, Description } from "./StyledMilestones";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MileStoneSlider({ milestones, slidesToShow, isCyclic, isAutoplay }) {
  const settings = {
    dots: true,
    infinite: isCyclic,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: isAutoplay,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <CustomArrow />,
    prevArrow: <CustomArrow />,
    // breakpoints to make react slider responsive
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <TaskContentWrapper>
      <Slider {...settings}>
        {milestones?.map((milestone, i) => (
          <TaskGroup key={i}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Title>
                {milestone.title}
                <Description>{milestone.description}</Description>
              </Title>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                {/* Added for cyclic functionality between milestones */}

                {milestone.task?.map((task) => (
                  <TaskContent key={i} primary={task.isReached}>
                    <div>{task.title}</div>
                    <p
                      style={{
                        marginTop: ".9rem",
                        // marginLeft: ".2rem",
                      }}
                    >
                      {task.isReached ? "reached" : "hit"} by: <br />
                      {task.completionDate}
                    </p>
                  </TaskContent>
                ))}
              </div>
            </div>
          </TaskGroup>
        ))}
      </Slider>
    </TaskContentWrapper>
  );
}
export default withTheme(MileStoneSlider);
