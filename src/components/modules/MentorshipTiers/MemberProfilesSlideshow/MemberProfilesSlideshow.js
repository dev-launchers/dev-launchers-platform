import React from "react";
import Button from "../../../common/Button";

import style from "./MemberProfilesSlideshow.module.css";

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
  "🤖 Machine Learning"
];

export default function MemberProfilesSlideshow(props) {
  const [careerIndex, setCareerIndex] = React.useState(2);
  const [careerColumn1, setCareerColumn1] = React.useState(careerCategories[0]);
  const [careerColumn2, setCareerColumn2] = React.useState(careerCategories[1]);
  const [careerColumn3, setCareerColumn3] = React.useState(careerCategories[2]);

  React.useEffect(() => {
    setInterval(() => {
      setCareerIndex(prevIndex => prevIndex + 1);
    }, 2000);
  }, []);

  const wrapIndex = (index, array) => {
    index = index > array.length - 1 ? index - array.length : index;
    index = index < 0 ? array.length - index - 3 : index;
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
      <div className={style.wrapper}>
        <h3>A Space For Everyone</h3>
        <b>Check below to see where you fit in at Dev Launchers!</b>
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
      </div>
      <hr />
    </div>
  );
}
