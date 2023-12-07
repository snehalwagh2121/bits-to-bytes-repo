import React from 'react';

import '../springsec/basics.css';
import kafkaDownload from './images/kafka/kafka-installation.PNG';
import kafkaFolders from './images/kafka/kafka-folders.PNG';
import kafkaOffsetDownload from './images/kafka/kafka-offset-download.PNG';
import kafkaBinDir from './images/kafka/kafka-bin-dir.PNG';
import configsFolder from './images/kafka/configs-folder.PNG';
import zookeeperStart from './images/kafka/zookeeper-start.PNG';
import kafkaServerStart from './images/kafka/kafka-start-server.PNG';
import topicCreation from './images/kafka/topic-creation.PNG';
import listTopics from './images/kafka/list-topics.PNG';
import kafkaOffsetConfig from './images/kafka/kafka-offset-config.PNG';
import connectionEstablished from './images/kafka/connection-established.PNG';
import startProducer from './images/kafka/start-producer.PNG';
import startConsumer from './images/kafka/start-consumer.PNG';
import messageProducedAndConsumed from './images/kafka/message-produced-and-consumed.PNG';
import messagesInOffset from './images/kafka/messagesInOffset.PNG';
import refreshToSeeMsgs from './images/kafka/refreshToSeeMsgsOffset.PNG';
import dependency from './images/kafka/dependency.PNG';
import producerProperties from './images/kafka/producerProperties.PNG';
import enableKafkaAnnotation from './images/kafka/enableKafkaAnnotation.PNG';
import kafkaConsumerClass from './images/kafka/kafkaConsumerClass.PNG';
import kafkaMsgSentLogs from './images/kafka/kafkaMsgSentLogs.PNG';
import kafkaProducerClass from './images/kafka/kafkaProducerClass.PNG';
import messageConsumedLogs from './images/kafka/messageConsumedLogs.PNG';
import messageSentToProducerConsumer from './images/kafka/messageSentToProducerConsumer.PNG';
import msgSentToConsumer from './images/kafka/msgSentToConsumer.PNG';
import restApiSuccessResponse from './images/kafka/restApiSuccessResponse.PNG';
import restApiToSendMsg from './images/kafka/restApiToSendMsg.PNG';
import ProducerTemplateObject from './images/kafka/ProducerTemplateObject.PNG';
import KafkaObjectConsumer from './images/kafka/KafkaObjectConsumer.PNG';
import sendObjectToKafkaRest from './images/kafka/sendObjectToKafkaRest.PNG';
import sendObjectApiCalled from './images/kafka/sendObjectApiCalled.PNG';
import orderConsumedLogs from './images/kafka/orderConsumedLogs.PNG';
import orderInOffserUI from './images/kafka/orderInOffsetUI.PNG';
import IdempotentConfigFalse from './images/kafka/IdempotentConfigFalse.PNG';
import lingerBatchcompressConfigCode from './images/kafka/lingerbatchcompressConfigCode.PNG';
import idempotenceFalse from './images/kafka/idempotenceFalse.PNG';
import kafkaPropAfterHighThroughput from './images/kafka/kafkaPropAfterHighThroughput.PNG';
import kafkaPropBeforeHighThroughput from './images/kafka/kafkaPropBeforeHighThroughput.PNG';

