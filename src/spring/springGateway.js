import React from 'react';
import '../springsec/basics.css';
import studentController from './images/gateway/studentController.PNG';
import studentPojo from './images/gateway/studentPojo.PNG';
import studentProperties from './images/gateway/studentProperties.PNG';
import studentResponseGateway from './images/gateway/studentResponseGateway.PNG';
import studentDependency from './images/gateway/studentDependency.PNG';
import collegeController from './images/gateway/collegeController.PNG';
import collegePojo from './images/gateway/collegePojo.PNG';
import collegeProperties from './images/gateway/collegeProperties.PNG';
import collegeResponseGateway from './images/gateway/collegeResponseGateway.PNG';
import collegeDependency from './images/gateway/collegeDependency.PNG';
import gatewayDependency from './images/gateway/gatewayDependency.PNG';
import gatewayDiscoveryAnnotation from './images/gateway/gatewayDiscoverAnnotation.PNG';
import gatewayProperties from './images/gateway/gatewayProperties.PNG';

function SpringGateway() {
    return (
        <div className='main-page'>
        <div className="page-heading">SPRING GATEWAY</div>
        <div className='page-content'>
            <p><span>We'll create a gateway applciaiton and 2 web applications namely Student applicaiton and college application. Whenever we'll call the student applicaiton using /student in the url, the gateway will redirect to student service and similarly gateway will redirect to college applciaiton when we specify /college in the url.</span></p>
            <div className='heading-2'>CREATE A STUDENT APPLICATION</div>
            <div className='section-content'>
                <div className='heading-2'>DEPENDENCY</div>
                <div className='heading 4'>
                    <p><span>We can create a new spring project from site: <a href='https://start.spring.io'>start.spring.io</a></span></p>
                    <p><span ><img className='sec-image' src={studentDependency} alt='studentDependency'  /></span></p>
                </div>
            </div>
            <div className='section-content'>
                <div className='heading-2'>STUDENT POJO</div>
                <div className='heading 4'>
                    <p><span ><img className='sec-image' src={studentPojo} alt='studentPojo'  /></span></p>
                </div>
            </div>
            <div className='section-content'>
                <div className='heading-2'>STUDENT CONTROLLER</div>
                <div className='heading 4'>
                    <p><span ><img className='sec-image' src={studentController} alt='studentController'  /></span></p>
                </div>
            </div>
            <div className='section-content'>
                <div className='heading-2'>STUDENT PROPERTIES</div>
                <div className='heading 4'>
                    <p><span ><img className='sec-image' src={studentProperties} alt='studentProperties'  /></span></p>
                </div>
            </div>
            <div className='heading-2'>CREATE A COLLEGE APPLICATION</div>
            <div className='section-content'>
                <div className='heading-2'>DEPENDENCY</div>
                <div className='heading 4'>
                    <p><span>We can create a new spring project from site: <a href='https://start.spring.io'>start.spring.io</a></span></p>
                    <p><span ><img className='sec-image' src={collegeDependency} alt='collegeDependency'  /></span></p>
                </div>
            </div>
            <div className='section-content'>
                <div className='heading-2'>COLLEGE POJO</div>
                <div className='heading 4'>
                    <p><span ><img className='sec-image' src={collegePojo} alt='collegePojo'  /></span></p>
                </div>
            </div>
            <div className='section-content'>
                <div className='heading-2'>COLLEGE CONTROLLER</div>
                <div className='heading 4'>
                    <p><span ><img className='sec-image' src={collegeController} alt='collegeController'  /></span></p>
                </div>
            </div>
            <div className='section-content'>
                <div className='heading-2'>COLLEGE PROPERTIES</div>
                <div className='heading 4'>
                    <p><span ><img className='sec-image' src={collegeProperties} alt='collegeProperties'  /></span></p>
                </div>
            </div>
        
            <div className='heading-2'>CREATE OUR GATEWAY APPLICATION</div>
            <div className='section-content'>
                <div className='heading-2'>DEPENDENCY</div>
                <div className='heading 4'>
                    <p><span>We can create a new spring project from site: <a href='https://start.spring.io'>start.spring.io</a></span></p>
                    <p><span ><img className='sec-image' src={gatewayDependency} alt='gatewayDependency'  /></span></p>
                </div>
            </div>
            <div className='section-content'>
                <div className='heading-2'>ANNOTATION FOR DISCOVERY</div>
                <div className='heading 4'>
                    <p><span ><img className='sec-image' src={gatewayDiscoveryAnnotation} alt='gatewayDiscoveryAnnotation'  /></span></p>
                </div>
            </div>
            <div className='section-content'>
                <div className='heading-2'>ROUTES SPECIFICATION</div>
                <div className='heading 4'>
                    <p><span ><img className='sec-image' src={gatewayProperties} alt='gatewayProperties'  /></span></p>
                </div>
            </div>
        
            <div className='heading-2'>LETS TEST</div>
            <div className='section-content'>
                <div className='heading-2'>CALL STUDENT details endpoint from gateway: </div>
                <div className='heading 4'>
                    <p><span ><img className='sec-image' src={studentResponseGateway} alt='studentResponseGateway'  /></span></p>
                    <p><span > Note the 8010 port which we have specified for gateway applcaition. since we are passing /student in the url, the request is getting forwarded to student application.</span></p>
                </div>
            </div>
            <div className='section-content'>
                <div className='heading-2'>CALL COLLEGE details endpoint from gateway: </div>
                <div className='heading 4'>
                    <p><span ><img className='sec-image' src={collegeResponseGateway} alt='collegeResponseGateway'  /></span></p>
                    <p><span > Just like for students, when we pass /college in the url, the request is getting forwarded to college application.</span></p>
                </div>
            </div>
        </div>
    </div>
        );
}

export default SpringGateway;