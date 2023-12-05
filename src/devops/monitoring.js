import React from 'react';
import '../springsec/basics.css';
import dependency from './images/monitoring/dependency.PNG';
import helloEndpoint from './images/monitoring/helloEndpoint.PNG';
import monitoringEndpoint from './images/monitoring/monitoringEndpoint.PNG';
import monitoringProperties from './images/monitoring/monitoringProperties.PNG';
import prometheusEndpoint from './images/monitoring/prometheusEndpoint.PNG';
import applicaiotnIntegrated from './images/monitoring/applicationIntegrated.PNG';
import pathForTargets from './images/monitoring/pathForTargets.PNG';
import applicationIntegration from './images/monitoring/applicationIntegration.PNG';
import prometheusYamlFile from './images/monitoring/prometheusYamlFile.PNG';
import logBackEventsCount from './images/monitoring/logBackEventsCount.PNG';
import prometheusEndpointLogbackEvents from './images/monitoring/prometheusEndpointLogbackEvents.PNG';
import grafanaLogin from './images/monitoring/grafanaLogin.PNG';

function Monitoring() {
    return (
        <div className='main-page'>
            <div className="page-heading">MONITORING USING PROMETHEUS AND GRAFANA</div>
            <div className='page-content'>
                <div className='heading-2'>PROJECT SETUP</div>
                <div className='section-content'>
                    <div className='heading 4'>
                        <p><span>Create a new Spring boot project using link: <a href='https://start.spring.io/'>start.spring.io</a> and following dependencies: </span></p>
                        <p><span ><img className='sec-image' src={dependency} alt='dependency'  /></span></p>
                        <p><span>Expose an endpoint and log some statements: </span></p>
                        <p><span ><img className='sec-image' src={helloEndpoint} alt='helloEndpoint'  /></span></p>
                        <p><span>Make prometheus endpoint accessible: </span></p>
                        <p><span ><img className='sec-image' src={monitoringProperties} alt='monitoringProperties'  /></span></p>
                        <p><span>Run and access hello endpoint: </span></p>
                        <p><span ><img className='sec-image' src={monitoringEndpoint} alt='monitoringEndpoint'  /></span></p>
                        <p><span>Access prometheus endpoint: </span></p>
                        <p><span ><img className='sec-image' src={prometheusEndpoint} alt='prometheusEndpoint'  /></span></p>
                    </div>
                </div>
                <div className='heading-2'>PROMETHEUS UI INTEGRATION WITH OUR APPLICATION</div>
                <div className='section-content'>
                    <div className='heading 4'>
                        <p><span>Download latest version of prometheus from: <a href='https://prometheus.io/download/'>prometheus.io</a></span></p>
                        <p><span>Open Prometheus.yaml file which would be present in the same folder as prometheus executable: </span></p>
                        <p><span ><img className='sec-image' src={prometheusYamlFile} alt='prometheusYamlFile'  /></span></p>
                        <p><span>Add your project config job under scrape_config parameter: </span></p>
                        <p><span ><img className='sec-image' src={applicationIntegration} alt='applicationIntegration'  /></span></p>
                        <p><span>Save and run prometheus executable and access from browser. (Default port for prometheus os 9090. You can change it from the same yaml file, key= 'static_configs: targets'): </span></p>
                        <p><span>Go to status- Tagets: </span></p>
                        <p><span ><img className='sec-image' src={pathForTargets} alt='pathForTargets'  /></span></p>
                        <p><span>Our applicaition should be visible here: </span></p>
                        <p><span ><img className='sec-image' src={applicaiotnIntegrated} alt='applicaiotnIntegrated'  /></span></p>
                        <p><span>In search query we can query any of the parameter that are avaible in actuator/prometheus endpoint: </span></p>
                        <p><span ><img className='sec-image' src={prometheusEndpointLogbackEvents} alt='prometheusEndpointLogbackEvents'  /></span></p>
                        <p><span ><img className='sec-image' src={logBackEventsCount} alt='logBackEventsCount'  /></span></p>
                    </div>
                </div>
                <div className='heading-2'>GRAFANA INTEGRATION WITH OUR APPLICATION</div>
                <div className='section-content'>
                    <div className='heading 4'>
                        <p><span>Download and install the latest version of grafana from: <a href='https://grafana.com/grafana/download?platform=windows'>grafana.com</a></span></p>
                        <p><span>After installing, grafana should be accesible from your browser at localhost:3000 </span></p>
                        <p><span ><img className='sec-image' src={grafanaLogin} alt='grafanaLogin'  /></span></p>
                        <p><span>Dafult username/password are admin/admin </span></p>
                        <p><span>After 1st login you'll be prompted to change the password: </span></p>
                    </div>
                </div>
            </div>
        </div>
        );
}

export default Monitoring;