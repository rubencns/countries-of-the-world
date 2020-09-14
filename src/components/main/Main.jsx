import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../home/Home';
import MainStyle from './main-style';
import Country from '../country/Country';

export default () => {

  return (
    <MainStyle>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:id" component={Country} />
        </Switch>
      </Router>
    </MainStyle>
  )
}