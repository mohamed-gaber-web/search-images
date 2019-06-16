import React from 'react'; // react library in node_modules
import ReactDOM from 'react-dom'; // react-dom library in node_modules
// import classes from './index.css'; // file.css write css code

import App from './App'; // App is component like root or parent
// create component
// class App extends Component {

//     constructor(props) {
//         super(props);

//         this.state = {
//             lat: null,
//             errorMessage: ''
//         }

//         window.navigator.geolocation.getCurrentPosition(
//             position => {
//                 this.setState({
//                     lat: position.coords.latitude
//                 })
//             },
//             err => { this.setState({ errorMessage: err.message }) }
//         );
//     }

//     render() { // Write Any Javascript 
//         if (this.state.errorMessage && !this.state.lat) {
//             return <div> Error : {this.state.errorMessage} </div>
//         }

//         if (!this.state.errorMessage && this.state.lat) {
//             return <div> latitude : {this.state.lat} </div>
//         }

//         return <div> Loading !!! </div>
//     }
// }
// import * as serviceWorker from './serviceWorker';
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
