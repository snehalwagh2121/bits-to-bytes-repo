import React from 'react';
import './basics.css';

import buynumberfromlist from './images/twiliootp/buynumberfromlist.PNG';
import buynumber from './images/twiliootp/buynumber.PNG';
import CustomUserDetails from './images/twiliootp/CustomUserDetails.PNG';
import generateAndSendOtp from './images/twiliootp/generateAndsendOtp.PNG';
import modifiedUserDetailsService from './images/twiliootp/modifiedUserDetailsService.PNG';
import otpGenerated from './images/twiliootp/otpgenerated.PNG';
import otpviamobile from './images/twiliootp/otpviamobile.PNG';
import twilioAccountInfo from './images/twiliootp/twilioAccountInfo.PNG';
import twilioConstants from './images/twiliootp/twilioConstants.PNG';
import twiliodependency from './images/twiliootp/twiliodependency.PNG';
import twilioInit from './images/twiliootp/twilioInit.PNG';
import otpReceivedOnMobile from './images/twiliootp/otpReceivedOnMobile.jpeg';

function springTwilioOtp() {
    return (
            <div className='main-page'>
                <div className="page-heading">SPRING TWILIO OTP</div>
                <div className='page-content'>
                    <div className='section-content'>
                        <div className='heading-4'>
                            <p><span> Would'nt it be great to get OTP on mobile instead of in response? Well its interesting to me. Lets see how to implement that logic using the code from the previous topic (2 factor auth): </span></p>
                            <p><span> First we need to create a trail account in twilio and buy a number from which we will be sending the messages. </span></p>
                            <p><span ><img className='sec-image' src={buynumberfromlist} alt='buynumberfromlist'  /></span></p>
                            <p><span ><img className='sec-image' src={buynumber} alt='buynumber'  /></span></p>
                            <p><span> Lets add Twilio dependency first: </span></p>
                            <p><span ><img className='sec-image' src={twiliodependency} alt='twiliodependency'  /></span></p>
                            <p><span> Now lets register our application with twilio. For that we need Account SID, Auth Token. Let store it in a constants class. </span></p>
                            <p><span ><img className='sec-image' src={twilioConstants} alt='twilioConstants'  /></span></p>
                            <p><span> You can get the SID and Token from Account info page: </span></p>
                            <p><span ><img className='sec-image' src={twilioAccountInfo} alt='twilioAccountInfo'  /></span></p>
                            <p><span> Lets initilize Twilio in our application with SID and Token </span></p>
                            <p><span ><img className='sec-image' src={twilioInit} alt='twilioInit'  /></span></p>
                            <p><span> Now that all is initlized and setup, lets generate logic. We will have to add a new class CustomUserDetails which will implement UserDetailsClass so that we will have UserData in it and get the phoneNumber from it. </span></p>
                            <p><span ><img className='sec-image' src={CustomUserDetails} alt='CustomUserDetails'  /></span></p>
                            <p><span> Now lets use this CustomUserDetails in our UserDetialsService logic to send CustomUserDetails object which will contain all user data from DB. </span></p>
                            <p><span ><img className='sec-image' src={modifiedUserDetailsService} alt='modifiedUserDetailsService'  /></span></p>
                            <p><span> Logic to generate OTP and send to mobile number: </span></p>
                            <p><span ><img className='sec-image' src={generateAndSendOtp} alt='generateAndSendOtp'  /></span></p>
                            <p><span> Here we are getting CustomUserDetails from UserDetailsService. generateOtp() will accept 2 arguments username and mobilenumber. The logic will be to create random 6 digit and send to the mobile number as well as store in the DB for validation. Evertime the user enters OTP the otp in request will be matched with the OTP in DB. </span></p>
                            <p><span> Message.creator() method is the one provided by TWILIO. It accepts 3 parameters mobile no to send the message to, mobile no from which the message will be sent and the message that needs to be sent. </span></p>
                            <p><span> Lets test this code now. Send username and password first. A new OTP should be generated and sent to mobile number as well as in the response. </span></p>
                            <p><span ><img className='sec-image' src={otpGenerated} alt='otpGenerated'  /></span></p>
                            <p><span ><img className='sec-image' src={otpReceivedOnMobile} alt='otpReceivedOnMobile'  /></span></p>
                            <p><span> Validate OTP : </span></p>
                            <p><span ><img className='sec-image' src={otpviamobile} alt='otpviamobile'  /></span></p>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default springTwilioOtp;