import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Data from './Data/state.js';
import {addPost} from './Data/state.js';
import {addDialog} from './Data/state.js'

 let renderthree =()=> {
    ReactDOM.render(
    <React.StrictMode>
      <App Data={Data} addPost={addPost} addDialog={addDialog} />
    </React.StrictMode>,
    document.getElementById('root')
  );

}

reportWebVitals();

export default renderthree;

