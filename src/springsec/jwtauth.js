import React from 'react';
import './basics.css';
import dependencyImage from './images/jwtAuth/dependency.PNG';
import properties from './images/jwtAuth/properties.PNG';
import schemasql from './images/jwtAuth/schemasql.PNG';
import datasql from './images/jwtAuth/datasql.PNG';
import customFilter from './images/jwtAuth/customFilter.PNG';
import customUserDetailsService from './images/jwtAuth/customUserDetailsService.PNG';
import projectConfig from './images/jwtAuth/projectConfig.PNG';
import userDetailsMapper from './images/jwtAuth/userDetailsMapper.PNG';
import UsernamePasswordAuthenticaition from './images/jwtAuth/usernamePasswordAuthentication.PNG';
import UsernamePasswordAuthenticaitionProvider from './images/jwtAuth/usernamePasswordAuthenticationProvider.PNG';
import usernamepasswordTest from './images/jwtAuth/usernamepasswordTest.PNG';
import jwtUtil from './images/jwtAuth/jwtUtil.PNG';
import jwtSecretProperties from './images/jwtAuth/jwtSecretProperties.PNG';
import jwtAuthenticationProvider from './images/jwtAuth/jwtAuthenticationProvider.PNG';
import jwtAuthentication from './images/jwtAuth/jwtAuthentication.PNG';
import filterModified from './images/jwtAuth/filterModified.PNG';
import projectConfigModified from './images/jwtAuth/projectConfigModified.PNG';
import successfulLoginToken from './images/jwtAuth/successfulLoginToken.PNG';
import jwtTokenLogs from './images/jwtAuth/jwtTokenLogs.PNG';
import exception from './images/jwtAuth/exception.PNG';
import jaxbDependency from './images/jwtAuth/jaxbDependency.PNG';
import usernamePassAuthProviderUpdated from './images/jwtAuth/usernamePassAuthProviderUpdated.PNG';

