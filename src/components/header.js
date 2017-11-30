import React from 'react';
import logo from '../logo.svg';
import ChooseEnv from './env';

const header = () => (
     <div className="App">
        <header className="App-header">
            <ChooseEnv/>
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to BFF controller</h1>
        </header>
    </div>
)

export default header;