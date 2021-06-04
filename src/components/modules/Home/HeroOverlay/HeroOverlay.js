import React from "react";
import FlexPageSection from "../../../../components/common/FlexPageSection";

import Button from "../../../common/Button";
import Link from "next/link";
import {
  Tagline,
  Wrapper,
  MessageArea,
  ImageArea,
  Image
} from "./StyledHeroOverlay";

import manGlassesImage from "../../../../images/people-cutouts/man-glasses.png";

function TypewriterEffect(props) {
  const [initialText, setInitialText] = React.useState(props.children);
  const [text, setText] = React.useState("");

  React.useEffect(() => {
    let characterIndex = -1;
    // Delay typing by 1 second
    setTimeout(() => {
      // Begin typing
      let interval = setInterval(() => {
        if (characterIndex < initialText.length) {
          characterIndex++;
          setText(initialText.substring(0, characterIndex));
        } else {
          clearInterval(interval);
        }
      }, 50);
    }, 1000);
  }, []);

  return <>>{text}█</>;
}

export default function HeroOverlay() {
  return (
    <FlexPageSection>
      <Wrapper>
        <MessageArea>
          <Tagline>
            <TypewriterEffect>
              We build world changing software while preparing people to thrive
              in technical careers
            </TypewriterEffect>
          </Tagline>
        </MessageArea>
        <ImageArea>
          <Image src={manGlassesImage} />
          {/*}
          <Link href="/members" passHref>
            <Button
              //href="https://forms.gle/ktNmippzfYUTnwgb8"
              hero
              style={{ position: "absolute", bottom: "10%" }}
            >
              BECOME A DEVELOPER!
            </Button>
          </Link>
          {*/}
        </ImageArea>
      </Wrapper>
    </FlexPageSection>
  );
}
