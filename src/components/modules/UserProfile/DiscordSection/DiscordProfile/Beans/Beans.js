import { useState, useEffect } from "react";
import axios from "axios";
import style from "./Beans.module.css";
import { env } from "../../../../../../utils/EnvironmentVariables.js";

export default function Beans({ discordId }) {
  const [devBeans, setDevBeans] = useState(0);
  const [goldenBeans, setGoldenBeans] = useState(0);

  useEffect(() => {
    if (!discordId) return;
    //prettier-ignore
    axios.get(env().API_URL + `/discord/users/${discordId}/dev-beans`).then(({ data }) => {
      setDevBeans(data);
    });

    //prettier-ignore
    axios.get(env().API_URL + `/discord/users/${discordId}/golden-beans`).then(({ data }) => {
      setGoldenBeans(data)
    });
  }, [discordId]);

  return (
    <>
      <p style={{ alignSelf: "end", margin: 0 }}>Dev Beans: {devBeans}</p>
      <p style={{ margin: 0 }}>Golden Beans: {goldenBeans}</p>
    </>
  );
}
