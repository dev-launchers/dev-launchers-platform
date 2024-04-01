import React from 'react';
import ProgressDemo from '../../../../packages/UI/src/components/progressBar/LoadingProgressBar';

const ProgressPage: React.FC = () => {
  return (
    <div>
      <h1>My Progress</h1>
      <ProgressDemo />
    </div>
  );
};

export default ProgressPage; // Only one default export per file