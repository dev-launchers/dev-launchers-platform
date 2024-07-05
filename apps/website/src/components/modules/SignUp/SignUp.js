import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import PageBody from "../../common/PageBody";
// import DiscordImage from "../../../images/signup/discord.png?webp";
import { FormWrapper } from "./StyledSignUp";
import { useUserDataContext } from "@devlaunchers/components/context/UserDataContext";

export default function SignUp() {
  // const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");
  const { userData } = useUserDataContext();
  const router = useRouter();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  useEffect(() => {
    // setLoading(userData.id === -1);
    // Prefetch the user profile page
    router.prefetch("/users/me");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData]);

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      const currentUser = await axios(`${process.env.NEXT_PUBLIC_STRAPI_URL}/users/me`, {
        withCredentials: true,
      });
      await axios.put(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/users/${currentUser.data.id}`,
        { username },
        {
          withCredentials: true,
        }
      );
      if (currentUser.status === 200) router.replace("/users/me");
    } catch (err) {
      // TODO give feedback onError
      // eslint-disable-next-line no-console
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
          <input
            onChange={handleUsernameChange}
            onKeyDown={(e) => {
              if (e.key === " ") e.preventDefault();
            }}
            value={username}
            type="text"
          />
          <input
            onClick={updateUser}
            type="submit"
            value="Sign up"
            style={{ color: "white" }}
          />
        </FormWrapper>
        <hr />
        {/*
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
                <a href={process.env.NEXT_PUBLIC_DISCORD_AUTH_URL}>
                  <img
                    src={DiscordImage}
                    alt="discord"
                    style={{ width: "8rem" }}
                  ></img>
                </a>
              </>
            )}
          </DiscordAuthWrapper> */}
        <br />
      </PageBody>
    </div>
  );
}
