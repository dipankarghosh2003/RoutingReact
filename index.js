import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import {BrowserRouter as Router,Link,Switch,Router,Route} from 'react-router-dom';
import Contact from './contact';
import Aboutus from './Aboutus';
import NotFound from './NotFound';
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
      <Router>
          <Link to="/">Home</Link>| 
          <Link to="/contact">Contact</Link>|
          <Link to="/about">About Us</Link>
          <Link to="/test"></Link>
       
       <Switch>
          
          <Route path="/contact" component={Contact}></Route>
          <Route path="/about" component={Aboutus}></Route>
          <Route component={NotFound}></Route>
        
       </Switch>
       
       </Router>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
