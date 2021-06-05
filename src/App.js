import React from 'react';
import { Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormShow from './components/Signup';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Signin from './components/Signin';
import Signup from './components/Signup';
import DeleteForm from './components/DeleteForm';



function App() {
  return (
    <>

      <NavBar />

      <Route exact path="/">
        <Home />
      </Route>
      {/* <Route path="/FormShow">
        <FormShow />
      </Route> */}
      <Route path="/Signin">
        <Signin />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/deleteform">
        <DeleteForm />
      </Route>

    </>
  );
}

export default App;
