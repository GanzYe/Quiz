import React, { Component } from 'react';
import Header from '../header';
import RandomQuiz from '../random-quiz';
import {TestPage} from '../pages';
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';

import './app.css';

export default class App extends Component {

  state = {
    selectedPerson:5,
  };

  onPersonSelected=(id)=>{
    this.setState({selectedPerson:id})
  }


  render() {

    

    return (
      <Router>
      <div className="stardb-app">
        <Header />
        <Switch>
        <Route path="/" render={()=> 
          <RandomQuiz/>
        } exact/>
        <Route path="/test/" component={TestPage}/>
        <Route render={()=> <h2>On development stage</h2>}/>
        </Switch>
      </div>
      </Router>
    );
  }
}
