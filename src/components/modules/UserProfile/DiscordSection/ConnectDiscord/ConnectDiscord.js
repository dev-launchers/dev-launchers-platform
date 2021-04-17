import style from "./ConnectDiscord.module.css";
import DiscordLogo from "./../../../../../../public/images/discord-logo.png";
import Button from "./../../../../common/Button";
import { env } from "../../../../../utils/EnvironmentVariables";

const DISCORD_AUTH = env().DISCORD_AUTH_URL;

export default function ConnectDiscord() {
  return (
    <div className={style.connectDiscord}>
      <p> Your Discord Account is not connected! </p>
      <Button href={DISCORD_AUTH}>Connect</Button>
      <img className={style.discordLogo} src={DiscordLogo} alt="Discord Logo" />
    </div>
  );
}
