import * as Progress from '@radix-ui/react-progress';
import React from 'react';
import { tv } from 'tailwind-variants';

interface ProgressProps {
  startColor?: string;
  endColor?: string;
  backgroundColor?: string;
  width?: string;
  height?: string;
}

const ProgressBar: React.FC<ProgressProps> = ({
  startColor = '#394CAC',
  endColor = '#7339AC',
  backgroundColor = '#F0EDEE',
  width = '332px',
  height = '25px',
}) => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((currentProgress) => {
        const newProgress = currentProgress + 5;
        if (newProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        return newProgress;
      });
    }, 500);

    return () => clearInterval(timer);
  }, []);
  const currentColor = progress >= 95 ? endColor : startColor;
  const indicatorStyle = {
    height: '100%',
    backgroundColor: `${currentColor}`,
    width: `${progress}%`,
  };

  // const progressClass = progress === 100 ? endColor : startColor;

  return (
    <>
      <Progress.Root
        className="rounded-2xl relative overflow-hidden"
        style={{
          width,
          height,
          backgroundColor,
        }}
        value={progress}
      >
        <Progress.Indicator
          style={indicatorStyle}
          className="transition-width duration-500 ease-in-out"
        />
      </Progress.Root>
      <p>Progress: {progress}%</p>
    </>
  );
};

export default ProgressBar;
