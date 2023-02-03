import Router from 'next/router';
import axios from 'axios';

const Logout = () => {
  axios
    .get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/auth/logout`, {
      withCredentials: true,
    })
    .then(() => {
      Router.reload(window.location.pathname);
    });
};

export default Logout;
