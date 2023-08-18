import './App.css';
import React, { useState } from 'react';
import NavigationBar from './nav/navigationbar'; 
import SpringBasics from './springsec/basics';
import SpringSec2FacOauth from './springsec/twofacauth';
import SpringSecTwilioOtp from './springsec/twiliootp';
import SpringSecJwtAuth from './springsec/jwtauth';
import SpringSecFilterChaining from './springsec/filterchaining';
import SpringSecGithubOauth from './springsec/githubauth';

import RegexCheetsheet from './spring/regexCheetsheet';
import SpringBatchJob from './spring/springBatchJob';
import SpringBatchTasklet from './spring/springbatchTasklet';
import SpringGateway from './spring/springGateway';
import SpringLogging from './spring/springLogging';
import SpringMailServer from './spring/springMailServer';
import SpringSwagger from './spring/springSwagger';

import ServiceDiscovery from './devops/serviceDiscovery';
import ExternalizeConfig from './devops/externalizeConfig';
import CircuitBreaker from './devops/circuitBreaker';
import Kafka from './devops/kafka';
import Docker from './devops/docker';
import Kubernatis from './devops/kubernatis';
import Jenkins from './devops/jenkins';
import Monitoring from './devops/monitoring';

function App() {
  const [selectedNavItem, setSelectedNavItem] = useState('SpringSecBasics');

  const handleNavigationClick = (navItem) => {
    setSelectedNavItem(navItem);
  };

  return (
    <div className='outlinePage'>
      <NavigationBar handleNavigationClick={handleNavigationClick} />

      {/* Render the text based on the selected navigation item */}
      <div>
        {selectedNavItem === 'SpringSecBasics' && <SpringBasics /> }
        {selectedNavItem === 'SpringSec2FacOauth' && <SpringSec2FacOauth />}
        {selectedNavItem === 'SpringSecTwilioOtp' && <SpringSecTwilioOtp />}
        {selectedNavItem === 'SpringSecJwtAuth' && <SpringSecJwtAuth />}
        {selectedNavItem === 'SpringSecFilterChaining' && <SpringSecFilterChaining />}
        {selectedNavItem === 'SpringSecGithubOauth' && <SpringSecGithubOauth />}

        {selectedNavItem === 'RegexCheetsheet' && <RegexCheetsheet /> }
        {selectedNavItem === 'SpringBatchTasklet' && <SpringBatchTasklet />}
        {selectedNavItem === 'SpringBatchJob' && <SpringBatchJob />}
        {selectedNavItem === 'SpringLogging' && <SpringLogging />}
        {selectedNavItem === 'SpringSwagger' && <SpringSwagger />}
        {selectedNavItem === 'SpringGateway' && <SpringGateway />}
        {selectedNavItem === 'SpringMailServer' && <SpringMailServer />}

        {selectedNavItem === 'ServiceDiscovery' && <ServiceDiscovery /> }
        {selectedNavItem === 'ExternalizeConfig' && <ExternalizeConfig />}
        {selectedNavItem === 'CircuitBreaker' && <CircuitBreaker />}
        {selectedNavItem === 'Kafka' && <Kafka />}
        {selectedNavItem === 'Docker' && <Docker />}
        {selectedNavItem === 'Kubernatis' && <Kubernatis />}
        {selectedNavItem === 'Jenkins' && <Jenkins />}
        {selectedNavItem === 'Monitoring' && <Monitoring />}
      </div>
    </div>
  );
}

export default App;
