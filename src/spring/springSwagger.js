import React from 'react';
import '../springsec/basics.css';
import controllerOperationResponse from './images/swagger/controller-operation-response.PNG';
import dependencyImage from './images/swagger/dependency.PNG';
import detailedController from './images/swagger/detailed-controller.PNG';
import paramSwagger from './images/swagger/param-swagger.PNG';
import pojo from './images/swagger/pojo.PNG';
import swaggerDependency from './images/swagger/swagger-dependency.PNG';
import swaggerUiPage from './images/swagger/swagger-uipage.PNG';
import tryOne from './images/swagger/try-one.PNG';

function SpringSwagger() {
    return (
        <div className='main-page'>
            <div className="page-heading">SPRING SEC BASICS</div>
            <div className='page-content'>
                <div className='heading-2'>CREATE A SAMPLE PROJECT</div>
                <div className='section-content'>
                    <div className='heading-3'>DEPENDENCY</div>
                    <div className='heading-4'>
                        <p><span>We can create a new spring project from site: <a href='https://start.spring.io'>start.spring.io</a></span></p>
                        <p><span ><img className='sec-image' src={dependencyImage} alt='dependency'  /></span></p>
                        <p><span>Swagger dependency: </span></p>
                        <p><span><img className='sec-image' alt='swaggerDependency' src={swaggerDependency} /></span></p>
                        <p><span>Lets Create some sample controllers and test: http://localhost:8010/swagger-ui/index.html</span></p>
                        <p><span><img className='sec-image' alt='swaggerUiPage' src={swaggerUiPage} /></span></p>
                        <p><span>Great its working lets try @ApiOperation, @ApiResponse, @ApiResponses, @Parameter, Schema Definitions </span></p>
                        <p><span><img className='sec-image' alt='pojo' src={pojo} /></span></p>
                        <p><span><img className='sec-image' alt='detailedController' src={detailedController} /></span></p>
                        <p><span><img className='sec-image' alt='controllerOperationResponse' src={controllerOperationResponse} /></span></p>
                        <p><span><img className='sec-image' alt='paramSwagger' src={paramSwagger} /></span></p>
                        <p><span><img className='sec-image' alt='tryOne' src={tryOne} /></span></p>
                    </div>
                </div>
            </div>
        </div>
        );
}

export default SpringSwagger;