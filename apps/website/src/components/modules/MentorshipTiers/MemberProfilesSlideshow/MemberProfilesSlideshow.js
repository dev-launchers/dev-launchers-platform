import React from "react";

import {
  Wrapper,
  CarouselHolder,
  CarouselBlock,
  CarouselBlockHeader,
  CarouselArrow,
  InLabelDiv,
} from "./StyledMemberProfilesSlideshow";

const careerCategories = [
  "🎮 Game Design",
  "👤 UX Design",
  "🌐 3D Art",
  "🎨 2D Art",
  "💻 Programming",
  "📱 App Development",
  "🟧 Graphic Design",
  "👔 Entrepreneurship",
  "🔒 Cybersecurity",
  "🤖 Machine Learning",
];

export default function MemberProfilesSlideshow() {
  const [careerIndex, setCareerIndex] = React.useState(2);
  const [careerColumn1, setCareerColumn1] = React.useState(careerCategories[0]);
  const [careerColumn2, setCareerColumn2] = React.useState(careerCategories[1]);
  const [careerColumn3, setCareerColumn3] = React.useState(careerCategories[2]);

  React.useEffect(() => {
    const carrerChangeInterval = setInterval(() => {
      setCareerIndex((prevIndex) => prevIndex + 1);
    }, 2000);

    return () => clearInterval(carrerChangeInterval);
  }, []);

  const wrapIndex = (index, array) => {
    if (index > array.length - 1) {
      return index - array.length;
    }
    if (index < 0) {
      return array.length - index - 3;
    }
    return index;
  };
  React.useEffect(() => {
    setCareerColumn1(
      careerCategories[wrapIndex(careerIndex, careerCategories)]
    );
    setCareerColumn2(
      careerCategories[wrapIndex(careerIndex - 1, careerCategories)]
    );
    setCareerColumn3(
      careerCategories[wrapIndex(careerIndex - 2, careerCategories)]
    );
    if (careerIndex >= careerCategories.length + 2) {
      setCareerIndex(2);
    }
  }, [careerIndex]);

  return (
    <div style={{ width: "100%" }}>
      <Wrapper>
        <h3>A Space For Everyone</h3>
        <b>Check below to see where you fit in at Dev Launchers!</b>
        <CarouselHolder>
          <CarouselBlock>
            <InLabelDiv>I&apos;m a</InLabelDiv>
            <CarouselBlockHeader>Total Beginner</CarouselBlockHeader>
            <InLabelDiv>in</InLabelDiv>
            <div>{careerColumn1}</div>
          </CarouselBlock>
          <CarouselArrow></CarouselArrow>
          <CarouselBlock>
            <InLabelDiv>I&apos;m a</InLabelDiv>
            <CarouselBlockHeader>Student</CarouselBlockHeader>
            <InLabelDiv>in</InLabelDiv>
            <div>{careerColumn2}</div>
          </CarouselBlock>
          <CarouselArrow></CarouselArrow>
          <CarouselBlock>
            <InLabelDiv>I&apos;m a</InLabelDiv>
            <CarouselBlockHeader>Professional</CarouselBlockHeader>
            <InLabelDiv>in</InLabelDiv>
            <div>{careerColumn3}</div>
          </CarouselBlock>
        </CarouselHolder>
      </Wrapper>
      <hr />
    </div>
  );
}
