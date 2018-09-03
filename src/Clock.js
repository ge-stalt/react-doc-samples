import React from 'react';
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
// State example
// function Clock(props) {
//     return (
//         <div>
//             <h1>Hello, world!</h1>
//             <h2>It is {props.date.toLocaleTimeString()}</h2>
//         </div>
//     );
// }
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }
    componentDidMount() {
        window.console.log("componentDidMount");
        this.timerID = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount() {
        window.console.log("componentWillUnmount");
        clearInterval(this.timerID);
    }
    tick() {
        // window.console.log("change tick value:", new Date());
        this.setState({
            date: new Date()
        });
    }
    render() {
        return (<div>
            <h1>Hello, world!</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}</h2>
        </div>);
    }
};

export default Clock;