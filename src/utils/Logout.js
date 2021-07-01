import Router from "next/router";
import axios from "axios";
import { env } from "./EnvironmentVariables";

const Logout = () => {
  axios
    .get(`${env().API_URL}/auth/logout`, { withCredentials: true })
    .then(() => {
      Router.reload(window.location.pathname);
    });
};

export default Logout;
