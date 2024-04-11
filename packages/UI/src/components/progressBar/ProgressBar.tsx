import * as Progress from '@radix-ui/react-progress';
import React from 'react';

interface ProgressProps {
  /** The starting color of the progress bar. */
  startColor: string;
  /** The color of the progress bar when progress is complete. */
  endColor: string;
  /** The background color of the progress bar container. */
  backgroundColor: string;
  /** The width of the progress bar. Can be any TailwindCSS valid value. */
  width: string;
  /**
   * The height of the progress bar. Can be any TailwindCSS valid value.
   */
  height: string;
  /**
   * Progress value passed as a prop
   */
  progress: number;
}
/** Defines the properties for the ProgressBar component */
const ProgressBar: React.FC<ProgressProps> = ({
  startColor,
  endColor,
  backgroundColor,
  width,
  height,
  progress,
}) => {
  const currentColor = progress >= 95 ? endColor : startColor;
  const indicatorStyle = {
    width: `${progress}%`,
  };

  return (
    <>
      <Progress.Root
        aria-labelledby="loadinglabel"
        className={`relative overflow-hidden rounded-2xl ${backgroundColor} ${width} ${height}`}
        value={progress}
      >
        <Progress.Indicator
          style={indicatorStyle}
          // eslint-disable-next-line tailwindcss/no-custom-classname
          className={`transition-width duration-500 ease-in-out ${currentColor} h-full`}
        />
      </Progress.Root>
      <span>Progress: {progress}%</span>
    </>
  );
};

export default ProgressBar;
