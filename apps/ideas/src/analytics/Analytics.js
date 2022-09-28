import ReactGA from "react-ga4";

export const initGA = () => {
    ReactGA.initialize("G-LZ7Q2TZ53Y");
  };
  

export const logPageView = () => {

ReactGA.set({ page: `${window.location.pathname}` });
ReactGA.pageview(`${window.location.pathname}`);
};
