import React from 'react';
import '../springsec/basics.css';
import appPasswords from './images/mail/appPasswords.PNG';
import controller from './images/mail/controller.PNG';
import dependency from './images/mail/dependency.PNG';
import gamil2StepVerification from './images/mail/gmail2StepVerification.PNG';
import logicToSendMail from './images/mail/logicTosendMail.PNG';
import mailLogs from './images/mail/mailLogs.PNG';
import mailProperties from './images/mail/mailProperties.PNG';
import mailReceived from './images/mail/mailReceived.PNG';
import messagePojo from './images/mail/messagePojo.PNG';
import newAppPassword from './images/mail/newAppPassword.PNG';
import postmanRequest from './images/mail/postmanRequest.PNG';

function SpringMailServer() {
    return (
        <div className='main-page'>
        <div className="page-heading">SPRING MAIL SERVER</div>
        <div className='page-content'>
            <div className='heading-2'>CREATE A SAMPLE PROJECT</div>
            <div className='section-content'>
                <div className='heading-3'>GMAIL APP PASSWORD</div>
                <div className='heading-4'>
                    <p><span>We woul dhave to create app password in our gmail account. For that login to your mail account, go to account settings and enable 2-step verification. On the same page in bottom there will be option to create app password. Clieck and create a new app password. </span></p>
                    <p><span><img className='sec-image' alt='gamil2StepVerification' src={gamil2StepVerification} /></span></p>
                    <p><span><img className='sec-image' alt='appPasswords' src={appPasswords} /></span></p>
                    <p><span><img className='sec-image' alt='newAppPassword' src={newAppPassword} /></span></p>
                    <p><span>Copy the 15 letters password generated. We'll need it in our application.</span></p>
                </div>
                <div className='heading-3'>DEPENDENCY</div>
                <div className='heading-4'>
                    <p><span>We can create a new spring project from site: <a href='https://start.spring.io'>start.spring.io</a></span></p>
                    <p><span ><img className='sec-image' src={dependency} alt='dependency'  /></span></p>
                </div>
                <div className='heading-3'>CODE</div>
                <div className='heading-4'>
                    <p><span>Lets create a Message object which will have to, subject and text as fields. We will request these details from the user. Then we'll create logic to send the mail.</span></p>
                    <p><span ><img className='sec-image' src={messagePojo} alt='messagePojo'  /></span></p>
                    <p><span ><img className='sec-image' src={logicToSendMail} alt='logicToSendMail'  /></span></p>
                    <p><span ><img className='sec-image' src={controller} alt='controller'  /></span></p>
                    <p><span>Lets specify the properties for mail setup: </span></p>
                    <p><span ><img className='sec-image' src={mailProperties} alt='mailProperties'  /></span></p>
                </div>
                <div className='heading-3'>TESTING</div>
                <div className='heading-4'>
                    <p><span>Request: </span></p>
                    <p><span ><img className='sec-image' src={postmanRequest} alt='postmanRequest'  /></span></p>
                    <p><span>LOGS:  </span></p>
                    <p><span ><img className='sec-image' src={mailLogs} alt='mailLogs'  /></span></p>
                    <p><span>MAIL RECEIVED: </span></p>
                    <p><span ><img className='sec-image' src={mailReceived} alt='mailReceived'  /></span></p>
                    
                </div>
            </div>
        </div>
    </div>
        );
}

export default SpringMailServer;