import React from 'react';
import '../springsec/basics.css';
import dependencyImage from './images/tasklet/dependency.PNG';
import sampleTasklet from './images/tasklet/sampleTasklet.PNG';
import batchConfig from './images/tasklet/batchConfig.PNG';
import logs from './images/tasklet/logs.PNG';
import properties from './images/tasklet/properties.PNG';
import constants from './images/tasklet/constants.PNG';
import dependencyForExcel from './images/tasklet/dependencyForExcel.PNG';
import EmployeePojo from './images/tasklet/EmployeePojo.PNG';
import employeeRepository from './images/tasklet/employeeRepository.PNG';
import excelUtil1 from './images/tasklet/excelUtil1.PNG';
import excelUtil2 from './images/tasklet/excelUtil2.PNG';
import filePath from './images/tasklet/filePath.PNG';
import sampleTaskletModified from './images/tasklet/sampleTaskletModified.PNG';
import taskletJobModified from './images/tasklet/taskletJobModified.PNG';
import LogForJobNotExecuting from './images/tasklet/LogForJobNotExecuting.PNG';
import executingLogs from './images/tasklet/executingLogs.PNG';
import excelFileWithContent from './images/tasklet/execelFileWithContent.PNG';

function SpringBatchTasklet() {
    return (
        <div className='main-page'>
            <div className="page-heading">SPRING TASKLET JOB</div>
            <div className='page-content'>
                <div className='heading-2'>CREATE A SAMPLE PROJECT</div>
                <div className='section-content'>
                    <div className='heading-4'>
                        <p><span>We can create a new spring project from site: <a href='https://start.spring.io'>start.spring.io</a> with the following dependencies:</span></p>
                        <p><span ><img className='sec-image' src={dependencyImage} alt='dependency'  /></span></p>
                        <p><span>Lets create a sample tasklet flow with loggers so that we understand if the flow is working or not. Later we'll add logic to fetch data from DB and insert in a excel file.</span></p>
                        <p><span >Lets add a Tasklet implementation first: </span></p>
                        <p><span ><img className='sec-image' src={sampleTasklet} alt='sampleTasklet'  /></span></p>
                        <p><span >Now lets define steps and job and create beans for them: </span></p>
                        <p><span ><img className='sec-image' src={batchConfig} alt='batchConfig'  /></span></p>
                        <p><span >Just one more steps before we test this setup. We need to initialize the schema for batch. For thats lets specify in the properties. </span></p>
                        <p><span ><img className='sec-image' src={properties} alt='properties'  /></span></p>
                        <p><span >Thats it. Lets test the flow. </span></p>
                        <p><span ><img className='sec-image' src={logs} alt='logs'  /></span></p>
                        <p><span >Perfect. Its working as expected. The steps are getting created, our Tasklet is executed by the job. </span></p>
                        <p><span >Further lets add code to read Employee data from DB and populate in an excel file. For that we'll create Employee entity, Employee Repository and Excel Util class which will have the code to create and populate a excel file. For excel file operation's we'll need some dependencies to be added:</span></p>
                        <p><span ><img className='sec-image' src={EmployeePojo} alt='EmployeePojo'  /></span></p>
                        <p><span ><img className='sec-image' src={employeeRepository} alt='employeeRepository'  /></span></p>
                        <p><span ><img className='sec-image' src={excelUtil1} alt='excelUtil1'  /></span></p>
                        <p><span ><img className='sec-image' src={excelUtil2} alt='excelUtil2'  /></span></p>
                        <p><span > Dependency and Constants required in EmployeeUtil class: </span></p>
                        <p><span ><img className='sec-image' src={dependencyForExcel} alt='dependencyForExcel'  /></span></p>
                        <p><span ><img className='sec-image' src={constants} alt='constants'  /></span></p>
                        <p><span >Lets fetch the employees from DB and add call the writeToExcelFile() and pass filePath and employeeLists as paramters.</span></p>
                        <p><span ><img className='sec-image' src={sampleTaskletModified} alt='sampleTaskletModified'  /></span></p>
                        <p><span ><img className='sec-image' src={filePath} alt='filePath'  /></span></p>
                        <p><span className='heading-3'>Lets test: </span></p>
                        <p><span >Ohh our step is not executing again as it has already been executed: </span></p>
                        <p><span ><img className='sec-image' src={LogForJobNotExecuting} alt='LogForJobNotExecuting'  /></span></p>
                        <p><span >Lets solve this by telling spring batch to run our tasklet even if it has been executed before by calling the method allowStartIfComplete(true) before step build. Also instead of creating a new instance of tasklet everytime and passing into step. Lets mark it as component and Autowire it. </span></p>
                        <p><span ><img className='sec-image' src={taskletJobModified} alt='taskletJobModified'  /></span></p>
                        <p><span >Now everything works fine. The records are getting fetched form DB and populated in the excel file: </span></p>
                        <p><span ><img className='sec-image' src={executingLogs} alt='executingLogs'  /></span></p>
                        <p><span ><img className='sec-image' src={excelFileWithContent} alt='excelFileWithContent'  /></span></p>
                    </div>
                </div>
            </div>
        </div>    
        );
}

export default SpringBatchTasklet;