function springSecJwtAuth() {
    return (
        <div className='main-page'>
            <div className="page-heading">SPRING SECURITY USING JWT AUTH</div>
            <div className='page-content'>
                <div className='heading-2'>CREATE A SAMPLE PROJECT</div>
                <div className='section-content'>
                    <div className='heading-4'>
                        <p><span>We can create a new spring project from site: <a href='https://start.spring.io'>start.spring.io</a></span></p>
                        <p><span ><img className='sec-image' src={dependencyImage} alt='dependency'  /></span></p>
                        <p><span>Before we start with creating JWT token and validating it, lets start with simple username password authentication. If the authentication is successful, we'll write the code for geenrating JWT token and validating it for subsequest requests.</span></p>
                        <p><span > Okay so lets create h2 connection and input some values in DB Userdata table. And create entity for the Userdata table and repository for the same: </span></p>
                        <p><span ><img className='sec-image' src={properties} alt='properties'  /></span></p>
                        <p><span ><img className='sec-image' src={schemasql} alt='schema sql'  /></span></p>
                        <p><span ><img className='sec-image' src={datasql} alt='data sql'  /></span></p>
                        <p><span >Now lets create UserDetailsService which will load userdata by username. CustomAuthenticationProvider which will authenticate the username and password. For this lets create an Authentication Object of ours too named UsernamePasswordAuthenticaition. Lets create CustomFilter which will filter every incoming request, and if no authentication token is present, it will validate the username password. Finally lets create ProjectConfig which will have all the bean definitions required. We have learnt all this in the prev sections so theres no point in describing the following code in detial: </span></p>
                        <p><span >CustomUserDetailsService</span></p>
                        <p><span ><img className='sec-image' src={customUserDetailsService} alt='customUserDetailsService'  /></span></p>
                        <p><span >UserDetailsMapper</span></p>
                        <p><span ><img className='sec-image' src={userDetailsMapper} alt='userDetailsMapper'  /></span></p>
                        <p><span >UsernamePasswordAuthenticaition</span></p>
                        <p><span ><img className='sec-image' src={UsernamePasswordAuthenticaition} alt='UsernamePasswordAuthenticaition'  /></span></p>
                        <p><span >UsernamePasswordAuthenticaitionProvider</span></p>
                        <p><span ><img className='sec-image' src={UsernamePasswordAuthenticaitionProvider} alt='UsernamePasswordAuthenticaitionProvider'  /></span></p>
                        <p><span >CustomFilter</span></p>
                        <p><span ><img className='sec-image' src={customFilter} alt='customFilter'  /></span></p>
                        <p><span >ProjectConfig</span></p>
                        <p><span ><img className='sec-image' src={projectConfig} alt='projectConfig'  /></span></p>
                        <p><span >Lets test</span></p>
                        <p><span ><img className='sec-image' src={usernamepasswordTest} alt='usernamepasswordTest'  /></span></p>
                        <p><span >Now lets start adding code for JWT generation and verification</span></p>
                        <p><span ><img className='sec-image' src={jwtUtil} alt='jwtUtil'  /></span></p>
                        <p><span >The <span className='bold'>generateJwtToken()</span> methos will gnerate a token which will have username, issue time, expiration time encoded with a secret which we have provided in the properties file. 
                        <span className='bold'>validateJwtToken()</span> is used to first decode the input jwt if successfully decoded with the help of signature, it will validate the username.</span></p>
                        <p><span >Secret in properties file. We can provide any value for this just that it should be of 512 characters.</span></p>
                        <p><span ><img className='sec-image' src={jwtSecretProperties} alt='jwtSecretProperties'  /></span></p>
                        <p><span >Lets modify the <span className='bold'>UsernamePasswordAuthenticationProvider</span> Code to call the generateJwtToken() method whenever there is successful credentials login. We can send this token in the response header so that from next request onwards, the user can send this token in the request header instead of password. </span></p>
                        <p><span ><img className='sec-image' src={usernamePassAuthProviderUpdated} alt='usernamePassAuthProviderUpdated'  /></span></p>
                        <p><span >Now lets create authentication object for Jwt and add username and jwtToken fields. <span className='bold'>JwtAuthenticationProvider</span> will call the validateJwtToken() which will verify if the input token is valid or not.</span></p>
                        <p><span ><img className='sec-image' src={jwtAuthentication} alt='jwtAuthentication'  /></span></p>
                        <p><span ><img className='sec-image' src={jwtAuthenticationProvider} alt='jwtAuthenticationProvider'  /></span></p>
                        <p><span >Now lets modify out Filter to call the JwtAuthentication if token is provided in headers and Add the JwtAuthenticationProvider to Authentication Manager.</span></p>
                        <p><span ><img className='sec-image' src={filterModified} alt='filterModified'  /></span></p>
                        <p><span ><img className='sec-image' src={projectConfigModified} alt='projectConfigModified'  /></span></p>
                        <p><span className='heading-3'>TESTING:</span></p>
                        <p><span >Lets Test. Login using username and password. The token should be generated and visible in logs .</span></p>
                        <p><span ><img className='sec-image' src={jwtTokenLogs} alt='jwtTokenLogs'  /></span></p>
                        <p><span >While passing this token in the next request, there was an excpeiton generated in JwtUtil class: .</span></p>
                        <p><span ><img className='sec-image' src={exception} alt='exception'  /></span></p>
                        <p><span >Addin the following dependency should resolve the exception.</span></p>
                        <p><span ><img className='sec-image' src={jaxbDependency} alt='jaxbDependency'  /></span></p>
                        <p><span >Again call the hello endpoint by providing the jwt token and username in header. It is now sucessfully allwoing to access the endpoint.</span></p>
                        <p><span ><img className='sec-image' src={successfulLoginToken} alt='successfulLoginToken'  /></span></p>
                    </div>
                </div>
            </div> 
        </div>       
        );
}

export default springSecJwtAuth;