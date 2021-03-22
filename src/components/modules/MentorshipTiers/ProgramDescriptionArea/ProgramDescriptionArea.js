import React from "react";

import style from "./ProgramDescriptionArea.module.css";

export default function ProgramDescriptionArea(props) {
  return (
    <div style={{ width: "100%" }}>
      <div className={style.headerLight}>
        <div className={style.descriptionArea}>
          <h3>How It Works</h3>
          <b>Our Labs happen on Saturdays</b>, and give participants access to
          valuable help from members with more development experience. This is{" "}
          <b>100% FREE</b>, and all we ask is that you spend time helping others
          through Dev Launchers.
          <div className={style.descriptionTimeslotArea}>
            <div className={style.descriptionTimeslotBox}>
              <b>Beginner Lab</b>
              <br />
              <i>Saturdays, 1:30-3:00pm CDT</i>
              <br />
              <br />
              If you're <b>learning coding fundamentals</b>, have recently
              started your first project, or are looking to help those who are,
              this is for you!
            </div>
            <div className={style.descriptionTimeslotBox}>
              <b>Advanced Lab</b>
              <br />
              <i>Saturdays, 12:00-1:30pm CDT</i>
              <br />
              <br />
              If you're working on an <b>intermediate to advanced project</b>,
              or are looking to provide guidance for one, this is for you!
            </div>
          </div>
        </div>
        <hr />
        <div>
          <b>
            Dev Launchers Incubator and Development Lab - Applications Now Open!
          </b>
        </div>
        Apply for our development incubator for access to exclusive content,
        mentorship, and the ability to help others grow within the Dev Launchers
        community. 𝗜𝗳 𝗮𝗰𝗰𝗲𝗽𝘁𝗲𝗱 𝗶𝗻𝘁𝗼 𝘁𝗵𝗲 𝗽𝗿𝗼𝗴𝗿𝗮𝗺, 𝘆𝗼𝘂 𝘄𝗶𝗹𝗹:
        <ul>
          <li>
            Find mentorship and one-on-one help to 𝗹𝗲𝗮𝗿𝗻 𝘁𝗵𝗲 𝗯𝗮𝘀𝗶𝗰𝘀, or 𝗯𝘂𝗶𝗹𝗱
            𝗹𝗮𝗿𝗴𝗲-𝘀𝗰𝗮𝗹𝗲 𝗰𝗼𝗺𝗽𝗹𝗲𝘅 𝗽𝗿𝗼𝗷𝗲𝗰𝘁𝘀
          </li>
          <li>
            {" "}
            𝗚𝗮𝗶𝗻 𝗮𝗰𝗰𝗲𝘀𝘀 𝘁𝗼 𝗼𝘂𝗿 𝗱𝗲𝘃𝗲𝗹𝗼𝗽𝗺𝗲𝗻𝘁 𝗶𝗻𝗰𝘂𝗯𝗮𝘁𝗼𝗿, where we connect people of
            all levels to promote sharing skills and knowledge while building
            things they love
          </li>
          <li>
            {" "}
            Earn access to opportunities to 𝘁𝗮𝗸𝗲 𝗼𝗻 𝗽𝗮𝗶𝗱 𝗽𝗿𝗼𝗷𝗲𝗰𝘁𝘀 𝘄𝗼𝗿𝗸𝗶𝗻𝗴
            𝗮𝗹𝗼𝗻𝗴𝘀𝗶𝗱𝗲 𝗽𝗿𝗼𝗳𝗲𝘀𝘀𝗶𝗼𝗻𝗮𝗹𝘀 building real products, or 𝗵𝗲𝗹𝗽 𝗻𝗲𝘄 𝗺𝗲𝗺𝗯𝗲𝗿𝘀
            𝗹𝗲𝗮𝗿𝗻 𝘁𝗵𝗲 𝗶𝗻𝘀 𝗮𝗻𝗱 𝗼𝘂𝘁𝘀 𝗼𝗳 𝗱𝗲𝘃𝗲𝗹𝗼𝗽𝗶𝗻𝗴 𝗶𝗻 𝗮 𝗽𝗿𝗼𝗳𝗲𝘀𝘀𝗶𝗼𝗻𝗮𝗹 𝗲𝗻𝘃𝗶𝗿𝗼𝗻𝗺𝗲𝗻𝘁
          </li>
        </ul>{" "}
        𝙔𝙤𝙪 𝙖𝙧𝙚 𝙨𝙞𝙜𝙣𝙞𝙣𝙜 𝙪𝙥 𝙛𝙤𝙧 𝙖 𝙬𝙚𝙚𝙠𝙡𝙮 𝙧𝙚𝙢𝙞𝙣𝙙𝙚𝙧 𝙚𝙢𝙖𝙞𝙡 𝙖𝙗𝙤𝙪𝙩 𝙩𝙝𝙞𝙨 𝙡𝙖𝙗.
      </div>
    </div>
  );
}
