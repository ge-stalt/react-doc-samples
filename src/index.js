import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CompEx from './CompEx';
import registerServiceWorker from './registerServiceWorker';

// Sample 1
// ReactDOM.render(<App />, document.getElementById('root'));
// const element = <h1>Hello, world!.......</h1>;


// Sample 2
// const name = "Fankie";
// const element1 = <h1>Hello, {name}</h1>;
// ReactDOM.render(element1, document.getElementById('root'));


// Sample 3
// function formatName(user) {
//     return user.firstName + ' ' + user.lastName;
// }
// const user = {
//     firstName: 'Shawn',
//     lastName: 'Lopez'
// };
// const element = (
//     <h1>
//         Hello, {formatName(user)}!
//     </h1>
// );
// ReactDOM.render(element, document.getElementById('root'));

// Sample 4
// function getGreeting(user) {
//     if (user) {
//         return <h1>Hello, {formatName(user)}!</h1>;
//     }
//     return <h1>Hello, Stranger.</h1>;
// }

// const element = <div tabIndex="0"></div>;
// const element = <img src={user.avatarUrl}></img>;
// function tick() {
//     const element = (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {new Date().toLocaleTimeString()}.</h2>
//       </div>
//     );
//     ReactDOM.render(element, document.getElementById('root'));
// }

// setInterval(tick, 1000);

ReactDOM.render(<CompEx />, document.getElementById('root'));

registerServiceWorker();
