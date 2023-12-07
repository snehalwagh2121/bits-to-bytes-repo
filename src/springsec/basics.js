import React from 'react';
import './basics.css';
import dependencyImage from './images/basics/dependency.PNG';
import springPassword from './images/basics/spring-generated-password.PNG';
import loginPage from './images/basics/login-page.PNG';
import successfulLogin from './images/basics/successful-login.PNG';
import springSecArch from './images/basics/spring-sec-arch.PNG';
import springUserDetails from './images/basics/userdetails.PNG';
import springCustomUserDetails from './images/basics/customuserdetails.PNG';
import springUserBuilder from './images/basics/userbuildermethod.PNG';
import springUserDetailsService from './images/basics/userdetialsservice.PNG';
import springCustomUserDetailsService from './images/basics/customuserdetailsservice.PNG';
import noOpPasswordEncoderError from './images/basics/noOpPasswordEncoderError.PNG';
import beanDefinitions from './images/basics/beanDefinitions.PNG';
import dummyLogin from './images/basics/dummyLogin.PNG';
import passwordEncoderInterface from './images/basics/passwordEncoderInterface.PNG';
import customPasswordEncoderwoEncryption from './images/basics/customPasswordEncoderwoEncryption.PNG';
import customPasswordEncoderwEncryption from './images/basics/customPasswordEncoderwEncryption.PNG';
import authenticationInterface from './images/basics/authenticationInterface.PNG';
import authenticationProviderInterface from './images/basics/authenticationProviderInterface.PNG';


