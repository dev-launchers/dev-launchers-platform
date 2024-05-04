import * as ProgressPrimitive from '@radix-ui/react-progress';
import * as React from 'react';
import { cn } from '../../utils/classesMerger';
import Clock from './../../assets/icons/Clock';
import Done from './../../assets/icons/Done';

const styles = {
  startColor: 'bg-brand-alt-cosmic-500',
  endColor: 'bg-brand-alt-nebula-500',
  backgroundColor: 'bg-grayscale-100',
  width: 'w-80',
  height: 'h-6',
  textColor: 'text-grayscale-900',
  font: 'font-normal',
  fontStyle: 'not-italic',
  flex: 'flex',
  flexDirection: 'flex-col',
  alignItems: 'items-start',
  justifyContent: 'justify-between',
  indigo: 'bg-indigo-500',
};

interface ProgressProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  /**
   * Progress value passed as a prop
   */
  progress: number;
  /**
   * It is used to uniquely identify the name of the file
   */
  fileName: string;
  /**
   * You can choose whether to show the clock or not
   */
  toggleClock: boolean; // This prop now controls both icons.
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(
  (
    { className, fileName = 'name your file', progress, toggleClock, ...props },
    ref
  ) => {
    const isComplete = progress === 100;
    const currentColor = isComplete ? styles.endColor : styles.startColor;
    const progressPercentage = `${progress}%`;
    const icon = toggleClock ? isComplete ? <Done /> : <Clock /> : null;

    return (
      <div
        className={`${styles.flex} ${styles.flexDirection} ${styles.alignItems} gap-14 rounded-lg p-4`}
      >
        <div
          className={`${styles.flex} ${styles.width} ${styles.flexDirection} ${styles.alignItems} gap-3`}
        >
          <div className={`${styles.flex} w-full ${styles.justifyContent}`}>
            <p
              className={`text-base ${styles.font} ${styles.fontStyle} leading-6 ${styles.textColor}`}
            >
              {fileName}
            </p>
            <div className={`${styles.flex} ${styles.justifyContent} gap-2`}>
              <p
                className={`text-xs ${styles.font} ${styles.fontStyle} leading-5 ${styles.textColor}`}
              >
                {progressPercentage}
              </p>
              {icon}
            </div>
          </div>
          <ProgressPrimitive.Root
            ref={ref}
            className={cn(
              `relative ${styles.width} ${styles.height} overflow-hidden rounded-full ${styles.backgroundColor} border-solid border-2 border-brand-alt-cosmic-500`,
              className
            )}
            {...props}
          >
            <ProgressPrimitive.Indicator
              className={`h-full w-full flex-1 ${currentColor} transition-all`}
              style={{ transform: `translateX(-${100 - progress}%)` }}
            />
          </ProgressPrimitive.Root>
        </div>
      </div>
    );
  }
);

Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
