import React from "react";
import ReactDOM from "react-dom";

import style from "./HomeBodyContent.module.css";

import HomeIntro from "../HomeIntro";
import HomePrograms from "../HomePrograms";
import HomeOrganization from "../HomeOrganization";
import HomePartners from "../HomePartners";

export default class HomeBodyContent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={style.HomeBodyContent}>
        <HomeIntro />
        <hr />
        <HomePrograms />
        <hr />
        <HomeOrganization />
        <hr />
        <HomePartners />
      </div>
    );
  }
}
