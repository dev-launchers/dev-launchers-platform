import React from "react";
import Button from "../../../common/Button";

import style from "./MemberProfilesSlideshow.module.css";

const careerCategories = [
  "Game Design",
  "UX Design",
  "3D Art",
  "2D Art",
  "Programming",
  "App Development",
  "Graphic Design",
  "Entrepreneurship",
  "Cybersecurity",
  "Machine Learning"
];

export default function MemberProfilesSlideshow(props) {
  const [careerIndex, setCareerIndex] = React.useState(0);
  const [careerColumn1, setCareerColumn1] = React.useState(careerCategories[0]);
  const [careerColumn2, setCareerColumn2] = React.useState(careerCategories[1]);
  const [careerColumn3, setCareerColumn3] = React.useState(careerCategories[2]);

  React.useEffect(() => {
    setInterval(() => {
      setCareerIndex(prevIndex => prevIndex + 1);
    }, 2000);
  }, []);

  React.useEffect(() => {
    setCareerColumn1(careerCategories[careerIndex]);
    setCareerColumn2(careerCategories[careerIndex - 1]);
    setCareerColumn3(careerCategories[careerIndex - 2]);
    if (careerIndex >= careerCategories.length - 1) {
      setCareerIndex(0);
    }
  }, [careerIndex]);

  return (
    <div className={style.carouselHolder}>
      <div className={style.carouselBlock}>
        <div className={style.inLabelDiv}>I'm a</div>
        <div className={style.carouselBlockHeader}>Total Beginner</div>
        <div className={style.inLabelDiv}>in</div>
        <div>{careerColumn1}</div>
      </div>
      <div className={style.carouselArrow}></div>
      <div className={style.carouselBlock}>
        <div className={style.inLabelDiv}>I'm a</div>
        <div className={style.carouselBlockHeader}>Student</div>
        <div className={style.inLabelDiv}>in</div>
        <div>{careerColumn2}</div>
      </div>
      <div className={style.carouselArrow}></div>
      <div className={style.carouselBlock}>
        <div className={style.inLabelDiv}>I'm a</div>
        <div className={style.carouselBlockHeader}>Professional</div>
        <div className={style.inLabelDiv}>in</div>
        <div>{careerColumn3}</div>
      </div>
    </div>
  );
}
