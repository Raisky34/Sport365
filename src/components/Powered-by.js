import React from 'react';
import { dependencies, devDependencies } from '../../package.json';

const PoweredBy = () => {
  const deps = Object.keys(dependencies)
    .map((dep, i) => <li key={i}>{dep}</li>);
  const devDeps = Object.keys(devDependencies)
    .map((dep, i) => <li key={i + 10}>{dep}</li>);

  return (
    <div>
      <ul>
        {[...deps, ...devDeps]}
      </ul>
    </div>
  );
};

export default PoweredBy;
