import React from "react";
import { PartnerEntry, PartnerEntryImage } from "./StyledLogoImage";

function LogoImage(props) {
  return (
    <PartnerEntry>
      <a href={props.href} target="_blank" rel="noreferrer">
        <PartnerEntryImage width={props.width} src={props.src} />
      </a>
    </PartnerEntry>
  );
}

export default LogoImage;
