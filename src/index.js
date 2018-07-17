import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CookiesProvider } from 'react-cookie';

ReactDOM.render(
    <BrowserRouter>
    <div>
    <App/>
      
   </div>
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
