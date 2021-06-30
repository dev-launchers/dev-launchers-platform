import createImage from "../../../images/home-page/create-card-image.png?webp";
import learnImage from "../../../images/home-page/learn-card-image.png?webp";
import teachImage from "../../../images/home-page/teach-card-image.png?webp";

const TEXT_ALIGN = "center";
const IMAGE_HOLDER_BACKGROUND_COLOR = "white";
const UNDERLINE_COLOR = "#ff7f0e";
const UNDERLINE_THICKNESS = "0.15rem";
const UNDERLINE_TYPE = "dotted";
const educationalCards = [
  {
    title: "LEARN",
    description:
      "If you are new to game and app developement, learn with hands on instruction from tech experts",
    href: "/learn",
    imageSrc: learnImage,
    textAlignment: TEXT_ALIGN,
    imageHolderBackgroundColor: IMAGE_HOLDER_BACKGROUND_COLOR,
    titleStyling: TEXT_ALIGN,
    titleAlignment: TEXT_ALIGN,
    titleUnderlineColor: UNDERLINE_COLOR,
    titleUnderlineThickness: UNDERLINE_THICKNESS,
    titleUnderlineType: UNDERLINE_TYPE,
  },

  {
    title: "CREATE",
    description:
      "Your mind is exploding with ideas, so take them by the reigns and make them a reality",
    href: "/create",
    imageSrc: createImage,
    textAlignment: TEXT_ALIGN,
    imageHolderBackgroundColor: IMAGE_HOLDER_BACKGROUND_COLOR,
    titleStyling: TEXT_ALIGN,
    titleAlignment: TEXT_ALIGN,
    titleUnderlineColor: UNDERLINE_COLOR,
    titleUnderlineThickness: UNDERLINE_THICKNESS,
    titleUnderlineType: UNDERLINE_TYPE,
  },

  {
    title: "TEACH",
    description:
      "Gain skills leading projects, and contributing to a powerful platform built to solve a serious problem",
    href: "/members",
    imageSrc: teachImage,
    textAlignment: TEXT_ALIGN,
    imageHolderBackgroundColor: IMAGE_HOLDER_BACKGROUND_COLOR,
    titleStyling: TEXT_ALIGN,
    titleAlignment: TEXT_ALIGN,
    titleUnderlineColor: UNDERLINE_COLOR,
    titleUnderlineThickness: UNDERLINE_THICKNESS,
    titleUnderlineType: UNDERLINE_TYPE,
  },
];

export default educationalCards;
