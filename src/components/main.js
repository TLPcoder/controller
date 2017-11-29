import React from 'react';
import logo from '../logo.svg';
import {Link} from 'react-router-dom';
import Header from './header';

const Main = () => {
    return (
        <div className="App">
          <Header/>
          <button className='links'><Link className='removeDec' to='/health'>Health</Link></button>
          <button className='links'><Link className='removeDec' to='/circuit'>Circuit</Link></button>
          <button>Reset Redis Cache</button>
        </div>
    )
}

export default Main