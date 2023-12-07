import React from 'react';
import '../springsec/basics.css';
import mdcLog from './images/log/mdcLog.PNG';
import mostlyUsedPattern from './images/log/mostlyUsedPattern.PNG';
import sampleLogFile from './images/log/sampleLogFile.PNG';

function SpringLogging() {
    return (
        <div className='main-page'>
            <div className="page-heading">SPRING LOGGING</div>
            <div className='page-content'>
                <div className='section-content'>
                    <div className='heading-4'>
                        <p><span>mostly used logging pattern: </span></p>
                        <p><span ><img className='sec-image' src={mostlyUsedPattern} alt='mostlyUsedPattern'  /></span></p>
                        <p><span className='bold'>clr means color. The following colors are supported:</span></p>
                        <p><span>
                            <ol>
                                <li>blue</li>    
                                <li>cyan</li>    
                                <li>faint</li>    
                                <li>green</li>    
                            </ol>    
                        </span></p>
                        <p><span className='bold'>When a file in the classpath has one of the following names, Spring Boot will automatically load it over the default configuration:</span></p>
                        <p><span>
                            <ol>
                                <li>logback-spring.xml</li>    
                                <li>logback.xml</li>    
                                <li>logback-spring.groovy</li>    
                                <li>logback.groovy</li>    
                            </ol>    
                        </span></p>
                        <p><span className='bold'>we can create a filter which will generate a random UUID and can be passed in every request. This will help in tracking the flow </span></p>
                        <p><span><img className='sec-image' alt='mdcLog' src={mdcLog} /></span></p>
                        <p><span className='bold'>Sample logback-spring.xml file: </span></p>
                        <p><span ><img className='sec-image' src={sampleLogFile} alt='sampleLogFile'  /></span></p>
                    </div>
                </div>
            </div>
        </div>
        );
}

export default SpringLogging;