import React from 'react';
import Header from './Header';

const App = ({ children }) => (
  <div>
    <Header />
    <div>
      {children || 'Welcome to React Starterify'}
    </div>
  </div>
);

App.propTypes = { children: React.PropTypes.object };

export default App;
