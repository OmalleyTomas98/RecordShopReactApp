import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import  {recordsList}  from './components/recordsList';
import  {createRecords} from './components/createRecords';
import {editRecords} from './components/editRecords';
import { Introduction } from './components/Introduction';

class App extends Component {
render() {   
  return (
  
    <Router> c
    <div className="container">
 
<Navbar bg="primary" variant="dark">
<Nav className="mr-auto">
<Nav.Link href="/">HompePage</Nav.Link>
<Nav.Link href="/create">Create Record Inventory</Nav.Link>
<Nav.Link href="/recordsList">View Record Inventory</Nav.Link>

</Nav>
</Navbar>
<br />
<Switch>
<Route path='/'  exact component={Introduction} />
<Route path='/recordsList'  exact component={recordsList} />
<Route path= "/edit/:id" component={editRecords} />

<Route path= "/create" component={createRecords} />

</Switch>
</div>
</Router>
    );
    
    }
  }
  export default App;