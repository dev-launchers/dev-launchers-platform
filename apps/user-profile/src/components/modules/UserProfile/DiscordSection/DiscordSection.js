import React from 'react';

import DiscordProfile from './DiscordProfile';
import ConnectDiscord from './ConnectDiscord';

/**
 * OLD component left here for reference if ever a discord component ever needed to be created.
 * Only use this for reference.
 */
export default function DiscordSection({
  discordId,
  avatarKey,
  discordUsername,
  discordDiscriminator,
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
