import Router from "next/router";
import { env } from "./EnvironmentVariables";
import axios from "axios";

export const Logout = () => {
  axios
    .get(`${env().API_URL}/auth/logout`, { withCredentials: true })
    .then(response => {
      console.log(response);

      Router.reload(window.location.pathname);
    });
};
