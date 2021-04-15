import React, { useEffect } from "react";
import style from "./DiscordProfile.module.css";
import DiscordAvatar from "./../../../../common/DiscordAvatar";
import Beans from "./Beans";

export default function DiscordProfile({
  discordId,
  avatarKey,
  discordUsername,
  discordDiscriminator
}) {
  return (
    <div className={style.wrapper}>
      <DiscordAvatar discordId={discordId} avatarKey={avatarKey} />
      <p style={{ alignSelf: "start", color: "#464f49", margin: 0 }}>
        {discordUsername}#{discordDiscriminator}
      </p>
      <Beans discordId={discordId} />
    </div>
  );
}
