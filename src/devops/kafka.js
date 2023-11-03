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

function Kafka() {
    return (
        <div className='main-page'>
        <div className="page-heading">KAFKA</div>
        <div className='page-content'>
            <p><span>Intro </span></p>
            <div className='heading-2'>Download and install kafka</div>
            <div className='section-content'>
                <div className='heading 4'>
                    <p><span>Downlaof latest version of kafka from <a href='https://kafka.apache.org/downloads'>kafka.apache.org</a></span></p>
                    <p><span ><img className='sec-image' src={kafkaDownload} alt='kafkaDownload'  /></span></p>
                    <p><span>Unzip the downloaded file you'll find the follwoing folders inside:</span></p>
                    <p><span ><img className='sec-image' src={kafkaFolders} alt='kafkaFolders'  /></span></p>
                    <p><span>Download and install offset-explorer for better view of kafka msgs, partitions and more. Downlaod from site: <a href='https://www.kafkatool.com/download.html'>www.kafkatool.com</a></span></p>
                    <p><span ><img className='sec-image' src={kafkaOffsetDownload} alt='kafkaOffsetDownload'  /></span></p>
                </div>
            </div>
            <div className='heading-2'>Run Kafka, Zookper and Offset</div>
            <div className='section-content'>
                <div className='heading 4'>
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
                <div className='heading 4'>
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
        
        </div>
    </div>
        );
}

export default Kafka;