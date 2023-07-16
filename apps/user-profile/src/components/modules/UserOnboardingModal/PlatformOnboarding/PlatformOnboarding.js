import { useEffect } from 'react';
import Stepper from '../../../../components/common/Stepper';
import PageTwo from './PageTwo/PageTwo';

export default function PlatformOnboarding() {
  const stepperConfig = [
    {
      component: <p>Step 1</p>,
      config: {
        buttons: {
          next: {
            label: 'Next',
            useDefaultOnClick: true,
            onClick: () => {
              console.log('..some function ');
            },
          },
          back: {
            label: 'Back',
            useDefaultOnClick: true,
            onClick: () => {
              console.log('..some function ');
            },
          },
        },
      },
    },
    {
      component: <PageTwo />,
      config: {
        buttons: {
          next: {
            label: 'Next',
            useDefaultOnClick: true,
          },
          back: {
            label: 'Back',
            useDefaultOnClick: true,
          },
        },
      },
    },
    {
      component: <p>Step 3</p>,
      config: {
        buttons: {
          next: {
            label: 'Finish',
            useDefaultOnClick: true,
            onClick: () => {
              console.log('..some function ');
            },
          },
          back: {
            label: 'Back',
            useDefaultOnClick: true,
            onClick: () => {
              console.log('..some function ');
            },
          },
        },
      },
    },
  ];

  // useEffect(()=>{console.log(stepperConfig, "PLATFORM")});
  return (
    <>
      <Stepper steps={stepperConfig} />
    </>
  );
  // return(<> <Stepper /> </>);
}
