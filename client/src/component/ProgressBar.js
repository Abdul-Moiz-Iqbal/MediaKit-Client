import React from 'react';

const ProgressBar = ({ progress = 20,color }) => {
  // Ensure progress is within 0-100 range
  const normalizedProgress = Math.min(Math.max(progress, 0), 100);
  

  return (
    <div className="w-[247px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
      <div className={`h-2.5 rounded-full ${color} w-[${normalizedProgress}%]`} style={{ width: `${normalizedProgress}%` }}></div>
    </div>
  );
};

export default ProgressBar;