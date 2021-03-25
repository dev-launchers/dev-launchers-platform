import React from "react";

import style from "./HeroOverlay.module.css";

import Button from "../../../common/Button";
import Link from "next/link";

export default function HeroOverlay() {
  return (
    <div className={style.HeroOverlay}>
      <div className={style.Tagline}>
        Launch your imagination!
        <br />
        <Link href="/members" passHref>
          <Button
            //href="https://forms.gle/ktNmippzfYUTnwgb8"
            hero
          >
            BECOME A DEVELOPER!
          </Button>
        </Link>
      </div>
    </div>
  );
}
