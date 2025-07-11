import React from 'react';
import { Typography } from '@devlaunchers/components/components/atoms';
import projectImagePath from './../../../../../../images/Onboarding/onboarding-project.png';
import networkImagePath from './../../../../../../images/Onboarding/onboarding-network.png';
import levelUpImagePath from './../../../../../../images/Onboarding/onboarding-level-up.png';
import { m } from 'framer-motion';
import Image from 'next/image';

export default function PageTwo() {
  return (
    <div className="flex flex-col gap-16 justify-center">
      <div className="flex flex-col text-center">
        <Typography textAlign="center" variant="secondary">
          ABOUT US
        </Typography>
        <Typography textweight="light" textAlign="center" type="h3">
          What is DevLaunchers?
        </Typography>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col gap-6 max-w-[560px]">
          <m.div
            transition={{ delay: 0.5, duration: 1.5 }}
            initial={{ opacity: 0, backgroundColor: '' }}
            animate={{ opacity: 1 }}
            layoutId="1"
            className="flex h-20 gap-14 items-center bg-inherit"
            style={{ zIndex: 50 }}
          >
            <Image src={networkImagePath} width="64" height="64" />
            <div className="flex flex-col gap-1">
              <Typography variant="secondary" size="body_base">
                Network With Other Developers
              </Typography>
              <Typography
                variant="secondary"
                size="body_sm"
                className="text-grayscale-500"
              >
                Expand your network, join discussions, and find opportunities.
              </Typography>
            </div>
          </m.div>

          <m.div
            transition={{ delay: 2, duration: 1.5 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ zIndex: 1 }}
            className="flex h-20 gap-14 items-center bg-inherit"
          >
            <Image src={projectImagePath} width="64" height="64" />
            <div className="flex flex-col gap-1">
              <Typography variant="secondary" size="body_base">
                Make An Impact
              </Typography>
              <Typography
                variant="secondary"
                size="body_sm"
                className="text-grayscale-500"
              >
                Join a real team and work on projects that matter to you.
              </Typography>
            </div>
          </m.div>

          <m.div
            transition={{ delay: 3.5, duration: 1.5 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex h-20 gap-14 items-center bg-inherit"
            style={{ zIndex: 1 }}
          >
            <Image src={levelUpImagePath} width="64" height="64" />
            <div className="flex flex-col gap-1">
              <Typography variant="secondary" size="body_base">
                Gain Job Experience
              </Typography>
              <Typography
                variant="secondary"
                size="body_sm"
                className="text-grayscale-500"
              >
                Build confidence to level up your career.
              </Typography>
            </div>
          </m.div>
        </div>
      </div>
    </div>
  );
}
