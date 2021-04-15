import React from "react";

import DiscordProfile from "./DiscordProfile";
import ConnectDiscord from "./ConnectDiscord";

let discordId = "539581641174024233";
//discordId = undefined;
const discordUsername = "Guillermo";
const avatarKey = "4fe0ced1b2b05c954b7ff203a9e89dc4";
const discordDiscriminator = "2969";

export default function DiscordSection({
  discordId,
  avatarKey,
  discordUsername,
  discordDiscriminator
}) {
  return (
    <>
      {discordId || true ? (
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