function Kafka() {
    return (
        <div className='main-page'>
        <div className="page-heading">KAFKA</div>
        <div className='page-content'>
            <div className='heading-2'>Download and install kafka</div>
            <div className='section-content'>
                <div className='heading-4'>
                    <p><span>Downlaod latest version of kafka from <a href='https://kafka.apache.org/downloads'>kafka.apache.org</a></span></p>
                    <p><span ><img className='sec-image' src={kafkaDownload} alt='kafkaDownload'  /></span></p>
                    <p><span>Unzip the downloaded file you'll find the follwoing folders inside:</span></p>
                    <p><span ><img className='sec-image' src={kafkaFolders} alt='kafkaFolders'  /></span></p>
                    <p><span>Download and install offset-explorer for better view of kafka msgs, partitions and more. Downlaod from site: <a href='https://www.kafkatool.com/download.html'>www.kafkatool.com</a></span></p>
                    <p><span ><img className='sec-image' src={kafkaOffsetDownload} alt='kafkaOffsetDownload'  /></span></p>
                </div>
            </div>
            <div className='heading-2'>Run Kafka, Zookper and Offset</div>
            <div className='section-content'>
                <div className='heading-4'>
                    <p><span>Go inside bin\windows directory where you can find the kafka and zookeeper batch files</span></p>
                    <p><span ><img className='sec-image' src={kafkaBinDir} alt='kafkaBinDir'  /></span></p>
                    <p><span>Inside config directory you can find the configs for zookeeper and kafka server</span></p>
                    <p><span ><img className='sec-image' src={configsFolder} alt='configsFolder'  /></span></p>
                    <p><span>Start zookeeper using command: </span></p>
                    <p><span className='italics'>.\bin\windows\zookeeper-server-start.bat .\config\zookeeper.properties</span></p>
                    <p><span ><img className='sec-image' src={zookeeperStart} alt='zookeeperStart'  /></span></p>
                    <p><span>Now lets start kafka server using command: </span></p>
                    <p><span className='italics'>.\bin\windows\kafka-server-start.bat .\config\server.properties</span></p>
                    <p><span ><img className='sec-image' src={kafkaServerStart} alt='kafkaServerStart'  /></span></p>
                    <p><span>Create topic in kafka server using command: </span></p>
                    <p><span className='italics'>.\bin\windows\kafka-topics.bat --create --bootstrap-server localhost:9092 --replication-factor 1 --partitions 3 --topic bits-to-bytes-topic</span></p>
                    <p><span ><img className='sec-image' src={topicCreation} alt='topicCreation'  /></span></p>
                    <p><span>List all topics:  </span></p>
                    <p><span className='italics'>.\bin\windows\kafka-topics.bat --list --bootstrap-server localhost:9092 </span></p>
                    <p><span ><img className='sec-image' src={listTopics} alt='listTopics'  /></span></p>
                    <p><span>Add Cluster in Kafka Offset  </span></p>
                    <p><span ><img className='sec-image' src={kafkaOffsetConfig} alt='kafkaOffsetConfig'  /></span></p>
                    <p><span>Add the cluster</span></p>
                    <p><span ><img className='sec-image' src={connectionEstablished} alt='connectionEstablished'  /></span></p>
                </div>
            </div>
            <div className='heading-2'>Kakfa Producer Consumer</div>
            <div className='section-content'>
                <div className='heading-4'>
                    <p><span>start producer using command</span></p>
                    <p><span className='italics'>.\bin\windows\kafka-console-producer.bat --broker-list localhost:9092 --topic bits-to-bytes-topic </span></p>
                    <p><span ><img className='sec-image' src={startProducer} alt='startProducer'  /></span></p>
                    <p><span>Start consumer in a new window using command</span></p>
                    <p><span className='italics'>.\bin\windows\kafka-console-consumer.bat --bootstrap-server localhost:9092 --topic bits-to-bytes-topic --from-beginning </span></p>
                    <p><span ><img className='sec-image' src={startConsumer} alt='startConsumer'  /></span></p>
                    <p><span>now send a message from producer. Consumer should receive the same message. </span></p>
                    <p><span ><img className='sec-image' src={messageProducedAndConsumed} alt='messageProducedAndConsumed'  /></span></p>
                    <p><span>Lets see in offset for better view: </span></p>
                    <p><span ><img className='sec-image' src={messagesInOffset} alt='messagesInOffset'  /></span></p>
                    <p><span>If you are not able to see the msgs or if the value is in bytes or not string, configure like this: </span></p>
                    <p><span ><img className='sec-image' src={refreshToSeeMsgs} alt='refreshToSeeMsgs'  /></span></p>
                </div>
            </div>
            <div className='heading-2'>Kakfa Spring Integration</div>
            <div className='section-content'>
                <div className='heading-4'>
                    <p><span>Create a new project with following dependencies: </span></p>
                    <p><span ><img className='sec-image' src={dependency} alt='dependency'  /></span></p>
                    <p><span>Enable Kafka Annotation </span></p>
                    <p><span ><img className='sec-image' src={enableKafkaAnnotation} alt='enableKafkaAnnotation'  /></span></p>
                    <p><span>Define Kafka Producer properties: </span></p>
                    <p><span ><img className='sec-image' src={producerProperties} alt='producerProperties'  /></span></p>
                    <p><span>Producer send Config: </span></p>
                    <p><span ><img className='sec-image' src={kafkaProducerClass} alt='kafkaProducerClass'  /></span></p>
                    <p><span>Rest API to send message:  </span></p>
                    <p><span ><img className='sec-image' src={restApiToSendMsg} alt='restApiToSendMsg'  /></span></p>
                    <p><span>Test the producer:  </span></p>
                    <p><span>Start API and send a message by calling the API we have exposed: </span></p>
                    <p><span ><img className='sec-image' src={restApiSuccessResponse} alt='restApiSuccessResponse'  /></span></p>
                    <p><span> We can see message sent message in logs: </span></p>
                    <p><span ><img className='sec-image' src={kafkaMsgSentLogs} alt='kafkaMsgSentLogs'  /></span></p>
                    <p><span> Lets see in our consumer from cmd: </span></p>
                    <p><span ><img className='sec-image' src={msgSentToConsumer} alt='msgSentToConsumer'  /></span></p>
                    <p><span> Now lets Configure Consumer in our application: </span></p>
                    <p><span ><img className='sec-image' src={kafkaConsumerClass} alt='kafkaConsumerClass'  /></span></p>
                    <p><span> Lets send another message by calling our exposed endpoint and see if our consumer has received in logs. </span></p>
                    <p><span ><img className='sec-image' src={messageSentToProducerConsumer} alt='messageSentToProducerConsumer'  /></span></p>
                    <p><span> Logs:</span></p>
                    <p><span ><img className='sec-image' src={messageConsumedLogs} alt='messageConsumedLogs'  /></span></p>
                </div>
            </div>
            <div className='section-content'>
                <div className='heading-2'>Send serialized Objects</div>
                <div className='heading-4'>
                    <p><span>Instead of sending String, We can also send Objects. For that lets configure our Kafka Producer to produce Objects using Serialization. We'll use Order object which will have fields, orderId(int), orderName(String), orderQuantity(int)</span></p>
                    <p><span ><img className='sec-image' src={ProducerTemplateObject} alt='ProducerTemplateObject'  /></span></p>
                    <p><span>Lets modify our existing consumer to consume objects. </span></p>
                    <p><span ><img className='sec-image' src={KafkaObjectConsumer} alt='KafkaObjectConsumer'  /></span></p>
                    <p><span>And lets modify our rest endpoint to send Order Object once the api is called. </span></p>
                    <p><span ><img className='sec-image' src={sendObjectToKafkaRest} alt='sendObjectToKafkaRest'  /></span></p>
                    <p><span>Lets test this. Call the rest api, it should generate the Order Object and send it to kafka. </span></p>
                    <p><span ><img className='sec-image' src={sendObjectApiCalled} alt='sendObjectApiCalled'  /></span></p>
                    <p><span>Logs show that the Order object was consumed successfully.  </span></p>
                    <p><span ><img className='sec-image' src={orderConsumedLogs} alt='orderConsumedLogs'  /></span></p>
                    <p><span>Lets see in our Offset UI: </span></p>
                    <p><span ><img className='sec-image' src={orderInOffserUI} alt='orderInOffserUI'  /></span></p>
                </div>
            </div>
            <div className='section-content'>
                <div className='heading-2'>Kafka Configs</div>
                <div className='heading-4'>
                    <p><span>Compress kafka message, set linger.ms size, batch.size</span></p>
                    <p><span><span className='bold'>linger.ms</span> refers to the time to wait before sending messages out to Kafka. 
                    It defaults to 0, which the system interprets as ‘send messages as soon as they are ready to be sent’. 
                    <span className='bold'>batch.size</span> refers to the maximum amount of data to be collected before sending the batch. 
                    Kafka producers will send out the next batch of messages whenever linger.ms or batch.size is met first.</span></p>
                    <p><span ><img className='sec-image' src={lingerBatchcompressConfigCode} alt='lingerBatchcompressConfigCode' /></span></p>
                    <p><span>Logs before setting the config values: </span></p>
                    <p><span ><img className='sec-image' src={kafkaPropBeforeHighThroughput} alt='kafkaPropBeforeHighThroughput' /></span></p>
                    <p><span>Logs after setting the config values: </span></p>
                    <p><span ><img className='sec-image' src={kafkaPropAfterHighThroughput} alt='kafkaPropAfterHighThroughput' /></span></p>
                    <p><span>By default the idempotence value is set as true. We can modify the value to false if needed: </span></p>
                    <p><span ><img className='sec-image' src={IdempotentConfigFalse} alt='IdempotentConfigFalse' /></span></p>
                    <p><span>Logs after setting the idempotence as false: </span></p>
                    <p><span ><img className='sec-image' src={idempotenceFalse} alt='idempotenceFalse' /></span></p>
                </div>
            </div>
        </div>
    </div>
        );
}

export default Kafka;