function springbasics() {
    return (
            <div className='main-page'>
                <div className="page-heading">SPRING SEC BASICS</div>
                <div className='page-content'>
                    <div className='heading-2'>CREATE A SAMPLE PROJECT</div>
                    <div className='section-content'>
                        <div className='heading-4'>
                            <p><span>We can create a new spring project from site: <a href='https://start.spring.io'>start.spring.io</a> with following dependencies: </span></p>
                            <p><span ><img className='sec-image' src={dependencyImage} alt='dependency'  /></span></p>
                            <p><span>We need to add the Spring Security dependency in the project. By default when we run the project, we will get a default password which will be used to authenticate a user.</span></p>
                            <p><span><img className='sec-image' alt='password' src={springPassword} /></span></p>
                            <p><span>Whenever we access the project api's, we will be redirected to /login page. After successfully entering the username <span className='italics'>('user' by default)</span> and password<span className='italics'>(the one we got in logs when we started the application)</span>, we will be redirected to the api endpoint. </span></p>
                            <p><span><img className='sec-image' alt='login page' src={loginPage} /></span></p>
                            <p><span><img className='sec-image' alt='successful login' src={successfulLogin} /></span></p>
                        </div>
                    </div>
                    <div className='section-content'>
                        <div className='heading-3'>SPRING SECURITY ARCHITECTURE</div>
                        <div className='heading-4'>
                            <p><span><img className='sec-image' alt='dependency' src={springSecArch} /></span></p>
                            <p><span> Every request which comes will pass through the <span className='bold'>Authentication filter</span>. Spring provides BasicAuthenticationFilter which authenticates users based on the credentials. Although, we can have our own custom filters and place them before or after the position of a known filter. This is called <span className='italics'>filter chaining.</span></span></p>
                            <p><span> The Authentication filter sends the http request to <span className='bold'>Authentication Manager</span>. Authentication manager is the one responsible to call the appropriate Authentication Provider. </span></p>
                            <p><span> The <span className='bold'>Authentication Provider</span> is the one which contains logic for authentication. We can create our own authentication Providers with our own logic to authenticate user by username/password or OTP or any other means.</span></p>
                            <p><span> <span className='bold'>Password Authenticator</span> is the one which validates the password. The basic Password Authenticator provided by SPring in NoOpsPasswordEncoder. It is depricated one but it has the logic to validate the password as it is without any encryption. We can also create the custom Password Encoder so that it will validate the password based on our own encryption logic.</span></p>
                            <p><span> <span className='bold'>UserDetailsManager</span> is the one responsible for managing the user details. It depends on UserDetails class which has fields username, password and GrantedAuthorities. The Granted Authorization field is used to Authorize the user for access. The main use of UserDetailsManager is to get the details of user possiby from DB.</span></p>
                        </div>
                    </div>
                    <div className='section-content'>
                        <div className='heading-3'>USER DETAILS</div>
                        <div className='heading-4'>
                            <p><span> UserDetails interface has 5 main methods which we need to implement: </span></p>
                            <p><span><img className='sec-image' alt='dependency' src={springUserDetails} /></span></p>
                            <p><span> Sample implementation: </span></p>
                            <p><span><img className='sec-image' alt='dependency' src={springCustomUserDetails} /></span></p>
                            <p><span> <span className='bold'>getAuthorities()</span> method is used to get the authorities of the user. Based on the authorities it is decided whther the user can access a particular endpoint or not. Suppose there is a warehouse application, it stores products for the customers to order and products for the admins to sell. There will be 2 endpoints, one will be visible for the users to add the product to the cart and order whereas the user wont be able to access the admin endpoint from where the admins can add the products to sell. </span></p>
                            <p><span> <span className='bold'>getUsername() and getPassword()</span> methods as the name suggests, are used to get the username and password of the user. </span></p>
                            <p><span> <span className='bold'>isAccountNonExpired(), isAccountNonLocaked(), isCredentialsNonExpired(), isEnabled()</span> by default we've set it to true here. This means the account will be active and enabled forever. However we can set some logic to return false. Eg. after 3 unsuccessful password mismatch while login, we can make isEnabled() return false. </span></p>
                            <p><span> If you dont wish to create a CustomUserClass but still create a user, you can use the User class provided by Spring Security:  </span></p>
                            <p><span><img className='sec-image' alt='dependency' src={springUserBuilder} /></span></p>
                            <p><span> Now we need to provide this CustomUserDetails to UserDetailsService so that it can be used by Spring Security to get details of user. UserDetailsService interface: </span></p>
                            <p><span><img className='sec-image' alt='dependency' src={springUserDetailsService} /></span></p>
                            <p><span> Whenever we implement the UserDetailsService interface, we need to implement the method: loadUserByUsername(). Sample implementation: </span></p>
                            <p><span><img className='sec-image' alt='dependency' src={springCustomUserDetailsService} /></span></p>
                            <p><span> Ofcourse instead of hardcoding the user, we can fetch the User details from DB and then populate the CustomUserDetails and return in the loadUserByUsername(). We will implement this flow in the project. </span></p>
                            <p><span> We tell Spring security to use our UserDetialsService instead of the default one by creating beans and reurning our CustomUserDetails. One thing to note here is that whenever we pass our UserDetailsService, we need to provide definition of PasswordEncoder too. Else, we'll get following Exception while authentication: </span></p>
                            <p><span><img className='sec-image' alt='dependency' src={noOpPasswordEncoderError} /></span></p>
                            <p><span> Bean Definition for UserDetialsService and PasswordEncoder: </span></p>
                            <p><span><img className='sec-image' alt='dependency' src={beanDefinitions} /></span></p>
                            <p><span> Login with dummyuser and dummypassword: </span></p>
                            <p><span><img className='sec-image' alt='dependency' src={dummyLogin} /></span></p>
                            <p><span> Successful Login: </span></p>
                            <p><span><img className='sec-image' alt='dependency' src={successfulLogin} /></span></p>
                        </div>
                    </div>
                    <div className='section-content'>
                        <div className='heading-3'>PASSWORD ENCODER</div>
                        <div className='heading-4'>
                            <p><span> Password Encoder interface provided by Spring Security: </span></p>
                            <p><span><img className='sec-image' alt='dependency' src={passwordEncoderInterface} /></span></p>
                            <p><span> The purpose of encode(Charsequence rawpassword) method is to provide encryption or hash for a given password. martches(CharSequence rawPassword, String encodedPassword) method is used to match the encoded String with a rawPassword. upgradeEncoding(CharSequence encodedPassword) method when overriden to reutn true will encode the password again for better security.</span></p>
                            <p><span> Sample Implementation of Password Encoder w/o encrption: </span></p>
                            <p><span><img className='sec-image' alt='dependency' src={customPasswordEncoderwoEncryption} /></span></p>
                            <p><span> Sample Implementation of Password Encoder with encrption: </span></p>
                            <p><span><img className='sec-image' alt='dependency' src={customPasswordEncoderwEncryption} /></span></p>
                            <p><span className='italics'> NOTE: remember if we are matching with encrpted password, then while storing too we need to encode and store: .password(passwordEncoder.encode("dummypassword"))</span></p>
                        </div>
                    </div>
                    <div className='section-content'>
                        <div className='heading-3'>AUTHENTICATION PROVIDER</div>
                        <div className='heading-4'>
                            <p><span> The Authentication Provider is where we will find the conditions and instructions that decide whenther to authenticate the request or not. The Authentication interface represents the authentication request event and holds the details of the user.  </span></p>
                            <p><span> Authentication Interface : </span></p>
                            <p><span><img className='sec-image' alt='dependency' src={authenticationInterface} /></span></p>
                            <p><span> Authentication Provider Interface : </span></p>
                            <p><span><img className='sec-image' alt='dependency' src={authenticationProviderInterface} /></span></p>
                            <p><span> The Authentication Provider's responsibility is strongly coupled with the Authentication contract. The authenticate() method receives an Authentication object as a paramter and returns an Authentication Object. The supports() method is used to check if the current Authentication Provider support the Authentication Object or not. For eg. Suppose you have 2 factor auth implementation, for a user requesting the access first he will authenticate using username and password so We can have a Authentication PRovider which support username and password Authentication and will be called. Next, after successfully inserting the credentials, the user will be ased to enter otp, so we can have a Authentication Provider which can support username and OTP.</span></p>
                        </div>
                    </div>
                    <div className='section-content'>
                        <div className='heading-3'>SAMPLE IMPLEMENTATION OF SPRING SECURITY </div>
                        <div className='heading-4'>
                            <p><a className='link' href='https://github.com/snehalwagh2121/SpringSecurityDemo'> GITHUB LINK </a></p>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default springbasics;