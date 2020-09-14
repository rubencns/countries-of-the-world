import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../home/Home';
import Country from '../country/Country';
import NotFound from '../not-found/NotFound';
import MainStyle from './main-style';

export default () => {

  return (
    <MainStyle>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/country/:id" component={Country} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </MainStyle>
  )
}