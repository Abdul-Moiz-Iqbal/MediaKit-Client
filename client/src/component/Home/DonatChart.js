import React from 'react';

const DonutChart = ({data}) => {
  

  const radius = 100;
  const circumference = 2 * Math.PI * radius;
  let cumulativePercentage = -0.5; // Start at -25% to place the first segment at the top

  const getCoordinatesForPercent = (percent) => {
    const x = Math.cos(2 * Math.PI * percent) * radius;
    const y = Math.sin(2 * Math.PI * percent) * radius;
    return [x, y];
  };

  return (
    <svg width="96" height="96" viewBox="-125 -125 250 250" >
      {data.map((slice, index) => {
        const [startX, startY] = getCoordinatesForPercent(cumulativePercentage);
        cumulativePercentage += slice.percentage / 100;
        const [endX, endY] = getCoordinatesForPercent(cumulativePercentage);

        const largeArcFlag = slice.percentage / 100 > 0.5 ? 1 : 0;

        const pathData = [
          `M ${startX} ${startY}`, // Move
          `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}`, // Arc
          `L 0 0`, // Line
        ].join(' ');

        return <path d={pathData} fill={slice.color} key={index} />;
      })}
      <circle cx="0" cy="0" r="65" fill="white" />
      
    </svg>
  );
};

export default DonutChart;
