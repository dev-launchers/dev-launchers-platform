// import { Theme, Progress, Box } from '@radix-ui/themes';
// import { useEffect, useState } from 'react';

// // Define props for the component, if you have any. For this example, no props are needed.
// interface LoadingProgressBarProps {
//   // You can define props here if needed. For example:
//   maxValue: number;
// }

// const LoadingProgressBar: React.FC<LoadingProgressBarProps> = () => {
//   const [progress, setProgress] = useState<number>(0);

//   useEffect(() => {
//     // Simulate a loading process
//     const timer = setInterval(() => {
//       setProgress((oldProgress) => {
//         if (oldProgress >= 100) {
//           clearInterval(timer);
//           return 100;
//         }
//         const diff = Math.random() * 10;
//         return Math.min(oldProgress + diff, 100);
//       });
//     }, 500);

//     // Cleanup on component unmount
//     return () => {
//       clearInterval(timer);
//     };
//   }, []);

//   return (
//     <>
//       <Theme>
//         <Box maxWidth="500px" duration="70s">
//           <Progress />
//         </Box>
//         <p>{Math.round(progress)}%</p>
//       </Theme>
//     </>
//   );
// };

// export default LoadingProgressBar;
import * as Progress from '@radix-ui/react-progress';
import React from 'react';

interface ProgressProps {
  backgroundColor?: string;
  width?: string;
  height?: string;
}

const ProgressDemo: React.FC<ProgressProps> = ({
  backgroundColor = '#394CAC',
  width = '100%',
  height = '100%',
}) => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((currentProgress) => {
        const newProgress = currentProgress + 20;
        if (newProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        return newProgress;
      });
    }, 500);

    return () => clearInterval(timer);
  }, []);

  const indicatorStyle = {
    transform: `translateX(-${100 - progress}%)`,
    backgroundColor: progress === 100 ? '#7339AC' : backgroundColor,
    transition: 'transform 660ms cubic-bezier(0.65, 0, 0.35, 1)',
    width,
    height,
  };

  return (
    <div>
      <Progress.Root value={progress} className="ProgressRoot">
        <Progress.Indicator style={indicatorStyle} />
      </Progress>
      <p>Progress: {progress}%</p>
    </div>
  );
};

export default ProgressDemo;
