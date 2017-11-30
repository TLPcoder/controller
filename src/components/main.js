import React from 'react';
import logo from '../logo.svg';
import {Link} from 'react-router-dom';
import Header from './header';
import ResetCache from './reset-cache';

const Main = () => {
    return (
        <div className="App">
          <Header/>
          <div className='main-menu'>
            <button className='links'><Link className='removeDec' to='/health'>Health</Link></button>
            <button className='links'><Link className='removeDec' to='/circuit'>Circuit</Link></button>
            <ResetCache/>
          </div>
        </div>
    )
}

export default Main