import * as Progress from '@radix-ui/react-progress';
import React from 'react';

interface ProgressProps {
  /**
   * Progress value passed as a prop
   */
  progress: number;
  /**
   * the theme prop controls the appearance based on predefined styles in a themes object.
   */
  theme: 'light';
}
/** Defines the properties for the ProgressBar component */
const ProgressBar: React.FC<ProgressProps> = ({
  // backgroundColor,
  progress,
  theme = 'light',
}) => {
  const themes = {
    light: {
      /** The background color of the progress bar container. */
      backgroundColor: 'bg-gray-300',
      /** The starting color of the progress bar. */
      startColor: 'bg-indigo-700',
      /** The color of the progress bar when progress is complete. */
      endColor: 'bg-purple-600',
      /** The width of the progress bar. Can be any TailwindCSS valid value. */
      width: 'w-80',
      /**
       * The height of the progress bar. Can be any TailwindCSS valid value.
       */
      height: 'h-6',
    },
  };
  const { startColor, endColor, width, height } = themes[theme];
  const currentColor = progress >= 95 ? endColor : startColor;
  const indicatorStyle = {
    width: `${progress}%`,
  };

  return (
    <>
      <Progress.Root
        aria-labelledby="loadinglabel"
        className={`relative overflow-hidden rounded-2xl ${width} ${height}`}
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
