import Router from "next/router";
import axios from "axios";
import { env } from "./EnvironmentVariables";

const Logout = () => {
  axios
    .get(`${env().STRAPI_URL}/auth/logout`, { withCredentials: true })
    .then(response => {
      console.log(response);
      Router.reload(window.location.pathname);
    });
};

export default Logout;
