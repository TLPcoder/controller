import React from 'react';
import Clipboard from 'react-clipboard.js';

const BuildHealth = (props) => {

    const hystrixHealth = ({info}) => {
        var hystrixServices = [];
        for(let key in info){
            hystrixServices.push(
                <div className = 'hystrixServiceHealth'>
                    <div className='hystrixServiceHealthInfo'>
                        <h3 className={
                         info[key].Status === 'opened' ?
                         'serviceName openedStatus' :
                         'serviceName closedStatus'
                         }>{key}</h3>
                        <p>ThresholdPercentage: {info[key].ThresholdPercentage || null}</p>
                        <p>Retry: {info[key].Retry * .001 + ' seconds' || null}</p>
                    </div>
                </div>
            )
        }
        return hystrixServices;
    }

    const upStream = (streams) => (streams.map(stream => {
        if(stream.service !== 'Hystrix Circuit Health') {
            return (
            <div className='BFFService'>
                <div className='BFFServiceInfo'>
                    <h3>{stream.service || null}</h3>
                    <Clipboard data-clipboard-text={stream.href !== undefined ? stream.href : null} className='copy'>Copy HREF</Clipboard>
                    <p>{stream.href !== undefined ? stream.href : null}</p>
                    <p>statusCode: {stream.statusCode ? stream.statusCode : null}</p>
                </div>
            </div>)
        }
    }))

    const health =  props.health
    return (
        <div>
            <ul>
                <li><p>Status: {health.status}</p></li>
                <li><p>cfInstanceIndex: {health.cfInstanceIndex}</p></li>
                <li><p>nodeEnv: {health.nodeEnv}</p></li>
            </ul>
            <div className = 'BFFServiceContainer'>
                {upStream(props.health.upstream)}
            </div>
            <div className = 'hystrixServiceHealthContainer'>
                {hystrixHealth(props.health.upstream[props.health.upstream.length-1])}
            </div>
        </div>
    )
} 

export default BuildHealth;