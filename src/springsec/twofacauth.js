import React from 'react';
import './basics.css';
import dependencyImage from './images/twoFactAuth/dependencies.PNG';
import properties from './images/twoFactAuth/2factAuthproperties.PNG';
import datasql from './images/twoFactAuth/datasql.PNG';
import schemasql from './images/twoFactAuth/schemasql.PNG';
import h2login from './images/twoFactAuth/h2connection.PNG';
import disabledsecurity from './images/twoFactAuth/disabledsecurity.PNG';
import h2DB from './images/twoFactAuth/h2Db.PNG';
import jpaDependency from './images/twoFactAuth/jpaDependency.PNG';
import userdataClass from './images/twoFactAuth/userdataClass.PNG';
import userdataRepository from './images/twoFactAuth/userdataRepository.PNG';
import customuserdetails from './images/twoFactAuth/customuserdetails.PNG';
import userdetailsmapper from './images/twoFactAuth/userdetailsmapper.PNG';
import projectconfig from './images/twoFactAuth/projectconfig.PNG';
import incorrectcredentials from './images/twoFactAuth/incorrectcredentials.PNG';
import correctcredentials from './images/twoFactAuth/correctcredentials.PNG';
import controllerclass from './images/twoFactAuth/controllerclass.PNG';
import projectstructure from './images/twoFactAuth/projectstructure.PNG';
import otpPojo from './images/twoFactAuth/otpPojo.PNG';
import otpRepository from './images/twoFactAuth/otpRepository.PNG';
import otpAuthentication from './images/twoFactAuth/otpAuthentication.PNG';
import usernamePasswordAuthentication from './images/twoFactAuth/usernamePasswordAuthentication.PNG';
import otpAuthenticationProvider from './images/twoFactAuth/otpAuthenticationProvider.PNG';
import usernamePasswordAuthenticationProvider from './images/twoFactAuth/usernamePasswordAuthenticationProvider.PNG';
import twoFactorAuthFilter from './images/twoFactAuth/twoFactorAuthFilter.PNG';
import projectConfigUpdated from './images/twoFactAuth/projectConfigUpdated.PNG';
import otpInResponse from './images/twoFactAuth/otpInResponse.PNG';
import validOtp from './images/twoFactAuth/validOtp.PNG';
import projectStructureUpdated from './images/twoFactAuth/projectStructureUpdated.PNG';

