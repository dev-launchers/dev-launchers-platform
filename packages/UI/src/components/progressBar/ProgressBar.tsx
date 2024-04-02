import * as Progress from '@radix-ui/react-progress';
import React from 'react';
import './styles.css';

interface ProgressProps {
  backgroundColor?: string;
  width?: string;
  height?: string;
}

const ProgressBar: React.FC<ProgressProps> = ({
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
      {/* ! The issue is down below */}
      {/* <Progress.Root className="ProgressRoot" value={progress}>
      <Progress.Indicator
        className="ProgressIndicator"
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />
      </Progress.Root>
  );
};
 */}
      <p>Progress: {progress}%</p>
    </div>
  );
};

export default ProgressBar;
