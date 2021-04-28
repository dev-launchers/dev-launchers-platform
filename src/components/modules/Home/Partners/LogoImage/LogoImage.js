import React from "react";
import { PartnerEntry, PartnerEntryImage } from "./StyledLogoImage";

function LogoImage(props) {
  return (
    <PartnerEntry>
      <a href={props.href} target="_blank">
        <PartnerEntryImage width={props.width} src={props.src} />
      </a>
    </PartnerEntry>
  );
}

export default LogoImage;
