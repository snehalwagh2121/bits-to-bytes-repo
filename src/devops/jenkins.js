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
import addMavenInJenkins from './images/jenkins/addMavenInJenkins.PNG';
import buildPassed from './images/jenkins/buildPassed.PNG';
import exceptionWhenExecutingShell from './images/jenkins/exceptionWhenExecutingShell.PNG';
import gitHibConfigJenkins from './images/jenkins/gitHibConfigJenkins.PNG';
import githubLinkConfig from './images/jenkins/githubLinkConfig.PNG';
import gitRepo from './images/jenkins/gitRepo.PNG';
import jenkinsIntegrationProject from './images/jenkins/jenkinsIntegrationProject.PNG';
import pipelineModifyToBat from './images/jenkins/pipelineModifyToBat.PNG';
import pipelineScript from './images/jenkins/pipelineScript.PNG';
import pipelineScriptGenerated from './images/jenkins/pipelineScriptGenerated.PNG';
import pipelineSyntax from './images/jenkins/pipelineSyntax.PNG';
import springDependency from './images/jenkins/springDependency.PNG';
import springEndpoint from './images/jenkins/springEndpoint.PNG';
import ToolsJenkins from './images/jenkins/ToolsJenkins.PNG';
import addStepToBuildDOcker from './images/jenkins/addStepToBuildDOcker.PNG';
import dockerFile from './images/jenkins/dockerFile.PNG';
import dockerImageCreated from './images/jenkins/dockerImageCreated.PNG';
import dockerBuildSuccess from './images/jenkins/dockerBuildSuccess.PNG';
import dockerHubPwtdSyntax from './images/jenkins/dockerHubPwtdSyntax.PNG';
import dockerhubPwdser from './images/jenkins/dockerhubPwdser.PNG';
import creadentialScriptGenerated from './images/jenkins/creadentialScriptGenerated.PNG';
import dockerPushStage from './images/jenkins/dockerPushStage.PNG';
import successBuildDOckerPush from './images/jenkins/successBuildDOckerPush.PNG';
import imageInDockerHub from './images/jenkins/imageInDockerHub.PNG';
import jenkinsFileConfig from './images/jenkins/jenkinsFileConfig.PNG';
import createJenkinsFileProj from './images/jenkins/createJenkinsFileProj.PNG';

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
                <div className='heading-2'>Integrating Spring Boot Project with Jenkins</div>
                <div className='section-content'>
                    <div className='heading 4'>
                        <p><span>Create a new SPring boot project with following dependencies and expose a demo endpoint : </span></p>
                        <p><span ><img className='sec-image' src={springDependency} alt='springDependency'  /></span></p>
                        <p><span ><img className='sec-image' src={springEndpoint} alt='springEndpoint'  /></span></p>
                        <p><span>Now commit this code to a git repo : </span></p>
                        <p><span ><img className='sec-image' src={gitRepo} alt='gitRepo'  /></span></p>
                        <p><span>Since maven in required, we'll have to install it in our jenkins. For that you need to go to Manage Jenkins - Tools </span></p>
                        <p><span ><img className='sec-image' src={ToolsJenkins} alt='ToolsJenkins'  /></span></p>
                        <p><span>Then scroll down to find Maven and update: </span></p>
                        <p><span ><img className='sec-image' src={addMavenInJenkins} alt='addMavenInJenkins'  /></span></p>
                        <p><span>Now lets create a new project in jenkins to link our github repo: </span></p>
                        <p><span ><img className='sec-image' src={jenkinsIntegrationProject} alt='jenkinsIntegrationProject'  /></span></p>
                        <p><span>In config provide github repo url : </span></p>
                        <p><span ><img className='sec-image' src={gitHibConfigJenkins} alt='gitHibConfigJenkins'  /></span></p>
                        <p><span>Now we need to provide pipeline commands which will checkout our git repo and build the project. For that, lets click on pipeline script which will generate the script for us : </span></p>
                        <p><span ><img className='sec-image' src={pipelineSyntax} alt='pipelineSyntax'  /></span></p>
                        <p><span>In Sample step, choose checkout: Check out from version Control, Provide the github repo url, set credentials if your repo is private, Provide the branch name </span></p>
                        <p><span ><img className='sec-image' src={githubLinkConfig} alt='githubLinkConfig'  /></span></p>
                        <p><span>Now click on generate pipeline script and copy the script generated.</span></p>
                        <p><span ><img className='sec-image' src={pipelineScriptGenerated} alt='pipelineScriptGenerated'  /></span></p>
                        <p><span>Now create the script like below, in tools provide the maven name you created before. In stages paste the pipeline script we generated from pipeline syntax and provide mvn clean install command.</span></p>
                        <p><span ><img className='sec-image' src={pipelineScript} alt='pipelineScript'  /></span></p>
                        <p><span>But when we build the project, we get exception. This is because I am using windows and i have provided sh command in pipleine script which is linux based. So i need to modify it to bat command.</span></p>
                        <p><span ><img className='sec-image' src={exceptionWhenExecutingShell} alt='exceptionWhenExecutingShell'  /></span></p>
                        <p><span ><img className='sec-image' src={pipelineModifyToBat} alt='pipelineModifyToBat'  /></span></p>
                        <p><span>Now when we build the project, the build is passed.</span></p>
                        <p><span ><img className='sec-image' src={buildPassed} alt='buildPassed'  /></span></p>
                    </div>
                </div>
                <div className='heading-2'>Create Docker Images and Push to DOcker Hub from Jenkins</div>
                <div className='section-content'>
                    <div className='heading 4'>
                        <p><span>Now moving forward, wouldnt it be cool to automate docker building and docker push to docker hub. Well sounds interesting to me, so lets see how its done. </span></p>
                        <p><span>Well lets first start our docker desktop and create a docker file in our project. Then push these changes to our github repo and build the project so that the jar is created. </span></p>
                        <p><span ><img className='sec-image' src={dockerFile} alt='dockerFile'  /></span></p>
                        <p><span ><img className='sec-image' src={addStepToBuildDOcker} alt='addStepToBuildDOcker'  /></span></p>
                        <p><span>Lets build the jenkins project and see whether the image is built or not. </span></p>
                        <p><span ><img className='sec-image' src={dockerBuildSuccess} alt='dockerBuildSuccess'  /></span></p>
                        <p><span ><img className='sec-image' src={dockerImageCreated} alt='dockerImageCreated'  /></span></p>
                        <p><span>Lets write script to push this docker image to our docker hub. For that we would have to login to docker so that jenkins can access our dockerhub. Lets use pipeline syntax to use the creadentials. </span></p>
                        <p><span>Lets click on pipeline syntax in Configuration window and select sample step as withCredentials: Bind Credentials to variables, select secret text in Bindings and provide variable name. Now click on Add ans select Jenkins from the dropdown: </span></p>
                        <p><span ><img className='sec-image' src={dockerHubPwtdSyntax} alt='dockerHubPwtdSyntax'  /></span></p>
                        <p><span>Then in the new popup, select kind as Secret text,  put your dockerHub password in Secret and provide some id: </span></p>
                        <p><span ><img className='sec-image' src={dockerhubPwdser} alt='dockerhubPwdser'  /></span></p>
                        <p><span>Click on Add and then click on Generate Pipeline Script. Copy this script and append in our pipeline scripts: </span></p>
                        <p><span ><img className='sec-image' src={creadentialScriptGenerated} alt='creadentialScriptGenerated'  /></span></p>
                        <p><span>Now that we have script to use crentials via variables, lets write script for docker login and docker push : </span></p>
                        <p><span ><img className='sec-image' src={dockerPushStage} alt='dockerPushStage'  /></span></p>
                        <p><span>Lets build and see if the image is pushed to our docker hub : </span></p>
                        <p><span ><img className='sec-image' src={successBuildDOckerPush} alt='successBuildDOckerPush'  /></span></p>
                        <p><span ><img className='sec-image' src={imageInDockerHub} alt='imageInDockerHub'  /></span></p>
                        <p><span>Now instead of writing the scripts in the jenkins, we can create a jekins file in our project as let Jenks execute it instead. </span></p>
                        <p><span ><img className='sec-image' src={createJenkinsFileProj} alt='createJenkinsFileProj'  /></span></p>
                        <p><span ><img className='sec-image' src={jenkinsFileConfig} alt='jenkinsFileConfig'  /></span></p>
                    </div>
                </div>
            </div>
        </div>    
        );
}

export default Jenkins;