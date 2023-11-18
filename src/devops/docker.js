import React from 'react';

import '../springsec/basics.css';
import containersInDockerDesktop from './images/docker/containersInDockerDesktop.PNG';
import dockerBuildRunOrder from './images/docker/dockerBuildRunOrder.PNG';
import dockerBuildRunProduct from './images/docker/dockerBuildRunProduct.PNG';
import imagesInDockerDesktop from './images/docker/imagesInDockerDesktop.PNG';
import orderController from './images/docker/orderController.PNG';
import orderListApiCall from './images/docker/orderListApiCall.PNG';
import orderServiceHitWithDocker from './images/docker/orderServiceApiHitwithDocker.PNG';
import orderServiceContainerLogs from './images/docker/orderServiceContainerLogs.PNG';
import orderServiceDependency from './images/docker/orderServiceDependency.PNG';
import orderServiceDockerfile from './images/docker/orderServiceDockerfile.PNG';
import productController from './images/docker/productController.PNG';
import productListApiCall from './images/docker/productListApiCall.PNG';
import productServiceApiHitwithDocker from './images/docker/productServiceApiHitwithDocker.PNG';
import productServiceContainerLogs from './images/docker/productServiceContainerLogs.PNG';
import productServiceDependency from './images/docker/productServiceDependency.PNG';
import productServiceDockerfile from './images/docker/productServiceDockerfile.PNG';
import attachCommand from './images/docker/attachCommand.PNG';
import commitCommand from './images/docker/commitCommand.PNG';
import psCommand from './images/docker/psCommand.PNG';
import psaCommand from './images/docker/psaCommand.PNG';
import inspectCommand from './images/docker/inspectCommand.PNG';
import inspectCommand2 from './images/docker/inspectCommand2.PNG';
import stopCommand from './images/docker/stopCommand.PNG';
import interactivePortNameCommands from './images/docker/interactivePortNameCommands.PNG';
import detachedStartMode from './images/docker/detachedStartMode.PNG';
import imagesCommand from './images/docker/imagesCommand.PNG';
import rmiImageCommand from './images/docker/rmiImageCommand.PNG';
import rmContainerCommand from './images/docker/rmContainerCommand.PNG';
import logsCommand from './images/docker/logsCommand.PNG';

