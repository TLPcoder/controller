import React from 'react';

const BuildHealth = (props) => {

    const hystrixHealth = ({info}) => {
        var hystrixServices = [];
        for(let key in info){
            hystrixServices.push(
                <div>
                    <h3>Service: {key}</h3>
                    <p>Status: {info[key].Status || null}</p>
                    <p>ThresholdPercentage: {info[key].ThresholdPercentage || null}</p>
                    <p>Retry: {info[key].Retry * .001 + ' seconds' || null}</p>
                </div>
            )
        }
        return hystrixServices;
    }

    const upStream = (streams) => (streams.map(stream => {
        if(stream.service !== 'Hystrix Circuit Health') {
            return (<div>
                    <h3>service: {stream.service || null}</h3>
                    <p>href: {stream.href || null}</p>
                    <p>statusCode: {stream.statusCode ? stream.statusCode : null}</p>
            </div>)
        } else {
            return hystrixHealth(stream);
        }
    }))

    const health =  props.health
    return (
        <div>
            <p>Status: {health.status}</p>
            <p>cfInstanceIndex: {health.cfInstanceIndex}</p>
            <p>nodeEnv: {health.nodeEnv}</p>
            <div>
                {upStream(props.health.upstream)}
            </div>
        </div>
    )
} 

export default BuildHealth;