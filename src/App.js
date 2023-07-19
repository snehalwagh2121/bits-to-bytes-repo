import './App.css';
import React, { useState } from 'react';
import NavigationBar from './nav/navigationbar'; 
import SpringBasics from './springsec/basics';
import SpringSec2FacOauth from './springsec/twofacauth';
import SpringSecTwilioOtp from './springsec/twiliootp';
import SpringSecJwtAuth from './springsec/jwtauth';
import SpringSecFilterChaining from './springsec/filterchaining';
import SpringSecGithubOauth from './springsec/githubauth';

function App() {
  const [selectedNavItem, setSelectedNavItem] = useState('SpringSecBasics');

  const handleNavigationClick = (navItem) => {
    setSelectedNavItem(navItem);
  };

  return (
    <div>
      <NavigationBar handleNavigationClick={handleNavigationClick} />

      {/* Render the text based on the selected navigation item */}
      <div>
        {selectedNavItem === 'SpringSecBasics' && <SpringBasics /> }
        {selectedNavItem === 'SpringSec2FacOauth' && <SpringSec2FacOauth />}
        {selectedNavItem === 'SpringSecTwilioOtp' && <SpringSecTwilioOtp />}
        {selectedNavItem === 'SpringSecJwtAuth' && <SpringSecJwtAuth />}
        {selectedNavItem === 'SpringSecFilterChaining' && <SpringSecFilterChaining />}
        {selectedNavItem === 'SpringSecGithubOauth' && <SpringSecGithubOauth />}
      </div>
    </div>
  );
}

export default App;
