import { useRouter } from "next/router";
import { env } from "../../../../utils/EnvironmentVariables";
import axios from "axios";

export const Logout = () => {
  const router = useRouter();
  axios
    .get(`${env().API_URL}/auth/logout`, { withCredentials: true })
    .then(response => {
      console.log(response);
      router.replace("/");
    });
};
