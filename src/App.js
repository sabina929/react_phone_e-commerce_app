import React from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Card from "./components/Card/Card";
import NotFound from "./components/NotFound";
import Modal from "./components/Modal";


function App() {
  return (
    <React.Fragment>
    <Navbar/>

    <Switch>
      <Route exact path="/" component={ProductList}/>
      <Route exact path="/details" component={Details}/>
      <Route exact path="/card" component={Card}/>
      <Route component={NotFound}/>
    </Switch>
    <Modal/>
    </React.Fragment>
    );
}

export default App;
