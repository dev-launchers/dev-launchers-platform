import twitchImage from "../../../images/home-page/twitch-card-image.png";
import discordImage from "../../../images/home-page/discord-card-image.png";

const TEXT_ALIGN = "center";
const IMAGE_HOLDER_BACKGROUND_COLOR = "white";
const communityCards = [
  {
    title: "DISCORD",
    description:
      "If you want to be an integral part of an international platform with a large amount of members to learn project management and app development on the go, join our Discord server",
    href: "https://discord.io/devlaunchers/",
    imageSrc: discordImage,
    textAlignment: TEXT_ALIGN,
    imageHolderBackgroundColor: IMAGE_HOLDER_BACKGROUND_COLOR
  },

  {
    title: "TWITCH",
    description:
      "Join our weekly streams where we create open source games and apps together",
    href: "https://www.twitch.tv/devlaunchers/",
    imageSrc: twitchImage,
    textAlignment: TEXT_ALIGN,
    imageHolderBackgroundColor: IMAGE_HOLDER_BACKGROUND_COLOR
  }
];

export default communityCards;
