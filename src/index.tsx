import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Decoder from './components/Decoder';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Header from './components/Header';
import Encoder from './components/Encoder';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/">
          <Redirect to="/decode"/>
        </Route>
        <Route path="/encode">
          <Encoder />
        </Route>
        <Route path="/decode">
          <Decoder />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);