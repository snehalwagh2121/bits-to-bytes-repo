import React from 'react';
import './basics.css';
import dependencyImage from './images/oauth/dependency.PNG';
import githubOauthApps from './images/oauth/githubOauthApps.PNG';
import clientIdClientSecret from './images/oauth/clientIdClientSecret.PNG';
import properties from './images/oauth/properties.PNG';
import projectConfig from './images/oauth/projectConfig.PNG';
import controller from './images/oauth/controller.PNG';
import login from './images/oauth/login.PNG';
import githubLogin from './images/oauth/githubLogin.PNG';
import permissionToAuthorize from './images/oauth/permissionToAuthorize.PNG';
import redirectingToOurApp from './images/oauth/redirectionToOurApp.PNG';
import authenticationSuccess from './images/oauth/authenticationsuccess.PNG';


function githubAuth() {
    return (
        <div className='main-page'>
            <div className="page-heading">SPRING SEC GITHUB OAUTH</div>
            <div className='page-content'>
                <div className='heading-2'>CREATE A SAMPLE PROJECT</div>
                <div className='section-content'>
                    <div className='heading-4'>
                        <p><span>We can create a new spring project from site: <a href='https://start.spring.io'>start.spring.io</a> witht the following dependency: </span></p>
                        <p><span ><img className='sec-image' src={dependencyImage} alt='dependency'  /></span></p>
                        <p><span>We need to create OAuth app in github. under SETTINGS - developer settings - OAuth Apps -New OAuth App </span></p>
                        <p><span ><img className='sec-image' src={githubOauthApps} alt='githubOauthApps'  /></span></p>
                        <p><span>After creating the OAuth app we need to generate a new client-secret</span></p>
                        <p><span ><img className='sec-image' src={clientIdClientSecret} alt='clientIdClientSecret'  /></span></p>
                        <p><span>Lets specify the clientId and clientsecret in out application properties</span></p>
                        <p><span ><img className='sec-image' src={properties} alt='properties'  /></span></p>
                        <p><span>Our controller class with test endpoint</span></p>
                        <p><span ><img className='sec-image' src={controller} alt='controller'  /></span></p>
                        <p><span>Lets specify OAuth login in our configuration</span></p>
                        <p><span ><img className='sec-image' src={projectConfig} alt='projectConfig'  /></span></p>
                        <p><span>Lets test the application. when we hit the test/hello endpoint we'll get a page to put username/password if we have or else login with github </span></p>
                        <p><span ><img className='sec-image' src={login} alt='login'  /></span></p>
                        <p><span>After selecting github login, we'll be redirected to github login page or if we have already logged in session with github we'll get a prompt to authorize the app.</span></p>
                        <p><span ><img className='sec-image' src={githubLogin} alt='githubLogin'  /></span></p>
                        <p><span ><img className='sec-image' src={permissionToAuthorize} alt='permissionToAuthorize'  /></span></p>
                        <p><span>After successful authentication, we'll be redirected to our application endpoint: </span></p>
                        <p><span ><img className='sec-image' src={redirectingToOurApp} alt='redirectingToOurApp'  /></span></p>
                        <p><span ><img className='sec-image' src={authenticationSuccess} alt='authenticationSuccess'  /></span></p>
                    </div>
                </div>
            </div>
        </div>        
        );
}

export default githubAuth;