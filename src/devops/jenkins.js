import React from 'react';
import '../springsec/basics.css';
import configChangeToCmd from './images/jenkins/configChangeToCmd.PNG';
import configureTestProject from './images/jenkins/configureTestProject.PNG';
import giveName from './images/jenkins/giveName.PNG';
import hitBuildNow from './images/jenkins/hitBuildNow.PNG';
import newItem from './images/jenkins/newItem.PNG';
import passedBuild from './images/jenkins/passedBuild.PNG';
import seeConsoleLogs from './images/jenkins/seeConsoleLogs.PNG';
import failedJobLogs from './images/jenkins/failedJobLogs.PNG';

function Jenkins() {
    return (
        <div className='main-page'>
            <div className="page-heading">JENKINS</div>
            <div className='page-content'>
                <div className='heading-2'>Download and install Jenkins</div>
                <div className='section-content'>
                    <div className='heading 4'>
                        <p><span>Here is a very detailed documentation for downlaoding and installing jenkins in you local system: <a href='https://www.guru99.com/download-install-jenkins.html'>https://www.guru99.com/download-install-jenkins.html</a></span></p>
                    </div>
                </div>
                <div className='heading-2'>Getting started with Jenkins</div>
                <div className='section-content'>
                    <div className='heading 4'>
                        <p><span>After installing Jenkins, we can create a new Project : </span></p>
                        <p><span ><img className='sec-image' src={newItem} alt='newItem'  /></span></p>
                        <p><span>Provide a name to the project : </span></p>
                        <p><span ><img className='sec-image' src={giveName} alt='giveName'  /></span></p>
                        <p><span>Configure the project to build. We can execute commands while the build is running inthe Build Environment section. Also we can provide Gt confi in the Source Code management section. We will learn about this more in the next section : </span></p>
                        <p><span ><img className='sec-image' src={configureTestProject} alt='configureTestProject'  /></span></p>
                        <p><span>After saving the config, lets build the project using the build now option : </span></p>
                        <p><span ><img className='sec-image' src={hitBuildNow} alt='hitBuildNow'  /></span></p>
                        <p><span>We see that the build has failed. Lets see the logs to find out more about the failed job. To see logs, click on the build and then go to Console Output section : </span></p>
                        <p><span ><img className='sec-image' src={failedJobLogs} alt='failedJobLogs'  /></span></p>
                        <p><span>From logs we can conclude that the build failed as it was not able to execute the echo command. Which makes sense as I am using windows. So lets change the config to Execute Windows batch command instead of Execute Shell   : </span></p>
                        <p><span ><img className='sec-image' src={configChangeToCmd} alt='configChangeToCmd'  /></span></p>
                        <p><span>Lets build again and we see the build passes : </span></p>
                        <p><span ><img className='sec-image' src={passedBuild} alt='passedBuild'  /></span></p>
                        <p><span>Lets see logs : </span></p>
                        <p><span ><img className='sec-image' src={seeConsoleLogs} alt='seeConsoleLogs'  /></span></p>
                        <p><span>The build is echoing our statement.</span></p>
                    </div>
                </div>
            </div>
        </div>    
        );
}

export default Jenkins;