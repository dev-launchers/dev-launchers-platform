import style from "./ConnectDiscord.module.css";
import DiscordLogo from "./../../../../../../public/images/discord-logo.png";
import Button from "./../../../../common/Button";

const DISCORD_AUTH =
  "https://discord.com/api/oauth2/authorize?client_id=815294711983112194&redirect_uri=https%3A%2F%2Fapi-staging.devlaunchers.com%2Fusers%2Fauth%2Fdiscord%2Fcallback&response_type=code&scope=identify";

export default function ConnectDiscord() {
  return (
    <div className={style.connectDiscord}>
      <p> Your Discord Account is not connected! </p>
      <Button href={DISCORD_AUTH}>Connect</Button>
      <div className={style.discordLogo}>
        <img src={DiscordLogo} alt="Discord Logo" />
      </div>
    </div>
  );
}
