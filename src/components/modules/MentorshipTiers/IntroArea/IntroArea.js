import React from "react";
import Button from "../../../common/Button";

import style from "./IntroArea.module.css";

export default function IntroArea(props) {
    return (
        <div style={{ width: "100%" }}>
            <div
                className="headerDark"
                style={{
                    backgroundColor: "#333333",
                    color: "white",
                    marginTop: "0%",
                    padding: "3%"
                }}
            >
                <h1 id="title">The Community</h1>
                <div className="page-description">
                    Dev Launchers members become an integral part of our community full of developers and creators. Our
                    programs, which provide content and experience on par with programs and classes that could otherwise
                    cost <u>hundreds to thousands of dollars</u>, are <u>offered for free</u> by leveraging the
                    expertise of our members!
                    <br />
                    <br />
                    We're here help you reach your goals.
                    <br />
                    <Button onClick={props.scrollToFormFunc} style={{ fontSize: ".75rem", marginTop: "2%" }}>
                        APPLY NOW!
                    </Button>
                    <br />
                </div>
            </div>
            <div
                className="headerLight"
                style={{
                    padding: "5%",
                    paddingTop: "1%",
                    paddingBottom: "1%",
                    textAlign: "center"
                }}
            >
                <h3>A Space For Everyone</h3>
                Check below to see where you fit in at Dev Launchers!
            </div>
        </div>
    );
}
