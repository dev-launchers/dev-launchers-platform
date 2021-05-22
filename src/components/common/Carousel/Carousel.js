import React, { useState, useEffect } from "react";

import {
  Slideshow,
  SlideHolder,
  LeftSlide,
  RightSlide,
  SlideThumbnail,
  SlideshowController
} from "./StyledCarousel.js";

export default function Carousel({
  callsToAction = [],
  images = [],
  interval = 3000
}) {
  const [thumbnails, setThumbnails] = useState([]);
  const [thumbnails2, setThumbnails2] = useState([]);
  const [leftSlide, setLeftSlide] = useState(0);
  const [rightSlideStyle, setRightSlideStyle] = useState({});
  const [leftSlideStyle, setLeftSlideStyle] = useState({});

  useEffect(() => {
    setThumbnails(callsToAction);
    setThumbnails2(images);
    setLeftSlideStyle({
      backgroundImage: "url('" + callsToAction[leftSlide] + "')"
    });

    if (leftSlide === callsToAction.length - 1) {
      setRightSlideStyle({
        backgroundImage: "url('" + images[0] + "')"
      });
    } else {
      setRightSlideStyle({
        backgroundImage: "url('" + images[leftSlide + 1] + "')"
      });
    }

    const loop = setInterval(() => {
      if (leftSlide === callsToAction.length - 1) {
        setLeftSlide(0);
      } else {
        setLeftSlide(leftSlide + 1);
      }
    }, interval);
    return () => clearInterval(loop);
  }, [callsToAction, leftSlide, interval]);

  function previous() {
    if (leftSlide > 0) {
      setLeftSlide(leftSlide - 1);
    } else {
      setLeftSlide(thumbnails.length - 1);
    }
  }

  function next() {
    if (leftSlide === thumbnails.length - 1) {
      setLeftSlide(0);
    } else {
      setLeftSlide(leftSlide + 1);
    }
  }

  return (
    <Slideshow>
      <SlideHolder>
        <SlideshowController>
          <span onClick={previous}> {"<"} </span>

          <LeftSlide>
            {/* need to add the style={leftSlideStyle} to this thumbnail*/}
            <SlideThumbnail style={leftSlideStyle}></SlideThumbnail>

            {/* {callsToAction.map((callToAction, i)=>{
              return <button>{callToAction.buttonText}</button> 
            })} */}
          </LeftSlide>
          <RightSlide>
            {/* need to add the style={rightSlideStyle}*/}
            <SlideThumbnail style={rightSlideStyle}></SlideThumbnail>
          </RightSlide>

          <span onClick={next}>{">"}</span>
        </SlideshowController>
      </SlideHolder>
    </Slideshow>
  );
}
