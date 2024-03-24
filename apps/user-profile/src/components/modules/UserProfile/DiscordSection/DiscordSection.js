import React from "react";

import DiscordProfile from "./DiscordProfile";
import ConnectDiscord from "./ConnectDiscord";

export default function DiscordSection({
  discordId,
  avatarKey,
  discordUsername,
  discordDiscriminator
}) {
  return (
    <>
      {discordId ? (
        <DiscordProfile
          discordDiscriminator={discordDiscriminator}
          discordUsername={discordUsername}
          discordId={discordId}
          avatarKey={avatarKey}
        />
      ) : (
        <ConnectDiscord />
      )}
    </>
  );
}
