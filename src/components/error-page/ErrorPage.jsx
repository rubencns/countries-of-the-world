import React from 'react';
import { Link } from 'react-router-dom';
import ErrorPageStyle from './error-page-style';

export default ({ error: { code = '404', message = 'Not found.' } }) => {
  return (
    <ErrorPageStyle>
      <div className="container">
        <h1>{code}</h1>
        <h3>{message}</h3>
        <Link to="/" className="link">Go Home</Link>
      </div>
    </ErrorPageStyle>
  )
}