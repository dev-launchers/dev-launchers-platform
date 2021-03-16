import React, { useState } from "react";
import PageBody from "../../common/PageBody";
import Link from "next/link";
import axios from "axios";
import DiscordImage from "../../../images/signup/discord.png";
import { FormWrapper, DiscordAuthWrapper } from "./StyledSignUp";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const handleUsernameChange = e => {
    setUsername(e.target.value);
  };
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
          <a href="#">
            <img src={DiscordImage} alt="discord"></img>
          </a>
        </DiscordAuthWrapper>
        <br />
      </PageBody>
    </div>
  );
}
