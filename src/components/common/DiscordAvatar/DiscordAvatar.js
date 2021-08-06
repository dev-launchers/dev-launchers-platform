import { Avatar } from "./StyledDiscordAvatar";

export default function DiscordAvatar({ discordId, avatarKey }) {
  return (
    <Avatar
      src={
        avatarKey
          ? `https://cdn.discordapp.com/avatars/${discordId}/${avatarKey}.webp`
          : "https://discord.com/assets/1cbd08c76f8af6dddce02c5138971129.png"
      }
    />
  );
}
