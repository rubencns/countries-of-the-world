import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from '../home/Home';
import Country from '../country/Country';
import ErrorPage from '../error-page/ErrorPage';
import MainStyle from './main-style';

export default () => {

  return (
    <MainStyle>
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/country/:id" component={Country} />
          <Route><ErrorPage error /></Route>
        </Switch>
      </HashRouter>
    </MainStyle>
  )
}