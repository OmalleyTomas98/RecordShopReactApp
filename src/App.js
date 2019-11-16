import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import  {recordsToListenList}  from './components/recordsToListenList';
import  {editRecords}  from './components/editRecords';
import  {createRecords} from './components/createRecords';




class App extends Component {

render() {   
  return (
  
    <Router>
      
    <div className="container">

 
<Navbar bg="primary" variant="dark">
<Nav className="mr-auto">
<Nav.Link href="/">Home</Nav.Link>
<Nav.Link href="/read">Read</Nav.Link>
<Nav.Link href="/create">Create</Nav.Link>
</Nav>
</Navbar>
<br />

<Switch>
<Route path='/'  exact component={recordsToListenList} />
<Route path= "/edit/:id" component={editRecords} />
<Route path= "/create" component={createRecords} />
</Switch>
</div>
</Router>
    );
    
    }
    
  }
  
  export default App;