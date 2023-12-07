import React from 'react';
import './basics.css';
import customLogFilter from './images/filterChaining/customLogFilter.PNG';
import customLogFilterRegistered from './images/filterChaining/customLogFilterRegistered.PNG';
import logs from './images/filterChaining/logs.PNG';

function springSecFilterChaining() {
    return (
        <div className='main-page'>
            <div className="page-heading">SPRING SECURITY FILTER CHAINING</div>
            <div className='page-content'>
                <div className='section-content'>
                    <div className='heading-4'>
                        <p><span> Just like we created one CustomFilter, we can create more and use them. We can specify before which default filter it needs to be called. If we want to place 2 filters before BasicAuthenticationFilter but CustomFilter1 needs to be called before CustomFIlter2 then we can specify sequence while registering FIlters.   </span></p>
                        <p><span> Lets suppose we want 2 Filters CustomFilter and CUsotmLogFilter to be placed before BasicAuthenticationFilter and CustomLogFilter needs to be called before  CustomFilter. Let's use the jwt authentication code we created in the prev sec and modify it to have 2 filters. </span></p>
                        <p><span><img className='sec-image' alt='login page' src={customLogFilter} /></span></p>
                        <p><span><img className='sec-image' alt='login page' src={customLogFilterRegistered} /></span></p>
                        <p><span> Lets Test: </span></p>
                        <p><span><img className='sec-image' alt='login page' src={logs} /></span></p>
                    </div>
                </div>
            </div>
        </div>            
        );
}

export default springSecFilterChaining;