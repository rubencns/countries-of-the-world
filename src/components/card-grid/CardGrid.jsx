import React from 'react';
import Card from '../card/Card';
import CardGridStyle from './card-grid-style';

export default ({ countries }) => {

  return (
    <CardGridStyle>
      {
        countries.length
        ? countries.map(c => <Card key={c.alpha3Code} country={c} />)
        : <h1>Loading...</h1>
      }
    </CardGridStyle>
  )
}