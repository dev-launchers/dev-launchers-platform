import ourMissionImage from "../../../images/support-us/people-inside-room-3184468.jpg?webp";
import developmentLabImage from "../../../images/members/photos/startup-table.jpg?webp";

const TEXT_ALIGN = "center";
const IMAGE_HOLDER_BACKGROUND_COLOR = "white";
const UNDERLINE_COLOR = "#ff7f0e";
const UNDERLINE_THICKNESS = "0.15rem";
const UNDERLINE_TYPE = "dotted";
const organizationCards = [
  {
    title: "DEVELOPMENT LABS",
    description:
      "Our Labs happen on Saturdays, and give participants access to valuable help from members with more development experience. This is 100% FREE, and all we ask is that you spend time helping others through Dev Launchers.",
    href: "/members",
    imageSrc: developmentLabImage,
    textAlignment: TEXT_ALIGN,
    imageHolderBackgroundColor: IMAGE_HOLDER_BACKGROUND_COLOR,
    titleStyling: TEXT_ALIGN,
    flexDirection: "row",
    titleAlignment: "right",
    titleUnderlineColor: UNDERLINE_COLOR,
    titleUnderlineThickness: UNDERLINE_THICKNESS,
    titleUnderlineType: UNDERLINE_TYPE,
  },

  {
    title: "WHAT WE'RE ABOUT",
    description:
      "Dev Launchers is a 501(c)(3) nonprofit intent on empowering diverse young creatives, innovators, and leaders. We're working on touching as many lives as we possibly can, and need your help to make that happen. Any amount helps!",
    href: "/support-us",
    imageSrc: ourMissionImage,
    textAlignment: TEXT_ALIGN,
    imageHolderBackgroundColor: IMAGE_HOLDER_BACKGROUND_COLOR,
    flexDirection: "row-reverse",
    titleStyling: TEXT_ALIGN,
    titleAlignment: "left",
    titleUnderlineColor: UNDERLINE_COLOR,
    titleUnderlineThickness: UNDERLINE_THICKNESS,
    titleUnderlineType: UNDERLINE_TYPE,
  },
];

export default organizationCards;
