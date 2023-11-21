import React from 'react';

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
                        <p><span>List all resources with a specific field selector: <span className='italics'>kubectl get resource-type --field-selector=field-selectot</span></span></p>
                        <p><span>List all resources in a specific namespace: <span className='italics'>kubectl get resource-type -n namespace</span></span></p>
                    </div>
                </div>
            </div>
        </div>    
        );
}

export default kubernetes;