import React from 'react';
import { useHistory } from "react-router-dom";
import handleRoute from '../../utils/handle-route';
import CardStyle from './card-style';

export default ({ country: {alpha3Code, flag, name, population, region, capital} }) => {
  const history = useHistory();

  return (
    <CardStyle className="element" onClick={() => handleRoute(history, alpha3Code)}>
      <img src={flag} alt="flag" />
      <div className="info">
        <h2>{name}</h2>
        <p><span>Population:</span> {population}</p>
        <p><span>Region:</span> {region}</p>
        <p><span>Capital:</span> {capital}</p>
      </div>
    </CardStyle>
  )
}