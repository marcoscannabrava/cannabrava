import React from 'react';
import * as SVGs from '/assets/tech'

const Tech = () => {
  console.log('svgs', SVGs)
  console.log(Object.keys(SVGs))
  return (
    <div className="tech-icons">
      {Object.keys(SVGs).map((key) =>
        typeof SVGs[key] === 'function' ?
          <div style={{width: '50px', height: '50px'}} key={key}>
            {SVGs[key]({title: key, height: '100%', width: '100%'})}
          </div>
          : null
      )}
    </div>
  );
};

export default Tech;