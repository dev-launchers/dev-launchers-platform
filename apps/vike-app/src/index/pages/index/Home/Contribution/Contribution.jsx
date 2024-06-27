import React from 'react';
import { withTheme } from 'styled-components';
import Link from 'next/link';
import FlexPageSection from '#root/components/FlexPageSection';

import {
  CtaSectionContent,
  CtaSectionDescription,
  CtaSectionButtonArea,
} from './StyledContribution';

import Button from '#root/components/Button';

import codeSnapshotImage from '#root/images/home-page/code-snapshot--white-background.jpg?webp';

function Contribution(props) {
  return (
    <FlexPageSection
      width="100%"
      height="80vh"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      backgroundImage={codeSnapshotImage}
    >
      <div className="w-4/5 h-[90%] p-8 bg-black-75 text-white mx-auto flex flex-col justify-center items-center">
        <h1 className="bg-white text-black text-center mx-auto">
          CONTRIBUTE TO OUR PROJECTS
        </h1>
        <div>
          <CtaSectionContent>
            <CtaSectionDescription>
              Everything, from our platform to our curriculum to the projects we
              develop, is released to the open source community. We rely on
              contributors to grow our platform and continue serving our
              members!
            </CtaSectionDescription>
            <CtaSectionButtonArea>
              <Link href="/projects" passHref>
                <Button fontSize="2rem">View Our Projects</Button>
              </Link>
              <Button
                fontSize="2rem"
                href="https://github.com/dev-launchers"
                target="_blank"
                bgColor={props.theme.colors.ACCENT_3}
              >
                Find Us On GitHub
              </Button>
            </CtaSectionButtonArea>
          </CtaSectionContent>
        </div>
      </div>
    </FlexPageSection>
  );
}

export default withTheme(Contribution);
