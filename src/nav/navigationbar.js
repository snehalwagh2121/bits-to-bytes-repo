import './navigationbar.css';
import React, { useState } from 'react';

function NavigationBar({ handleNavigationClick }) {
    const [isSpringShown, setSpringIsShown] = useState(false);
    const [isSpringSecSubTopShown, setIsSpringSecSubTopShown] = useState(false);
    const [isDevopsTopShown, setIsDevopsTopShown] = useState(false);
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-link">
            <div className='menu-header'>
              <div className='topics'
                onMouseEnter={() => setIsSpringSecSubTopShown(true)}
                onMouseLeave={() => setIsSpringSecSubTopShown(false)}>
                <div className='topic-name'>SPRING SECURITY</div>
                {isSpringSecSubTopShown && (<div className='subtopics'>
                  <div className='subtopic-name' onClick={() => handleNavigationClick('SpringSecBasics')}>
                    <div className='subtopic-name-heading'>BASIC CONCEPTS</div>
                  </div>
                  <div className='subtopic-name' onClick={() => handleNavigationClick('SpringSec2FacOauth')}>
                    <div className='subtopic-name-heading' >2 FACTOR AUTH</div>
                  </div>
                  <div className='subtopic-name' onClick={() => handleNavigationClick('SpringSecTwilioOtp')}>
                    <div className='subtopic-name-heading'>OTP VIA TWILIO</div>
                  </div>
                  <div className='subtopic-name' onClick={() => handleNavigationClick('SpringSecJwtAuth')}>
                    <div className='subtopic-name-heading'>AUTH USING JWT</div>
                  </div>
                  <div className='subtopic-name' onClick={() => handleNavigationClick('SpringSecFilterChaining')}>
                    <div className='subtopic-name-heading'>FILTER CHAINING</div>
                  </div>
                  <div className='subtopic-name' onClick={() => handleNavigationClick('SpringSecGithubOauth')}>
                    <div className='subtopic-name-heading'>OAUTH USING GITHUB</div>
                  </div>
                </div>
                )}
              </div>  
              <div className='topics' 
                onMouseEnter={() => setSpringIsShown(true)}
                onMouseLeave={() => setSpringIsShown(false)}>
                <div className='topic-name'>SPRING</div>
                {isSpringShown && (<div className='subtopics'>
                  <div className='subtopic-name' onClick={() => handleNavigationClick('RegexCheetsheet')}>
                    <div className='subtopic-name-heading'>REGEX CHEETSHEET</div>
                  </div>
                  <div className='subtopic-name' onClick={() => handleNavigationClick('SpringBatchTasklet')}>
                    <div className='subtopic-name-heading'>SPRING BATCH TASKLET</div>
                  </div>
                  <div className='subtopic-name' onClick={() => handleNavigationClick('SpringBatchJob')}>
                    <div className='subtopic-name-heading'>SPRING BATCH JOB</div>
                  </div>
                  <div className='subtopic-name' onClick={() => handleNavigationClick('SpringLogging')}>
                    <div className='subtopic-name-heading'>SPRING LOGGING</div>
                  </div>
                  <div className='subtopic-name' onClick={() => handleNavigationClick('SpringSwagger')}>
                    <div className='subtopic-name-heading'>SWAGGER</div>
                  </div>
                  <div className='subtopic-name' onClick={() => handleNavigationClick('SpringGateway')}>
                    <div className='subtopic-name-heading'>SPRING GATEWAY</div>
                  </div>
                  <div className='subtopic-name' onClick={() => handleNavigationClick('SpringMailServer')}>
                    <div className='subtopic-name-heading'>MAIL SERVER</div>
                  </div>
                </div>
                )}
              </div>
              <div className='topics'
                onMouseEnter={() => setIsDevopsTopShown(true)}
                onMouseLeave={() => setIsDevopsTopShown(false)}>
                <div className='topic-name'>DEVOPS</div>
                {isDevopsTopShown && (<div className='subtopics'>
                  <div className='subtopic-name' onClick={() => handleNavigationClick('ServiceDiscovery')}>
                    <div className='subtopic-name-heading'>SERVICE DISCOVERY</div>
                  </div>
                  <div className='subtopic-name' onClick={() => handleNavigationClick('ExternalizeConfig')}>
                    <div className='subtopic-name-heading'>EXTERNALIZE CONFIG</div>
                  </div>
                  <div className='subtopic-name' onClick={() => handleNavigationClick('CircuitBreaker')}>
                    <div className='subtopic-name-heading'>CIRCUIT BREAKER</div>
                  </div>
                  <div className='subtopic-name' onClick={() => handleNavigationClick('Kafka')}>
                    <div className='subtopic-name-heading'>KAFKA</div>
                  </div>
                  <div className='subtopic-name' onClick={() => handleNavigationClick('Docker')}>
                    <div className='subtopic-name-heading'>DOCKER</div>
                  </div>
                  <div className='subtopic-name' onClick={() => handleNavigationClick('Kubernetes')}>
                    <div className='subtopic-name-heading'>KUBERNETES</div>
                  </div>
                  <div className='subtopic-name' onClick={() => handleNavigationClick('Jenkins')}>
                    <div className='subtopic-name-heading'>JENKINS</div>
                  </div>
                  <div className='subtopic-name' onClick={() => handleNavigationClick('Monitoring')}>
                    <div className='subtopic-name-heading'>MONITORING</div>
                  </div>
                </div>
                )}
              </div>  
              <div className='topics'>
                <div className='topic-name'>PROJECTS</div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
}

export default NavigationBar;