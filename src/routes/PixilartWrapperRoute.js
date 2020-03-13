import React from "react";
import { useParams } from "react-router-dom";

import PixilartWrapper from "../components/modules/PixilartWrapper";

export default function PixilartWrapperRoute() {
  let { imageIdentifier } = useParams();

  return (
    <div>
      <PixilartWrapper imageIdentifier={imageIdentifier} />
    </div>
  );
}
