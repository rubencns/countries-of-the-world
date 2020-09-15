import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../home/Home';
import Country from '../country/Country';
import ErrorPage from '../error-page/ErrorPage';
import MainStyle from './main-style';

export default () => {

  return (
    <MainStyle>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/country/:id" component={Country} />
          <Route><ErrorPage error /></Route>
        </Switch>
      </Router>
    </MainStyle>
  )
}