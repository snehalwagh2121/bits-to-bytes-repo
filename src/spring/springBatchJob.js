import React from 'react';
import '../springsec/basics.css';
import dependencyImage from './images/chunk/dependency.PNG';
import BatchJobConfig from './images/chunk/BatchJobConfig.PNG';
import batchProcessor from './images/chunk/batchProcessor.PNG';
import batchWriter from './images/chunk/batchWriter.PNG';
import constants from './images/chunk/constants.PNG';
import EmployeeCopyPojo from './images/chunk/EmployeeCopyPojo.PNG';
import EmployeeCopyRepository from './images/chunk/EmployeeCopyRepository.PNG';
import excelUtil1 from './images/chunk/excelUtil1.PNG';
import excelUtil2 from './images/chunk/excelUtil2.PNG';
import logsShowingChunkProcessing from './images/chunk/logsShowingChunkProcessing.PNG';
import properties from './images/chunk/properties.PNG';
import savedDataToDb from './images/chunk/savedDataToDb.PNG';
import schemasql from './images/chunk/schemasql.PNG';
import excelDependency from './images/chunk/excelDependency.PNG';

function SprinBatchJob() {
    return (
        <div className='main-page'>
            <div className="page-heading">SPRING BATCH JOB</div>
            <div className='page-content'>
                <div className='heading-2'>CREATE A SAMPLE PROJECT</div>
                <div className='section-content'>
                    <div className='heading-3'>DEPENDENCY</div>
                    <div className='heading-4'>
                        <p><span>We can create a new spring project from site: <a href='https://start.spring.io'>start.spring.io</a></span></p>
                        <p><span ><img className='sec-image' src={dependencyImage} alt='dependency'  /></span></p>
                        <p><span>Lets add dependency for read/write excel file which we creted in tasklet example</span></p>
                        <p><span ><img className='sec-image' src={excelDependency} alt='excelDependency'  /></span></p>
                        <p><span>Now lets create pojo havin  fields username, phone and dept. We'll create repository for this pojo. Also in schema.sql we'd have to create the table.</span></p>
                        <p><span ><img className='sec-image' src={EmployeeCopyPojo} alt='EmployeeCopyPojo'  /></span></p>
                        <p><span ><img className='sec-image' src={EmployeeCopyRepository} alt='EmployeeCopyRepository'  /></span></p>
                        <p><span ><img className='sec-image' src={schemasql} alt='schemasql'  /></span></p>
                        <p><span>Lets specify h2 connectivity config in properties file and also specify the path of the excel file which we are going to read in this application</span></p>
                        <p><span ><img className='sec-image' src={properties} alt='properties'  /></span></p>
                        <p><span>Since we are going to read the excel file, lets create the logic to read from the excel file and convert to pojo object</span></p>
                        <p><span ><img className='sec-image' src={excelUtil1} alt='excelUtil1'  /></span></p>
                        <p><span ><img className='sec-image' src={excelUtil2} alt='excelUtil2'  /></span></p>
                        <p><span>Constants: </span></p>
                        <p><span ><img className='sec-image' src={constants} alt='constants'  /></span></p>
                        <p><span> Lets specify our job config: </span></p>
                        <p><span ><img className='sec-image' src={BatchJobConfig} alt='BatchJobConfig'  /></span></p>
                        <p><span>In reader, we are calling the excelUtil methos to read the file. Just for demo lets create processor which will just check for null usernames. If present, it will replace it with unknown. We'll require implementation for ItemWriter which will insert the data into DB by calling the save method of JpaRepository.</span></p>
                        <p><span ><img className='sec-image' src={batchProcessor} alt='batchProcessor'  /></span></p>
                        <p><span ><img className='sec-image' src={batchWriter} alt='batchWriter'  /></span></p>
                        <p><span>Time to test. Look slike its working perfectly. We can see in logs that the processor is called every tie and after 3 repetations, the data is saved in DB in the form of chunks of size 3. </span></p>
                        <p><span ><img className='sec-image' src={logsShowingChunkProcessing} alt='logsShowingChunkProcessing'  /></span></p>
                        <p><span ><img className='sec-image' src={savedDataToDb} alt='savedDataToDb'  /></span></p>
                    </div>
                </div>
                </div>
            </div>
        );
}

export default SprinBatchJob;