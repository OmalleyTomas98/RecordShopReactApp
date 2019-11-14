import React, { Component } from 'react';
import './App.css';
import { DisplayRecords } from './components/DisplayRecords';
import { Introduction } from './components/Introduction';

import { Wishlist } from './components/Wishlist';

import { EditorsPicks } from './components/EditorsPicks';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



class App extends Component {

render() {
  return (
    <Router>
      
    <div className="App">
    <Navbar bg="dark" variant="dark" font="">
    <Nav className="mr-auto">
    <Nav.Link href="/">Home</Nav.Link>
    <Nav.Link href="/Wishlist">Wishlist</Nav.Link>
    <Nav.Link href="/EditorsPicks">Editors Pick</Nav.Link>
    </Nav>
    </Navbar>
    <br />
    <Switch>
    <Route path='/' exact />
    <Route exact path='/Introduction' component={Introduction} />
    <Route exact path='/Wishlist' component={Wishlist} />
    <Route exact path='/EditorsPicks' component={EditorsPicks} />

    </Switch>


    <div>
     <Introduction/>
   </div>

    </div>
    </Router>
    
    );
    }
    
  }
  
  export default App;