function spring2facauth() {
    return (
            <div className='main-page'>
                <div className="page-heading">SPRING 2 FACTOR AUTH</div>
                <div className='page-content'>
                    <div className='heading-2'>CREATE A SAMPLE PROJECT</div>
                    <div className='section-content'>
                        <div className='heading-3'>DEPENDENCY</div>
                        <div className='heading 4'>
                            <p><span>We can create a new spring project from site: <a href='https://start.spring.io'>start.spring.io</a></span></p>
                            <p><span ><img className='sec-image' src={dependencyImage} alt='dependency'  /></span></p>
                            <p><span> In this project we'll be using H2 DB.</span></p>
                            <p><span className='heading-3'> Config: </span></p>
                            <p><span> applicaiton.properties: </span></p>
                            <p><span ><img className='sec-image' src={properties} alt='properties file'  /></span></p>
                            <p><span> To have a schema setup and data in those schema's every time we run the applicaition, we'll create schema.sql nd data.sql files in the resources folder. </span></p>
                            <p><span ><img className='sec-image' src={schemasql} alt='schema file'  /></span></p>
                            <p><span ><img className='sec-image' src={datasql} alt='data file'  /></span></p>
                            <p><span> Lets see if we can connect to h2 from browser and see the schema and data. We'll hit the h2 url: http://localhost:8010/h2-console </span></p>
                            <p><span ><img className='sec-image' src={h2login} alt='h2 login page'  /></span></p>
                            <p><span> You might be wondering why we didnt see the login page while accessing the h2 DB. This is because we've explicitly told Spring to disable security.</span></p>
                            <p><span ><img className='sec-image' src={disabledsecurity} alt='security disabled'  /></span></p>
                            <p><span> We can see that our tables are created .</span></p>
                            <p><span ><img className='sec-image' src={h2DB} alt='h2 DB view' /></span></p>
                            <p><span> Now lets create entity in our project to map to the UserData table. We will need JPA dependency: </span></p>
                            <p><span ><img className='sec-image' src={jpaDependency} alt='Jpa dependency' /></span></p>
                            <p><span> UserData pojo: </span></p>
                            <p><span ><img className='sec-image' src={userdataClass} alt='userdataClass' /></span></p>
                            <p><span> Now lets create Repository for UserData: </span></p>
                            <p><span ><img className='sec-image' src={userdataRepository} alt='userdataRepository' /></span></p>
                            <p><span> We will need a mapper which will map the UserData Class to UserDetails class so that we can hand the UserDetails Object to UserDetailsService. </span></p>
                            <p><span ><img className='sec-image' src={userdetailsmapper} alt='userdetailsmapper' /></span></p>
                            <p><span> Now we need UserDetailsService class which will fetch the DB with the username whenever a login request comes. If the user is not present or if the password is incorrect, it will throw Bad Credential Exception. Then with the help of mapper, it will convert the UserData object to UserDetails object. </span></p>
                            <p><span ><img className='sec-image' src={customuserdetails} alt='customuserdetails' /></span></p>
                            <p><span> Finally, we'll create beans for UserDetailsService and PasswordEncoder so that the spring security can use our implementation instead of the default. </span></p>
                            <p><span ><img className='sec-image' src={projectconfig} alt='projectconfig' /></span></p>
                            <p><span> Lets create a controller: </span></p>
                            <p><span ><img className='sec-image' src={controllerclass} alt='controllerclass' /></span></p>
                            <p><span> Project Structure: </span></p>
                            <p><span ><img className='sec-image' src={projectstructure} alt='projectstructure' /></span></p>
                            <p><span> Now we are all set to test the changes: </span></p>
                            <p><span> Correct credentials: </span></p>
                            <p><span ><img className='sec-image' src={correctcredentials} alt='correctcredentials' /></span></p>
                            <p><span> Incorrect credentials: </span></p>
                            <p><span ><img className='sec-image' src={incorrectcredentials} alt='incorrectcredentials' /></span></p>
                            <p><span> Now lets incorporate 2 factor login logic into the current code.</span></p>
                            <p><span> Lets start with creating Otp pojo, and OtpRepository: </span></p>
                            <p><span ><img className='sec-image' src={otpPojo} alt='otpPojo' /></span></p>
                            <p><span ><img className='sec-image' src={otpRepository} alt='otpRepository' /></span></p>
                            <p><span> Now lets create Authentication Objects for Otp and credentials so that we can create separate AuthenticationProviders and separate Authentication logic for otp flow and credentials flow: </span></p>
                            <p><span ><img className='sec-image' src={otpAuthentication} alt='otpAuthentication' /></span></p>
                            <p><span ><img className='sec-image' src={usernamePasswordAuthentication} alt='usernamePasswordAuthentication' /></span></p>
                            <p><span> We've added otp as String field in usernamePasswordAuthentication so that we can use this otp to provide as header in response if credentials are correct, and the same OTP can be provided to the user to put in the next screen to fully authenticate. </span></p>
                            <p><span> Now lets implement the authentication logic in the AuthneticationProvders for both usernamePassword and otp: </span></p>
                            <p><span ><img className='sec-image' src={otpAuthenticationProvider} alt='otpAuthenticationProvider' /></span></p>
                            <p><span ><img className='sec-image' src={usernamePasswordAuthenticationProvider} alt='usernamePasswordAuthenticationProvider' /></span></p>
                            <p><span> For usernamePasswordAuthentication , we will first load the userDetails from the DB and then match the passwords, if they are valid, then we will set otp in the Authentication object and return back. For otpAuthenticationProvider logic, we will load the Otp detaisl from DB and then match it. If they are matching, we will create Authentication Object by getting the userDetails from DB and returning it back. </span></p>
                            <p><span> Here the supports method will do the magic of calling the appropriate AuthenticationProvider. One supports Otp Authentication whereas the other supports UsernamePassword Authentication </span></p>
                            <p><span> Now since the authentication logic is in place lets add a filter which will help in calling the appropriate Authentication Provider and setting up the Authentication Manager. </span></p>
                            <p><span ><img className='sec-image' src={twoFactorAuthFilter} alt='twoFactorAuthFilter' /></span></p>
                            <p><span> Whenever a request comes the filter will check if the otp is provided, if yes it will create OtpAuthentication Object so that the OtpAuthenticationProvider is called and otp is validated. If otp s valid, the user will be allowed to access the endpoints. If otp is not provided, the filter will create a UsernamePasswordAuthenitcation Object so that the CustomAuthenticationProvider is called and the passwords are matched. If the passwords amtch, the user will be provided with the OTP in reponse and the flow will end there. </span></p>
                            <p><span> Coming to the final part lets define beans in Config. </span></p>
                            <p><span ><img className='sec-image' src={projectConfigUpdated} alt='projectConfigUpdated' /></span></p>
                            <p><span> We can see that we have provided the AuthenticationProviders details to AuthenticationManager. And in filterChain, we've specified to use our authentication logic instead of BasicAuthentication provided by Spring security. </span></p>
                            <p><span> Project Structure:  </span></p>
                            <p><span ><img className='sec-image' src={projectStructureUpdated} alt='projectStructureUpdated' /></span></p>
                            <p><span> Lets test the changes. </span></p>
                            <p><span> Valid usenamePassword: </span></p>
                            <p><span ><img className='sec-image' src={otpInResponse} alt='otpInResponse' /></span></p>
                            <p><span> We got Otp in response header. Let's put this otp in the next request as header: </span></p>
                            <p><span ><img className='sec-image' src={validOtp} alt='validOtp' /></span></p>
                            <p><span> Otp is validated and we are able to access the site now.</span></p>
                        </div>
                    </div>
                </div>        
            </div>
        );
}

export default spring2facauth;