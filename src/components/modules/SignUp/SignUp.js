import React from "react";
import PageBody from "../../common/PageBody";
import Link from "next/link";
import DiscordImage from "../../../images/signup/discord.png";
import { FormWrapper, DiscordAuthWrapper } from "./StyledSignUp";

export default function SignUp() {
  return (
    <div>
      <PageBody>
        <br />
        <h1>Sign up</h1>
        <FormWrapper>
          <form>
            <br />
            <label>Username</label>
            <input type="text" />
            <input type="submit" value="Sign up" />
          </form>
        </FormWrapper>
        <DiscordAuthWrapper>
          <p>Auth with Discord! (optional)</p>
          <a href="#">
            <img src={DiscordImage} alt="discord"></img>
          </a>
        </DiscordAuthWrapper>
        <br />
      </PageBody>
    </div>
  );
}
