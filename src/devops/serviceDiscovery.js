import React from 'react';
import '../springsec/basics.css';
import dependencyImage from './images/serviceDiscovery/eurekaServerDependency.PNG';
import eurekaClient1dependency from './images/serviceDiscovery/eurekaClient1dependency.PNG';
import eurekaClient2dependency from './images/serviceDiscovery/eurekaClient2dependency.PNG';
import eurekaClientAnnotation from './images/serviceDiscovery/EurekaClientAnnotation.PNG';
import eurekaClientProperties from './images/serviceDiscovery/eurekaClientProperties.PNG';
import eurekaServerAnnotation from './images/serviceDiscovery/eurekaServerAnnotation.PNG';
import eurekaServerProperties from './images/serviceDiscovery/eurekaServerProperties.PNG';
import eurekaUIWithAppl from './images/serviceDiscovery/eurekaUIWithAppl.PNG';
import eurekaWebPage from './images/serviceDiscovery/eurekaWebpage.PNG';

function ServiceDiscovery() {
    return (
        <div className='main-page'>
            <div className="page-heading">SERVICE DISCOVERY</div>
            <div className='page-content'>
                <p><span>Lets create a eureka-server project and 2 applciaitons which we will register with the eureka server.</span></p>
                <div className='heading-2'>EUREKA SERVER</div>
                <div className='section-content'>
                    <div className='heading 4'>
                        <p><span>We can create a new spring project from site: <a href='https://start.spring.io'>start.spring.io</a></span></p>
                        <p><span ><img className='sec-image' src={dependencyImage} alt='dependencyImage'  /></span></p>
                        <p><span>Lets add the @EnableDiscoveryServer annotation to the application.</span></p>
                        <p><span ><img className='sec-image' src={eurekaServerAnnotation} alt='eurekaServerAnnotation'  /></span></p>
                        <p><span>Lets specify the properties to not to register itself with Eureka and act just as a server: </span></p>
                        <p><span ><img className='sec-image' src={eurekaServerProperties} alt='eurekaServerProperties'  /></span></p>
                        <p><span>Lets run the appl and access application from web:</span></p>
                        <p><span ><img className='sec-image' src={eurekaWebPage} alt='eurekaWebPage'  /></span></p>
                    </div>
                </div>
                <div className='heading-2'>EUREKA Clients</div>
                <div className='section-content'>
                    <div className='heading 4'>
                        <p><span>We can create a new spring project from site: <a href='https://start.spring.io'>start.spring.io</a></span></p>
                        <p><span ><img className='sec-image' src={eurekaClient1dependency} alt='eurekaClient1dependency'  /></span></p>
                        <p><span ><img className='sec-image' src={eurekaClient2dependency} alt='eurekaClient2dependency'  /></span></p>
                        <p><span>Lets add the @EnableDiscoveryClient annotation to both the applications.</span></p>
                        <p><span ><img className='sec-image' src={eurekaClientAnnotation} alt='eurekaClientAnnotation'  /></span></p>
                        <p><span>Lets specify the properties to register itself with Eureka and act just as clients: </span></p>
                        <p><span ><img className='sec-image' src={eurekaClientProperties} alt='eurekaClientProperties'  /></span></p>
                        <p><span>Lets run the appl and see if the clients have registered to eurek server :</span></p>
                        <p><span ><img className='sec-image' src={eurekaUIWithAppl} alt='eurekaUIWithAppl'  /></span></p>
                    </div>
                </div>
            </div>
        </div>
        );
}

export default ServiceDiscovery;