function Docker() {
    return (
        <div className='main-page'>
            <div className="page-heading">DOCKER</div>
            <div className='page-content'>
                <div className='heading-2'>Download and install docker desktop</div>
                <div className='section-content'>
                    <div className='heading 4'>
                        <p><span>Follow the steps provided in the docker docs to install and setup docker desktop<a href='https://docs.docker.com/desktop/install/windows-install/'>docs.docker.com</a></span></p>
                    </div>
                </div>
                <div className='heading-2'>Create 2 Rest applications</div>
                <div className='section-content'>
                    <div className='heading 4'>
                        <p><span>Order service dependency: </span></p>
                        <p><span ><img className='sec-image' src={orderServiceDependency} alt='orderServiceDependency'  /></span></p>
                        <p><span>Create a controller class and expose an endpoint: </span></p>
                        <p><span ><img className='sec-image' src={orderController} alt='orderController'  /></span></p>
                        <p><span>Run the application on any port. I've run it on port 9010 by setting the server.port property in application.properties file. And hit the endpoint from browser: </span></p>
                        <p><span ><img className='sec-image' src={orderListApiCall} alt='orderListApiCall'  /></span></p>
                        <p><span>Product Service dependency </span></p>
                        <p><span ><img className='sec-image' src={productServiceDependency} alt='productServiceDependency'  /></span></p>
                        <p><span>Create a controller class and expose an endpoint: </span></p>
                        <p><span ><img className='sec-image' src={productController} alt='productController'  /></span></p>
                        <p><span>Run the application on any port. I've run it on port 9011 by setting the server.port property in application.properties file. And hit the endpoint from browser: </span></p>
                        <p><span ><img className='sec-image' src={productListApiCall} alt='productListApiCall'  /></span></p>
                    </div>
                </div>
                <div className='heading-2'>Creating Docker files, building images and running containers</div>
                <div className='section-content'>
                    <div className='heading 4'>
                        <p><span>Build both the projects and create a Dockerfile in both the projects and specify the commands as follows: </span></p>
                        <p><span ><img className='sec-image' src={orderServiceDockerfile} alt='orderServiceDockerfile'  /></span></p>
                        <p><span ><img className='sec-image' src={productServiceDockerfile} alt='productServiceDockerfile'  /></span></p>
                        <p><span>Now build the image and run the container using the following command for order Service: </span></p>
                        <p><span ><img className='sec-image' src={dockerBuildRunOrder} alt='dockerBuildRunOrder'  /></span></p>
                        <p><span>Now build the image and run the container using the following command for Product Service: </span></p>
                        <p><span ><img className='sec-image' src={dockerBuildRunProduct} alt='dockerBuildRunProduct'  /></span></p>
                        <p><span>When you access the order service and product service endpoints now, they should be accesible from containers.</span></p>
                        <p><span ><img className='sec-image' src={orderServiceHitWithDocker} alt='orderServiceHitWithDocker'  /></span></p>
                        <p><span ><img className='sec-image' src={productServiceApiHitwithDocker} alt='productServiceApiHitwithDocker'  /></span></p>
                        <p><span>We can see our images in docker desktop: </span></p>
                        <p><span ><img className='sec-image' src={imagesInDockerDesktop} alt='imagesInDockerDesktop'  /></span></p>
                        <p><span>Containers: </span></p>
                        <p><span ><img className='sec-image' src={containersInDockerDesktop} alt='containersInDockerDesktop'  /></span></p>
                        <p><span>Logs: </span></p>
                        <p><span ><img className='sec-image' src={orderServiceContainerLogs} alt='orderServiceContainerLogs'  /></span></p>
                        <p><span ><img className='sec-image' src={productServiceContainerLogs} alt='productServiceContainerLogs'  /></span></p>
                    </div>
                </div>
                <div className='heading-2'>Docker commands</div>
                <div className='section-content'>
                    <div className='heading 4'>
                        <p><span><span className='bold'>BUILD</span> This command is used to create an image from a set of insteuctions provided in a file called Dockerfile. </span></p>
                        <p><span className='bold-italics'>docker build -t imageName .</span></p>
                        <p><span ><img className='sec-image' src={dockerBuildRunOrder} alt='dockerBuildRunOrder'  /></span></p>
                        <p><span>-t specifies the tag name for the image. '.' specifies the path for of the Dockerfile.</span></p> 

                        <p><span><span className='bold'>IMAGES</span> This command is used to list all the images.</span></p>
                        <p><span className='bold-italics'>docker images</span></p>
                        <p><span ><img className='sec-image' src={imagesCommand} alt='imagesCommand'  /></span></p>

                        <p><span><span className='bold'>RUN</span> This command is used to create and start a new Docker container based on a specified Docker Image. Comand: </span></p>
                        <p><span className='bold-italics'>docker run [OPTIONS] IMAGE [COMMAND] [ARG...]</span></p>
                        <p><span>Run an interactive container: </span><span className='bold-italics'>options = -it</span></p>
                        <p><span>Port mapping: </span><span className='bold-italics'>options = -p host_port:container_port</span></p>
                        <p><span>Set env variables: </span><span className='bold-italics'>options = -e NAME=value</span></p>
                        <p><span>Run container with name: </span><span className='bold-italics'>options = --name container-name</span></p>
                        <p><span ><img className='sec-image' src={interactivePortNameCommands} alt='interactivePortNameCommands'  /></span></p>
                        <p><span>Run container in background: </span><span className='bold-italics'>options = -d</span></p>
                        <p><span ><img className='sec-image' src={detachedStartMode} alt='detachedStartMode'  /></span></p>
                        <p><span>Limit Resources: </span><span className='bold-italics'>options = --memory=512m --cpus=0.5</span></p>
                        <p><span>Run container with name: </span><span className='bold-italics'>options = --name container-name</span></p>
                        <p><span ><img className='sec-image' src={dockerBuildRunOrder} alt='dockerBuildRunOrder'  /></span></p>

                        <p><span><span className='bold'>PS</span> This command is used to list all the running containers. </span></p>
                        <p><span className='bold-italics'>docker ps </span></p>
                        <p><span ><img className='sec-image' src={psCommand} alt='psCommand'  /></span></p>
                        <p><span>To see all the containers present even the ones which are not running.</span></p> 
                        <p><span className='bold-italics'>docker ps -a </span></p>
                        <p><span ><img className='sec-image' src={psaCommand} alt='psaCommand'  /></span></p>

                        <p><span><span className='bold'>STOP</span> This command is used to stop a running container.</span></p>
                        <p><span className='bold-italics'>docker stop container_name/container_id</span></p>
                        <p><span ><img className='sec-image' src={stopCommand} alt='stopCommand'  /></span></p>

                        <p><span><span className='bold'>ATTACH</span> This command is used to attach you terminal's std input, output and error to a running container using the container's Id or name. This allows to connect to the running container interactively. </span></p>
                        <p><span className='bold-italics'>docker attach container_name </span></p>
                        <p><span ><img className='sec-image' src={attachCommand} alt='attachCommand'  /></span></p>
                        <p><span>Although pressing ctrl-C is stopping the whole container. Also while running the container use -dit.</span></p> 
                        <p><span className='bold-italics'>docker run -ditp 9010:9010 --name order-container order-service </span></p>

                        <p><span><span className='bold'>COMMIT</span> This command is used to create a new image based on the changes made to a container. It allows you to save the current state of a container as a new image. </span></p>
                        <p><span className='bold-italics'>docker commit container_name </span> OR <span className='bold-italics'>docker commit container_id </span></p>
                        <p><span ><img className='sec-image' src={commitCommand} alt='commitCommand'  /></span></p>
                        <p><span>While it can be used to create an image that is similar to another one, it might not be the most recommended way to create replicas or ensure consistency across environments.</span></p> 

                        <p><span><span className='bold'>INSPECT</span> is used to obtain detailed information about Docker objects such as containers, images, volumes, and networks. It provides a JSON-formatted output that includes a wealth of information about the specified Docker object. The information retrieved can be useful for various purposes, including troubleshooting, scripting, and understanding the configuration of Docker resources.</span></p>
                        <p><span className='bold-italics'>docker inspect container_name</span> OR <span className='bold-italics'>docker inspect image_name</span> OR <span className='bold-italics'>docker inspect network_name</span>  OR <span className='bold-italics'>docker inspect volume_name</span></p>
                        <p><span ><img className='sec-image' src={inspectCommand} alt='inspectCommand'  /></span></p>
                        <p><span ><img className='sec-image' src={inspectCommand2} alt='inspectCommand2'  /></span></p>
                        
                        <p><span><span className='bold'>PULL</span> This command is used to pull a image from our dockerhub.</span></p>
                        <p><span className='bold-italics'>docker pull image-name</span></p>
                        
                        <p><span><span className='bold'>PUSH</span> This command is used to push a image from our dockerhub.</span></p>
                        <p><span className='bold-italics'>docker push image-name</span></p>

                        <p><span><span className='bold'>LOGS</span> This command is used to get the logs of a runnning container.</span></p>
                        <p><span className='bold-italics'>docker push image-name</span></p>
                        <p><span ><img className='sec-image' src={logsCommand} alt='logsCommand'  /></span></p>

                        <p><span><span className='bold'>RM</span> This command is used to remove a stopped container.</span></p>
                        <p><span className='bold-italics'>docker rm container-name</span></p>
                        <p><span ><img className='sec-image' src={rmContainerCommand} alt='rmContainerCommand'  /></span></p>
                        
                        <p><span><span className='bold'>RMI</span> This command is used to remove an image.</span></p>
                        <p><span className='bold-italics'>docker rmi image-name</span></p>
                        <p><span ><img className='sec-image' src={rmiImageCommand} alt='rmiImageCommand'  /></span></p>
                        
                        <p><span><span className='bold'>SOME MORE USEFUL COMMANDS: </span> </span></p>
                        <p><ul>
                            <li>Docker version</li>    
                            <li>Docker search</li>    
                            <li>Docker restart</li>    
                            <li>Docker kill</li>    
                            <li>Docker exec</li>    
                            <li>Docker login</li>    
                            <li>Docker history</li>    
                            <li>Docker copy</li>    
                            <li>Docker logout</li>    
                            <li>Docker volume</li>    
                        </ul></p>

                    </div>
                </div>
            </div>
        </div>
        );
}

export default Docker;