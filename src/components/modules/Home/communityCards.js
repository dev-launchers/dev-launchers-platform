import twitchImage from "../../../images/home-page/twitch-card-image.png";
import discordImage from "../../../images/home-page/discord-card-image.png";

const TEXT_ALIGN = "center";
const IMAGE_HOLDER_BACKGROUND_COLOR = "white";
const UNDERLINE_COLOR = "#ff7f0e";
const UNDERLINE_THICKNESS = "0.15rem";
const UNDERLINE_TYPE = "dotted";
const communityCards = [
  {
    title: "DISCORD",
    description:
      "Become part of our large community full of members just like you. Learn game and app development, join open source projects, participate in fun events, and make new friends!",
    href: "https://discord.io/devlaunchers/",
    imageSrc: discordImage,
    textAlignment: TEXT_ALIGN,
    imageHolderBackgroundColor: IMAGE_HOLDER_BACKGROUND_COLOR,
    titleStyling: "center",
    titleAlignment: TEXT_ALIGN,
    titleUnderlineColor: UNDERLINE_COLOR,
    titleUnderlineThickness: UNDERLINE_THICKNESS,
    titleUnderlineType: UNDERLINE_TYPE
  },

  {
    title: "TWITCH",
    description:
      "Join our weekly streams where we create open source games and apps together!",
    href: "https://www.twitch.tv/devlaunchers/",
    imageSrc: twitchImage,
    textAlignment: TEXT_ALIGN,
    imageHolderBackgroundColor: IMAGE_HOLDER_BACKGROUND_COLOR,
    titleStyling: "center",
    titleAlignment: TEXT_ALIGN,
    titleUnderlineColor: UNDERLINE_COLOR,
    titleUnderlineThickness: UNDERLINE_THICKNESS,
    titleUnderlineType: UNDERLINE_TYPE
  }
];

export default communityCards;
