import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Clock from './Clock';
import CompEx from './CompEx';
import Toggle from './Toggle';
import registerServiceWorker from './registerServiceWorker';


function activateLasers(e) {
    e.preventDefault();
    console.log("Button clicked");
}

function ClockTest() {
    return (
        <div>
            <Clock />,
            <Clock />,
            <Clock />,
            <button onClick={activateLasers}>
                Activate Lasers
            </button>
        </div>
    )
}
ReactDOM.render(
    <ClockTest />,
    document.getElementById('clock')
);


ReactDOM.render(
    <Toggle />,
    document.getElementById('toggle')
);

ReactDOM.render(
    <CompEx />,
    document.getElementById('component')
);

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

registerServiceWorker();
