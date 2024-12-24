import React from 'react';

// Import all SVGs from assets/tech
const svgs = require.context('/assets/tech', false, /\.svg$/);
console.log('----------------svgs')
console.log(svgs)

const Tech = () => {
  console.log('svgs', svgs.keys())
  return (
    <div className="tech-icons">
      {svgs.keys().map((key) => {
        const SvgIcon = svgs(key).default;
        return <SvgIcon key={key} className="tech-icon" />;
      })}
    </div>
  );
};

export default Tech;