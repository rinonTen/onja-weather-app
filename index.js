import React from 'react';
import ReactDOM from 'react-dom'
import App from './Pages/App';
import { GlobalContext } from './GlobalContext';

ReactDOM.render(
    <GlobalContext> 
        <App /> 
    </GlobalContext>,
    document.getElementById("root"));
