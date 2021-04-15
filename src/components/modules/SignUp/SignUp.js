import React, { useState, useEffect } from "react";
import PageBody from "../../common/PageBody";
import { useRouter } from "next/router";
import axios from "axios";
import DiscordImage from "../../../images/signup/discord.png";
import { FormWrapper, DiscordAuthWrapper } from "./StyledSignUp";
import { useUserDataContext } from "../../../context/UserDataContext";

export default function SignUp() {
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");
  const { userData } = useUserDataContext();
  const router = useRouter();

  const handleUsernameChange = e => {
    setUsername(e.target.value);
  };

  useEffect(() => {
    setLoading(Object.entries(userData).length == 0);
    // Prefetch the user profile page
    router.prefetch("/user-profile");
  }, [userData]);

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
          {!loading && userData.discord ? (
            <p>
              you're authenticated with discord as{" "}
              {userData.discord.username + "#" + userData.discord.discriminator}
            </p>
          ) : (
            <>
              <p>Auth with Discord! (optional)</p>
              <a href={process.env.DISCORD_AUTH_URL}>
                <img src={DiscordImage} alt="discord"></img>
              </a>
            </>
          )}
        </DiscordAuthWrapper>
        <br />
      </PageBody>
    </div>
  );
}
