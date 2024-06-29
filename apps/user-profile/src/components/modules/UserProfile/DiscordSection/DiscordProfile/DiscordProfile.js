import React from "react";
import DiscordAvatar from "../../../../common/DiscordAvatar";
import Beans from "./Beans";
import { Wrapper, DiscordInfo } from "./StyledDiscordProfile";

export default function DiscordProfile({
  discordId,
  avatarKey,
  discordUsername,
  discordDiscriminator,
}) {
  return (
    <Wrapper>
      <DiscordAvatar discordId={discordId} avatarKey={avatarKey} />
      <DiscordInfo>
        {discordUsername}#{discordDiscriminator}
      </DiscordInfo>
      <Beans discordId={discordId} />
    </Wrapper>
  );
}
