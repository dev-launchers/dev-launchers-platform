import { Wrapper, DiscordLogo } from "./StyledConnectDiscord";
import DiscordImg from "../../../../../../public/images/discord-logo.png?webp";
import Button from "../../../../common/Button";
import { env } from "../../../../../utils/EnvironmentVariables";

const DISCORD_AUTH = process.env.NEXT_PUBLIC_DISCORD_AUTH_URL;

export default function ConnectDiscord() {
  return (
    <Wrapper>
      <p> Your Discord Account is not connected! </p>
      <Button href={DISCORD_AUTH}>Connect</Button>
      <DiscordLogo src={DiscordImg} />
    </Wrapper>
  );
}
