import React from 'react';
import '../springsec/basics.css';
import miniKubeDashboard from './images/kubernetes/miniKubeDashboard.PNG';
import podLogsUiOption from './images/kubernetes/podLogsUiOption.PNG';
import miniKubeUi from './images/kubernetes/miniKubeUi.PNG';
import portForward from './images/kubernetes/portForward.PNG';
import logsUi from './images/kubernetes/logsUi.PNG';
import siteNotAccessibleAfterDeployment from './images/kubernetes/siteNotAccessibleAfterDeployment.PNG';
import startPodSuccess from './images/kubernetes/startPodSuccess.PNG';
import dockerPullInMinikube from './images/kubernetes/dockerpullInMinikube.PNG';
import dockerImagePush from './images/kubernetes/dockerImagePush.PNG';
import podLogs from './images/kubernetes/podLogs.PNG';
import getPods from './images/kubernetes/getPods.PNG';
import createDeploymentButIssue from './images/kubernetes/createDeploymentButIssue.PNG';
import miniKubeSetDockerEnv from './images/kubernetes/miniKubeSetDockerEnv.PNG';
import miniKubeDockerEnv from './images/kubernetes/miniKubeDockerEnv.PNG';
import miniKubeStartStatus from './images/kubernetes/miniKubeStartStatus.PNG';
import minikubeStart from './images/kubernetes/minikubeStart.PNG';
import stopStatus from './images/kubernetes/stopStatus.PNG';
import orderService from './images/kubernetes/orderService.PNG';
import apiHitSuccess from './images/kubernetes/apiHitSuccess.PNG';

