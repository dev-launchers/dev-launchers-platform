import React from 'react';
import { Typography } from '@devlaunchers/components/components/atoms';
import projectImagePath from './../../../../../../images/Onboarding/onboarding-project.png';
import networkImagePath from './../../../../../../images/Onboarding/onboarding-network.png';
import levelUpImagePath from './../../../../../../images/Onboarding/onboarding-level-up.png';
import { m } from 'framer-motion'; // For animations
import Image from 'next/image'; // For optimized image rendering

/**
 * PageTwo Component
 *
 * This is the second page of the onboarding process, introducing users to
 * DevLaunchers' mission and benefits. It displays three key features with
 * animated transitions.
 *
 * @return {JSX.Element} The rendered PageTwo component.
 */
export default function PageTwo() {
  return (
    <div className="flex flex-col gap-16 justify-center">
      {/* Page header section */}
      <div className="flex flex-col text-center">
        <Typography type="p">ABOUT US</Typography>
        <Typography type="h3">What is DevLaunchers?</Typography>
      </div>

      {/* Features list section */}
      <div className="flex justify-center">
        <div className="flex flex-col gap-6 max-w-[560px]">
          {/* Feature 1: Networking */}
          <m.div
            transition={{ delay: 0.5, duration: 1.5 }} // Animation settings
            initial={{ opacity: 0 }} // Initial state
            animate={{ opacity: 1 }} // Final state
            layoutId="1" // Unique identifier for layout animation
            className="flex h-20 gap-14 items-center bg-inherit"
            style={{ zIndex: 50 }} // Ensure this element appears on top
          >
            <Image
              src={networkImagePath}
              width="64"
              height="64"
              alt="Network"
            />
            <div className="flex flex-col gap-1">
              <Typography type="pLarge">
                Network With Other Developers
              </Typography>
              <Typography type="pSmall" className="text-grayscale-500">
                Expand your network, join discussions, and find opportunities.
              </Typography>
            </div>
          </m.div>

          {/* Feature 2: Project impact */}
          <m.div
            transition={{ delay: 2, duration: 1.5 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex h-20 gap-14 items-center bg-inherit"
            style={{ zIndex: 1 }}
          >
            <Image
              src={projectImagePath}
              width="64"
              height="64"
              alt="Project Impact"
            />
            <div className="flex flex-col gap-1">
              <Typography type="pLarge">Make An Impact</Typography>
              <Typography type="pSmall" className="text-grayscale-500">
                Join a real team and work on projects that matter to you.
              </Typography>
            </div>
          </m.div>

          {/* Feature 3: Career growth */}
          <m.div
            transition={{ delay: 3.5, duration: 1.5 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex h-20 gap-14 items-center bg-inherit"
            style={{ zIndex: 1 }}
          >
            <Image
              src={levelUpImagePath}
              width="64"
              height="64"
              alt="Level Up"
            />
            <div className="flex flex-col gap-1">
              <Typography type="pLarge">Gain Job Experience</Typography>
              <Typography type="pSmall" className="text-grayscale-500">
                Build confidence to level up your career.
              </Typography>
            </div>
          </m.div>
        </div>
      </div>
    </div>
  );
}
