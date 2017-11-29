import React from 'react';
import logo from '../logo.svg';
import {Link} from 'react-router-dom';
import Header from './header';

const Main = () => {
    return (
        <div className="App">
          <Header/>
          <button><Link to='/health'>Health</Link></button>
          <button><Link to='/circuit'>Circuit</Link></button>
        </div>
    )
}

export default Main