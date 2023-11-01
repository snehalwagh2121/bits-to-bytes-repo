import React from 'react';

import '../springsec/basics.css';
import productsServiceDependency from './images/circuitBreaker/app1-dependency.PNG';
import productsServiceCall from './images/circuitBreaker/app1-getcall.PNG';
import circuitBreakerCode from './images/circuitBreaker/circuitBreakerCode.PNG';
import circuitBreakerDependency from './images/circuitBreaker/circuitBreakerDependency.PNG';
import circuitBreakerPom from './images/circuitBreaker/circuitBreakerPom.PNG';
import circuitBreakerProperties2 from './images/circuitBreaker/circuitBreakerProperties2.PNG';
import circuitBreakerRestCall1 from './images/circuitBreaker/circuitBreakerRestCall1.PNG';
import defaultMsg1 from './images/circuitBreaker/defaultMsg1.PNG';
import productsControllerCode from './images/circuitBreaker/productsControllerCode.PNG';

function CircuitBreaker() {
    return (
        <div className='main-page'>
        <div className="page-heading">CIRCUIT BREAKER</div>
        <div className='page-content'>
            <p><span>Lets create a sample products application which has a rest endpoint which send a string message in the response. Then we will create another service called circuit breaker which will have circuit breaker dependency. 
                This service will call our products service endpoint, and if the products service is down, instead of sending 500 Internal server error in response, we will get a default message. </span></p>
            <div className='heading-2'>Products Service</div>
            <div className='section-content'>
                <div className='heading 4'>
                    <p><span>We can create a new spring project from site: <a href='https://start.spring.io'>start.spring.io</a></span></p>
                    <p><span ><img className='sec-image' src={productsServiceDependency} alt='productsServiceDependency'  /></span></p>
                    <p><span>Lets create a sample endpoint which will send a message in response. And lets run this application on 9001 port.</span></p>
                    <p><span ><img className='sec-image' src={productsControllerCode} alt='productsControllerCode'  /></span></p>
                    <p><span>Lets test if the endpoint is working</span></p>
                    <p><span ><img className='sec-image' src={productsServiceCall} alt='productsServiceCall'  /></span></p>
                </div>
            </div>
            <div className='heading-2'>Circuit Breaker Service</div>
            <div className='section-content'>
                <div className='heading 4'>
                    <p><span>We can create a new spring project from site: <a href='https://start.spring.io'>start.spring.io</a></span></p>
                    <p><span ><img className='sec-image' src={circuitBreakerDependency} alt='circuitBreakerDependency'  /></span></p>
                    <p><span>Lets add the aop dependency manually in the application.</span></p>
                    <p><span ><img className='sec-image' src={circuitBreakerPom} alt='circuitBreakerPom'  /></span></p>
                    <p><span>Lets create a endpoint which will call the products service endpoint and annotate it with @CircuitBreaker annotation, provide a name and declare and define a fallback method. </span></p>
                    <p><span ><img className='sec-image' src={circuitBreakerCode} alt='circuitBreakerCode'  /></span></p>
                    <p><span>Now lets expose the health endpoint and configure our circuit breaker: </span></p>
                    <p><span ><img className='sec-image' src={circuitBreakerProperties2} alt='circuitBreakerProperties2'  /></span></p>
                    <p><span>Now run both the applications</span></p>
                </div>
            </div>
            <div className='heading-2'>Test</div>
            <div className='section-content'>
                <div className='heading 4'>
                    <p><span>Keep both the circuit breaker and products applications UP and call the endpoint of circuit breaker service which will inturn call products service</span></p>
                    <p><span ><img className='sec-image' src={circuitBreakerRestCall1} alt='circuitBreakerRestCall1'  /></span></p>
                    <p><span>We see that the response is received. Now Stop the products service and call the endpoint again. </span></p>
                    <p><span ><img className='sec-image' src={defaultMsg1} alt='defaultMsg1'  /></span></p>
                    <p><span>This time our default method got called and we got the default response.</span></p>
                </div>
            </div>
        </div>
    </div>
        );
}

export default CircuitBreaker;