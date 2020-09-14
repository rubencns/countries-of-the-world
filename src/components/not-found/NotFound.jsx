import React from 'react';
import { Link } from 'react-router-dom';
import NotFoundStyle from './not-found-style';

export default () => {
  return (
    <NotFoundStyle>
      <h1>404</h1>
      <h3>Page not found.</h3>
      <Link to="/">Go Home</Link>
    </NotFoundStyle>
  )
}