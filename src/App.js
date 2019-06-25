import React, { Component } from 'react';
import './App.css';
import { Route,BrowserRouter } from 'react-router-dom';
import Single from './Components/SingleRecipe';
import Home from './Components/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='header'>
          <h1> Recipe Search </h1>  
        </div>
    
        <div className='ui container'>
          <Route path="/" exact component={Home} />
          <Route path="/single-recipe/:id" component={Single} />
        </div>
    </BrowserRouter> 
    );
  }
}
export default App;

