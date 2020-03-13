import React from "react";
import Card from "../Card/Card";
import style from "./CardGroup.module.css";

export default function CardGroup(props) {
  return (
    <div>
      <h3 className={style.collectionTitle}>{props.title}</h3>
      <div className={style.collection}>
        {Object.keys(props.data).length != 0 &&
          props.data.map((items, i) => {
            return (
              <Card
                data={items}
                key={i}
                size={props.size}
                attachment={props.attachment}
              />
            );
          })}
      </div>
    </div>
  );
}
