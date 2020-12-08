import createImage from "../../../images/home-page/create-card-image.png";
import learnImage from "../../../images/home-page/learn-card-image.png";
import teachImage from "../../../images/home-page/teach-card-image.png";

const TEXT_ALIGN = "center";
const IMAGE_HOLDER_BACKGROUND_COLOR = "white";
const educationalCards = [
  {
    title: "LEARN",
    description:
      "If you are new to game and app developement, learn with hands on instruction from tech experts",
    href: "https://devlaunchers.com/learn",
    imageSrc: learnImage,
    textAlignment: TEXT_ALIGN,
    imageHolderBackgroundColor: IMAGE_HOLDER_BACKGROUND_COLOR
  },

  {
    title: "CREATE",
    description:
      "Your mind is exploding with ideas, so take them by the reigns and make them a reality",
    href: "https://devlaunchers.com/create",
    imageSrc: createImage,
    textAlignment: TEXT_ALIGN,
    imageHolderBackgroundColor: IMAGE_HOLDER_BACKGROUND_COLOR
  },

  {
    title: "TEACH",
    description:
      "Gain skills leading projects, and contributing to a powerful platform built to solve a serious problem",
    href: "https://devlaunchers.com/members",
    imageSrc: teachImage,
    textAlignment: TEXT_ALIGN,
    imageHolderBackgroundColor: IMAGE_HOLDER_BACKGROUND_COLOR
  }
];

export default educationalCards;
