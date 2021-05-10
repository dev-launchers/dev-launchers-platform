import React from "react";
import {
  InfoContainer,
  ProjectHero,
  ProjectTitle,
  Wrapper,
} from "./StyledProject";

const Project = (props) => {
  const [fontSize, setFontSize] = React.useState("2rem");
  const [height, setHeight] = React.useState("11rem");

  React.useEffect(() => {
    const changeHeroOnScroll = (e) => {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        setFontSize("1.4rem");
        setHeight("6rem");
      } else {
        setFontSize("2rem");
        setHeight("11rem");
      }
    };
    document.addEventListener("scroll", changeHeroOnScroll);
    return () => document.removeEventListener("scroll", changeHeroOnScroll);
  }, []);
  return (
    <Wrapper>
      <ProjectHero style={{ height }}>
        <ProjectTitle style={{ fontSize }}>
          <span>Project</span>
          Platform Website
        </ProjectTitle>
      </ProjectHero>
      <br />
      <InfoContainer style={{ marginTop: "10rem" }}>
        <h4>Project Goal:</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
          perferendis expedita sit magni neque! Magnam tempora facilis aliquam
          itaque ratione nobis cupiditate laudantium nam ex tenetur quidem,
          voluptas rerum quos?
        </p>
      </InfoContainer>
      <InfoContainer>
        <h4>Current Objectives:</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
          perferendis expedita sit magni neque! Magnam tempora facilis aliquam
          itaque ratione nobis cupiditate laudantium nam ex tenetur quidem,
          voluptas rerum quos?
        </p>
      </InfoContainer>
      <InfoContainer>
        <h4>Meeting Schedule:</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
          perferendis expedita sit magni neque! Magnam tempora facilis aliquam
          itaque ratione nobis cupiditate laudantium nam ex tenetur quidem,
          voluptas rerum quos?
        </p>
      </InfoContainer>
      <InfoContainer>
        <h4>Leader(s)/Project Owner(s):</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
          perferendis expedita sit magni neque! Magnam tempora facilis aliquam
          itaque ratione nobis cupiditate laudantium nam ex tenetur quidem,
          voluptas rerum quos?
        </p>
      </InfoContainer>
      <InfoContainer>
        <h4>Team Members:</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
          perferendis expedita sit magni neque! Magnam tempora facilis aliquam
          itaque ratione nobis cupiditate laudantium nam ex tenetur quidem,
          voluptas rerum quos?
        </p>
      </InfoContainer>
      <InfoContainer>
        <h4>Skills:</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
          perferendis expedita sit magni neque! Magnam tempora facilis aliquam
          itaque ratione nobis cupiditate laudantium nam ex tenetur quidem,
          voluptas rerum quos?
        </p>
      </InfoContainer>
      <InfoContainer>
        <h4>Attachments:</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
          perferendis expedita sit magni neque! Magnam tempora facilis aliquam
          itaque ratione nobis cupiditate laudantium nam ex tenetur quidem,
          voluptas rerum quos?
        </p>
      </InfoContainer>
      <InfoContainer>
        <h4>Commitment Level (metrics):</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
          perferendis expedita sit magni neque! Magnam tempora facilis aliquam
          itaque ratione nobis cupiditate laudantium nam ex tenetur quidem,
          voluptas rerum quos?
        </p>
      </InfoContainer>
      <InfoContainer>
        <h4>Open Roles (Commitment levels):</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
          perferendis expedita sit magni neque! Magnam tempora facilis aliquam
          itaque ratione nobis cupiditate laudantium nam ex tenetur quidem,
          voluptas rerum quos?
        </p>
      </InfoContainer>
      <InfoContainer>
        <h4>GitHub repo/urls:</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
          perferendis expedita sit magni neque! Magnam tempora facilis aliquam
          itaque ratione nobis cupiditate laudantium nam ex tenetur quidem,
          voluptas rerum quos?
        </p>
      </InfoContainer>
      <br />
    </Wrapper>
  );
};

export default Project;