function kubernetes() {
    return (
        <div className='main-page'>
            <div className="page-heading">KUBERNETES</div>
            <div className='page-content'>
                <div className='heading-2'>Download and install kubectl and minikube</div>
                <div className='section-content'>
                    <div className='heading 4'>
                        <p><span>Follow the steps provided in the doc to download and install kubectl <a href='https://kubernetes.io/docs/tasks/tools/'>kubernetes.io</a></span></p>
                        <p><span>Follow the steps provided in the doc to download and install minikube <a href='https://minikube.sigs.k8s.io/docs/start/'>minikube</a></span></p>
                    </div>
                </div>
                <div className='heading-2'>KUBERNETES COMMANDS</div>
                <div className='section-content'>
                    <div className='heading 4'>
                        <div className='heading-3'>CLUSTER MANAGEMENT: </div>
                        <p><span>get cluster info: <span className='italics'>kubectl cluster-infokubectl</span></span></p>
                        <p><span>View all the nodes present in the cluster: <span className='italics'>kubectl get nodes</span></span></p>
                        
                        <div className='heading-3'>NODE MANAGEMENT: </div>
                        <p><span>List all nodes in the cluster: <span className='italics'>kubectl get nodes</span></span></p>
                        <p><span>Describe a specific node: <span className='italics'>kubectl describe node node-name</span></span></p>
                        <p><span>Drain a node for maintenance: <span className='italics'>kubectl drain node-name</span></span></p>
                        <p><span>Uncordon a node after maintenance: <span className='italics'>kubectl uncordon node-name</span></span></p>
                        <p><span>Label a node using name-value pair: <span className='italics'>kubectl label node node-name key=value</span></span></p>
                        <p><span>Remove a label which is already attached to the node: <span className='italics'>kubectl label node node-name label-key -</span></span></p>

                        <div className='heading-3'>NAMESPACE MANAGEMENT: </div>
                        <p><span>Describe a namespace: <span className='italics'>kubectl describe namespace namespace-name</span></span></p>
                        <p><span>Create a namespace: <span className='italics'>kubectl create namespace namespace-name</span></span></p>
                        <p><span>List all namespaces: <span className='italics'>kubectl get namespaces</span></span></p>
                        <p><span>Switch to a different namespace: <span className='italics'>kubectl config set-context --current --namespace= namespace-name</span></span></p>
                        <p><span>Delete a namespace: <span className='italics'>kubectl delete namespace namespace-name</span></span></p>
                        <p><span>Edit and update the namespace definition: <span className='italics'>kubectl edit namespace namespace-name</span></span></p>

                        <div className='heading-3'>CREATING RESOURCES: </div>
                        <p><span>Create or update a resource from a YAML file: <span className='italics'>kubectl apply -f resource-definition.yaml</span></span></p>
                        <p><span>Create an object imperatively: <span className='italics'>kubectl create</span></span></p>
                        <p><span>Create a resource by using the URL: <span className='italics'>kubectl apply -f https://url-to-resource-definition.yaml</span></span></p>

                        <div className='heading-3'>VIEWING AND FINDING RESOURCES: </div>
                        <p><span>List all resources of a specific type: <span className='italics'>kubectl get resource-type</span></span></p>
                        <p><span>List all resources with additional details: <span className='italics'>kubectl get resource-type -o wide</span></span></p>
                        <p><span>Describe a specific resource: <span className='italics'>kubectl describe resource-type resource-name</span></span></p>
                        <p><span>List all resources with a specific label: <span className='italics'>kubectl get resource-type -l label-key= label-value</span></span></p>
                        <p><span>List all resources in all namespaces: <span className='italics'>kubectl get resource-type --all-namespaces</span></span></p>
                        <p><span>List all resources sorted with a specific field: <span className='italics'>kubectl get resource-type --sort-by=field</span></span></p>
                        <p><span>List all resources with a specific label selector: <span className='italics'>kubectl get resource-type -l label-selector</span></span></p>
                        <p><span>List all resources with a specific field selector: <span className='italics'>kubectl get resource-type --field-selector=field-selector</span></span></p>
                        <p><span>List all resources in a specific namespace: <span className='italics'>kubectl get resource-type -n namespace</span></span></p>

                        <div className='heading-3'>DELETING RESOURCES: </div>
                        <p><span>Delete a resource: <span className='italics'>kubectl delete resource-type resource-name</span></span></p>
                        <p><span>Delete multiple resources: <span className='italics'>kubectl delete resource-type1 resource-name1 resource-type2 resource-name2</span></span></p>
                        <p><span>Delete all resources of a specific type: <span className='italics'>kubectl delete resource-type --all</span></span></p>
                        <p><span>Delete the resource by using url: <span className='italics'>kubectl delete -f https://url-to-resource-definition.yaml</span></span></p>
                        <p><span>Delete all resources in a specific namespace: <span className='italics'>kubectl delete resource-type -all -n namespace</span></span></p>

                        <div className='heading-3'>COPYING FILES AND DIRECTORIES: </div>
                        <p><span>Copy files and directories to a container: <span className='italics'>kubectl cp local-path namespace/pod-name:container-path</span></span></p>
                        <p><span>Copy files and directories from a container: <span className='italics'>kubectl cp namespace/pod-name:container-path local-path</span></span></p>
                        <p><span>Copy files from one container to another within the same pod: <span className='italics'>kubectl cp namespace/pod-name:source-container-path destination-namespace/destination-pod-name:destination-container-path</span></span></p>
                        <p><span>Copy files form one container to another using a different pod: <span className='italics'>kubectl cp namespace/source-pod-name:source-container-path destination-namespace/destination-pod-name:destination-container-path</span></span></p>

                        <div className='heading-3'>PATHCHING RESOURCES: </div>
                        <p><span>Patch a resource using a JSON or YAML document: <span className='italics'>kubectl patch resource-type resource-name -p patch-document</span></span></p>
                        <p><span>Patch a resource using a JSON or YAML file: <span className='italics'>kubectl patch resource-type resource-name --path-file=patch-file</span></span></p>

                        <div className='heading-3'>SCALING RESOURCES: </div>
                        <p><span>Scale a deployment: <span className='italics'>kubectl scale deployment deployment-name --replicas=replica-count</span></span></p>
                        <p><span>Scale a statefulset: <span className='italics'>kubectl scale statefulset statefulset-name --replicas=replica-count</span></span></p>
                        <p><span>Scale a replica set: <span className='italics'>kubectl scale replicaset replicaset-name --replicas=replica-count</span></span></p>

                        <div className='heading-3'>POD MANAGEMENT: </div>
                        <p><span>Create a pod from a YAML file: <span className='italics'>kubectl create -f pod-definition.yaml</span></span></p>
                        <p><span>List all pods in a cluster: <span className='italics'>kubectl get pods</span></span></p>
                        <p><span>Describe a specific pod: <span className='italics'>kubectl describe pod pod-name</span></span></p>
                        <p><span>Get logs from a pod: <span className='italics'>kubectl logs pod-name</span></span></p>
                        <p><span>Stream logs from a pod: <span className='italics'>kubectl logs -f pod-name</span></span></p>
                        <p><span>Get logs with a specific label: <span className='italics'>kubectl logs -l label-key=label-value</span></span></p>
                        <p><span>Exec into a pod: <span className='italics'>kubectl exec -it pod-name -- command</span></span></p>
                        <p><span>Delete a pod: <span className='italics'>kubectl delete pod pod-name</span></span></p>
                        <p><span>Create a pod with a name: <span className='italics'>kubectl create pod pod-name</span></span></p>
                        <p><span>List all pods in a namespace: <span className='italics'>kubectl get pod -n namespace-name</span></span></p>

                        <div className='heading-3'>DEPLOYMENT MANAGEMENT: </div>
                        <p><span>Create deployments: <span className='italics'>kubectl create deployment deployment-name --image=image-name</span></span></p>
                        <p><span>List all deployments: <span className='italics'>kubectl get deployment</span></span></p>
                        <p><span>Describe a specific deployment: <span className='italics'>kubectl describe deployment deployment-name</span></span></p>
                        <p><span>Scale a deployment: <span className='italics'>kubectl scale deployment deployment-name --replicas=replica-count</span></span></p>
                        <p><span>Update a deployment's image: <span className='italics'>kubectl set image deployment/deployment-name container-name=new-image-name</span></span></p>
                        <p><span>Rollout status of a deployment: <span className='italics'>kubectl rollout status deployment/deployment-name</span></span></p>
                        <p><span>Pause a deployment rollout: <span className='italics'>kubectl rollout pause deployment/deployment-name</span></span></p>
                        <p><span>Resume a deployment rollout: <span className='italics'>kubectl rollout resume deployment/deployment-name</span></span></p>
                        <p><span>Rollback a deployment to a prev revision: <span className='italics'>kubectl rollout undo deployment/deployment-name</span></span></p>
                        <p><span>Rollback a deployment to a specific revision: <span className='italics'>kubectl rollout undo deployment/deployment-name --to-revision=revision-number</span></span></p>
                        <p><span>Delete a deploymet name: <span className='italics'>kubectl delete deployment deployment-name</span></span></p>

                        <div className='heading-3'>REPLICASETS MANAGEMENT: </div>
                        <p><span>Create a replicaset: <span className='italics'>kubectl create -f replicaset-definition.yaml</span></span></p>
                        <p><span>Create all replicaSets: <span className='italics'>kubectl get replicasets</span></span></p>
                        <p><span>Describe a specific replicaset: <span className='italics'>kubectl describe replicaset replicaset-name</span></span></p>
                        <p><span>Scale a replicaset: <span className='italics'>kubectl scale replicaset replicaset-name --replicas=replica-count</span></span></p>

                        <div className='heading-3'>SERVICE MANAGEMENT: </div>
                        <p><span>Create a service: <span className='italics'>kubectl create service service-type service-name --tcp=port</span></span></p>
                        <p><span>List all services: <span className='italics'>kubectl get services</span></span></p>
                        <p><span>Expose a deployment as a service: <span className='italics'>kubectl expose deployment deployment-name --port=port</span></span></p>
                        <p><span>Describe a specific service: <span className='italics'>kubectl describe service service-name</span></span></p>
                        <p><span>Delete a service: <span className='italics'>kubectl delete service service-name</span></span></p>
                        <p><span>Get information about a service: <span className='italics'>kubectl get endpoints service-name</span></span></p>
                        
                        <div className='heading-3'>CONFIG MAPS AND SECRETS: </div>
                        <p><span>Create a config amp from a file: <span className='italics'>kubectl create configmap comfig-map-name --from-file=path-to-file</span></span></p>
                        <p><span>Create a secret: <span className='italics'>kubectl create secret secret-type secret-name --from -literal=key=value</span></span></p>
                        <p><span>List all config maps: <span className='italics'>kubectl get configmaps</span></span></p>
                        <p><span>List all secrets: <span className='italics'>kubectl get secrets</span></span></p>
                        <p><span>Describe a specific config map: <span className='italics'>kubectl describe confignamp configmap-name</span></span></p>
                        <p><span>Describe a specific secret: <span className='italics'>kubectl describe secret secret-name</span></span></p>
                        <p><span>Delete a specific secret: <span className='italics'>kubectl delete secret secret-name</span></span></p>
                        <p><span>Delete a specific config map: <span className='italics'>kubectl delete configmap configmap-name</span></span></p>

                        <div className='heading-3'>NETWORKING: </div>
                        <p><span>Port forward to a pod: <span className='italics'>kubectl port-forward pod-name local-port:pod-port</span></span></p>
                        <p><span>Expose a deployment as a NodePort service: <span className='italics'>kubectl expose deployment deployment-name --type=NodePort --port=port</span></span></p>
                        <p><span>Create an Ingress resource: <span className='italics'>kubectl create ingress ingress-name --rule=host/path=servicename --service-port</span></span></p>
                        <p><span>Get information about an ingress: <span className='italics'>kubectl describe ingress ingress-name</span></span></p>
                        <p><span>Retrieves the most value from the first rule of the specified ingress resource: <span className='italics'>kubectl get ingress ingress-name -o hsonpath='.spec.rules[0].host'</span></span></p>

                    </div>
                </div>

                <div className='heading-2'>KUBERNETES SPRING BOOT INTEGRATION</div>
                <div className='section-content'>
                    <div className='heading 4'>
                        <div className='heading-3'>RUN MINIKUBE: </div>
                        <p><span>check status of minikube using command: <span className='italics'>minikube status</span></span></p>
                        <p><span ><img className='sec-image' src={stopStatus} alt='stopStatus'  /></span></p>
                        <p><span>If the status is sopped, start minikube using command: <span className='italics'>minikube start</span></span></p>
                        <p><span ><img className='sec-image' src={minikubeStart} alt='minikubeStart'  /></span></p>
                        <p><span>check status again: <span className='italics'>minikube status</span></span></p>
                        <p><span ><img className='sec-image' src={miniKubeStartStatus} alt='miniKubeStartStatus'  /></span></p>

                        <div className='heading-3'>SET DOCKER ENV: </div>
                        <p><span>step 1: <span className='italics'>minikube docker-env</span></span></p>
                        <p><span ><img className='sec-image' src={miniKubeDockerEnv} alt='miniKubeDockerEnv'  /></span></p>
                        <p><span>Copy paste the last line from above output <span className='italics'>@FOR /f "tokens=*" %i IN ('minikube -p minikube docker-env') DO @%i</span></span></p>
                        <p><span ><img className='sec-image' src={miniKubeSetDockerEnv} alt='miniKubeSetDockerEnv'  /></span></p>

                        <div className='heading-3'>CREATE DEPLOYMENT: </div>
                        <p><span>Command to create deployment from docker object: <span className='italics'>kubectl create deployment deployment-name --image=image-name:tag --port=port-number</span></span></p>
                        <p><span>Command to get all deployments: <span className='italics'>kubectl get deployment</span></span></p>
                        <p><span ><img className='sec-image' src={createDeploymentButIssue} alt='createDeploymentButIssue'  /></span></p>
                        <p><span>Ready state shows 0/1. This means our deployment was not success. Lets check pods: <span className='italics'>kubectl get pods</span></span></p>
                        <p><span ><img className='sec-image' src={getPods} alt='getPods'  /></span></p>
                        <p><span>pod ready state also shows 0/1. This means our pod was not success. Lets check logs: <span className='italics'>kubectl logs pod-name</span></span></p>
                        <p><span ><img className='sec-image' src={podLogs} alt='podLogs'  /></span></p>
                        <p><span>Logs shows that the deployment was not able to fetch the image from repository. So lets push our image to our docker hub <span className='italics'>docker push reposioryname/imagename:tag</span></span></p>
                        <p><span ><img className='sec-image' src={dockerImagePush} alt='dockerImagePush'  /></span></p>
                        <p><span>The image name should be of format repositoryname/imagename. Else it will throw request access exception while piushing the image. So as seen in the above snapshot, we have renamed the image to proper format and pushed the image to docker hub.</span></p>
                        <p><span>Lets ssh into minikube and pull docker image: <span className='italics'>minikube ssh <br/>docker pull repository-name/image-name:tag</span></span></p>
                        <p><span ><img className='sec-image' src={dockerPullInMinikube} alt='dockerPullInMinikube'  /></span></p>
                        <p><span>Now that we have the image, lets delete our prev deployment and create a new one: <span className='italics'>kubectl delete deployment deployment_name <br/> kubectl create deployment deployment-name --image=image-name:tag --port=port-number</span></span></p>
                        <p><span ><img className='sec-image' src={startPodSuccess} alt='startPodSuccess'  /></span></p>
                        <p><span>Now we see that our deployment was successful and our application is running successfully in pod</span></p>

                        <div className='heading-3'>EXPOSE SERVICE: </div>
                        <p><span>Even after the deployment was successful, still we are not able to access our application from browser. </span></p>
                        <p><span ><img className='sec-image' src={siteNotAccessibleAfterDeployment} alt='siteNotAccessibleAfterDeployment'  /></span></p>
                        <p><span>This is because our deployment is not exposed to outside world, for that we need to create service.<span className='italics'>kubectl expose deployment deployment-name --type=NodePort</span></span></p>
                        <p><span ><img className='sec-image' src={orderService} alt='orderService'  /></span></p>
                        <p><span>port forward: <span className='italics'>kubectl port-forward service/service-name local_port:minikube_port</span></span></p>
                        <p><span ><img className='sec-image' src={portForward} alt='portForward'  /></span></p>
                        <p><span>Now we can access our application: </span></p>
                        <p><span ><img className='sec-image' src={apiHitSuccess} alt='apiHitSuccess'  /></span></p>
                        <p><span>Minikube also provides way to access the dashboard usin command: <span className='italics'>minikube dashboard</span></span></p>
                        <p><span ><img className='sec-image' src={miniKubeDashboard} alt='miniKubeDashboard'  /></span></p>
                        <p><span>Dashboard view:</span></p>
                        <p><span ><img className='sec-image' src={miniKubeUi} alt='miniKubeUi'  /></span></p>
                        <p><span>We can also check logs from dashboard by clicking on the logs of pods:</span></p>
                        <p><span ><img className='sec-image' src={podLogsUiOption} alt='podLogsUiOption'  /></span></p>
                        <p><span ><img className='sec-image' src={logsUi} alt='logsUi'  /></span></p>
                    </div>
                </div>
            </div>
        </div>    
        );
}

export default kubernetes;