import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import configureStore from './store/configure-store';
import {BrowserRouter} from 'react-router-dom';

let store = configureStore()

ReactDOM.render(
     <BrowserRouter>
     <Provider store={store}>
         <App/>
     </Provider>
 </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
