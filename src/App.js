import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [isSpringShown, setSpringIsShown] = useState(false);
  const [isSpringSecSubTopShown, setIsSpringSecSubTopShown] = useState(false);
  const [isRegexSecSubTopShown, setIsRegexSecSubTopShown] = useState(false);
  const [isBatchSecSubTopShown, setIsBatchSecSubTopShown] = useState(false);
  const [isDevopsTopShown, setIsDevopsTopShown] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-link">
          <div className='menu-header'>
            <div className='topics' 
            onMouseEnter={() => setSpringIsShown(true)}
            onMouseLeave={() => setSpringIsShown(false)}>
              <div className='topic-name'>SPRING</div>
              {isSpringShown && (<div className='subtopics'>
                <div className='subtopic-name'
                onMouseEnter={() => setIsSpringSecSubTopShown(true)}
                onMouseLeave={() => setIsSpringSecSubTopShown(false)}>
                  <div className='subtopic-name-heading'>SPRING SECURITY</div>
                  {isSpringSecSubTopShown && (<div className='subtopics2'>
                    <div className='subtopic2-name'>BASIC CONCEPTS</div>
                    <div className='subtopic2-name'>2 FACTOR AUTH</div>
                    <div className='subtopic2-name'>OTP VIA TWILIO</div>
                    <div className='subtopic2-name'>AUTH USING JWT</div>
                    <div className='subtopic2-name'>FILTER CHAINING</div>
                    <div className='subtopic2-name'>OAUTH USING GITHUB</div>
                  </div>
                  )}
                </div>
                <div className='subtopic-name'
                onMouseEnter={() => setIsRegexSecSubTopShown(true)}
                onMouseLeave={() => setIsRegexSecSubTopShown(false)}>
                  <div className='subtopic-name-heading'>REGEX</div>
                  {isRegexSecSubTopShown && (<div className='subtopics2'>
                    <div className='subtopic2-name'>CHEETSHEET</div>
                  </div>
                  )}
                </div>
                <div className='subtopic-name'
                onMouseEnter={() => setIsBatchSecSubTopShown(true)}
                onMouseLeave={() => setIsBatchSecSubTopShown(false)}>
                  <div className='subtopic-name-heading'>SPRING BATCH</div>
                  {isBatchSecSubTopShown && (<div className='subtopics2'>
                    <div className='subtopic2-name'>TASKLET</div>
                    <div className='subtopic2-name'>BATCH JOB</div>
                  </div>
                  )}
                </div>
                <div className='subtopic-name'>
                  <div className='subtopic-name-heading'>SPRING LOGGING</div>
                </div>
                <div className='subtopic-name'>
                  <div className='subtopic-name-heading'>SWAGGER</div>
                </div>
                <div className='subtopic-name'>
                  <div className='subtopic-name-heading'>SPRING GATEWAY</div>
                </div>
                <div className='subtopic-name'>
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
                <div className='subtopic-name'>
                  <div className='subtopic-name-heading'>SERVICE DISCOVERY</div>
                </div>
                <div className='subtopic-name'>
                  <div className='subtopic-name-heading'>EXTERNALIZE CONFIG</div>
                </div>
                <div className='subtopic-name'>
                  <div className='subtopic-name-heading'>CIRCUIT BREAKER</div>
                </div>
                <div className='subtopic-name'>
                  <div className='subtopic-name-heading'>KAFKA</div>
                </div>
                <div className='subtopic-name'>
                  <div className='subtopic-name-heading'>DOCKER</div>
                </div>
                <div className='subtopic-name'>
                  <div className='subtopic-name-heading'>KUBERNATIS</div>
                </div>
                <div className='subtopic-name'>
                  <div className='subtopic-name-heading'>JENKINS</div>
                </div>
                <div className='subtopic-name'>
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

export default App;
