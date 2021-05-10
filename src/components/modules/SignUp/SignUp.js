import React, { useState, useEffect } from "react";
import PageBody from "../../common/PageBody";
import { useRouter } from "next/router";
import axios from "axios";
import DiscordImage from "../../../images/signup/discord.png";

import { FormWrapper, DiscordAuthWrapper } from "./StyledSignUp";

import { useUserDataContext } from "../../../context/UserDataContext";
import { env } from "../../../utils/EnvironmentVariables.js";

export default function SignUp() {
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");
  const { userData } = useUserDataContext();
  const router = useRouter();

  const handleUsernameChange = e => {
    setUsername(e.target.value);
  };

  useEffect(() => {
    setLoading(userData.id == -1);
    // Prefetch the user profile page
    router.prefetch("/user-profile");
  }, [userData]);

  const updateUser = async e => {
    e.preventDefault();
    try {
      const currentUser = await axios(env().API_URL + "/users/current", {
        withCredentials: true
      });
      await axios.put(
        env().API_URL + `/users/${currentUser.data.id}`,
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
      <PageBody style={{ minHeight: "70vh" }}>
        <br />
        <h3 style={{ textAlign: "center" }}>Sign Up</h3>
        <FormWrapper>
          <br />
          <label>Username</label>
          <input onChange={handleUsernameChange} value={username} type="text" />
          <input
            onClick={updateUser}
            type="submit"
            value="Sign up"
            style={{ color: "white" }}
          />
        </FormWrapper>
        <hr />
        <DiscordAuthWrapper>
          {!loading && userData.discord.id ? (
            <p>
              You're authenticated with discord as{" "}
              {userData.discord.username + "#" + userData.discord.discriminator}
            </p>
          ) : (
            <>
              <p style={{ fontSize: "1.25rem" }}>
                Connect your Discord account! <i>(optional)</i>
              </p>
              <a href={env().DISCORD_AUTH_URL}>
                <img
                  src={DiscordImage}
                  alt="discord"
                  style={{ width: "8rem" }}
                ></img>
              </a>
            </>
          )}
        </DiscordAuthWrapper>
        <br />
      </PageBody>
    </div>
  );
}
