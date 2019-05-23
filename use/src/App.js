import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/Signup';
import ItemForm from './components/ItemForm';
import PrivateRoute from './PrivateRoute';
import Items from './components/Items';
import Navigation from './components/Navigation';
import ItemDetail from './components/ItemDetail';
import ItemEditForm from './components/ItemEditForm';


import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <nav>
          <Navigation />
        </nav>
         */}
        <Route exact path="/" component ={Login} />
        <Route exact path="/register" component={SignUp} />
        <PrivateRoute exact path='/items/new' component={ItemForm} />
        <PrivateRoute exact path = '/items/:id' component={ItemDetail} />
        <PrivateRoute exact path = '/items/:id/edit' component={ItemEditForm} />
        <PrivateRoute exact path="/items" component={Items} />
        
      </div>
    </Router>
  );
}

export default App;
