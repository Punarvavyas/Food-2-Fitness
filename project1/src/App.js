
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { NavigationBar } from "./Components/NavigationBar";
import Login from "./Components/Login";
import { Button, Navbar } from 'react-bootstrap';
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Layout } from "./Components/Layout";
import Registration from './Components/Registration';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';
import Searchbar from './Components/Searchbar';
import bmi from './Components/bmi';
import Home from './Components/Home';
import ConsultDoctor from './Components/ConsultDoctor';
class App extends Component {
  render(){
  return (
    <React.Fragment>
      <Router>
    <NavigationBar />
    
     </Router>
        <Layout>
          
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/registration" component={Registration} />
              <Route path="/bmi" component={bmi} />
              <Route path="/ConsultDoctor" component={ConsultDoctor} />
            </Switch>
          </Router>
        </Layout>
        <Footer/>
      </React.Fragment>
  );
  }
}

export default App;
