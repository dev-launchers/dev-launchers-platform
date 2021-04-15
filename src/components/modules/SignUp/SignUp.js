import env from "../../../utils/EnvironmentVariables.js";

import React, { useState, useEffect } from "react";
import PageBody from "../../common/PageBody";
import { useRouter } from "next/router";
import axios from "axios";
import DiscordImage from "../../../images/signup/discord.png";
import { FormWrapper, DiscordAuthWrapper } from "./StyledSignUp";

export default function SignUp() {
  const router = useRouter();
  const [username, setUsername] = useState("");

  const handleUsernameChange = e => {
    setUsername(e.target.value);
  };

  useEffect(() => {
    // Prefetch the user profile page
    router.prefetch("/user-profile");
  }, []);

  const updateUser = async e => {
    e.preventDefault();
    try {
      const currentUser = await axios(
        "https://api-staging.devlaunchers.com/users/current",
        {
          withCredentials: true
        }
      );
      await axios.put(
        `https://api-staging.devlaunchers.com/users/${currentUser.data.id}`,
        { username: username },
        {
          withCredentials: true
        }
      );
      if (currentUser.status == 200) router.replace("/user-profile");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <PageBody>
        <br />
        <h1>Sign up</h1>
        <FormWrapper>
          <form onSubmit={updateUser}>
            <br />
            <label>Username</label>
            <input
              onChange={handleUsernameChange}
              value={username}
              type="text"
            />
            <input type="submit" value="Sign up" />
          </form>
        </FormWrapper>
        <DiscordAuthWrapper>
          <p>Auth with Discord! (optional)</p>
          <a href={env.DISCORD_AUTH_URL}>
            <img src={DiscordImage} alt="discord"></img>
          </a>
        </DiscordAuthWrapper>
        <br />
      </PageBody>
    </div>
  );
}
