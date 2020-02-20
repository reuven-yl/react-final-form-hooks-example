import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';
import { setRTL } from 'office-ui-fabric-react/lib/Utilities';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import * as serviceWorker from './serviceWorker';


initializeIcons();
setRTL(true);

ReactDOM.render(
    <Fabric>
    <App />
  </Fabric>,
 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
