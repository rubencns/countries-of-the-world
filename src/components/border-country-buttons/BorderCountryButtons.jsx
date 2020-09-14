import React from 'react';
import { useHistory } from 'react-router-dom';
import handleRoute from '../../utils/handle-route';

export default ({ borderCountries }) => {
  const history = useHistory();

  return (
    <>
      <span>Border Countries: </span>
        {borderCountries.length
          ?
          borderCountries.map(e => 
          <button className="element button" 
            onClick={() => handleRoute(history, e.alpha3Code)} 
            key={e.alpha3Code}>{e.name}</button>  
          )
          : <p>No border countries</p>}          
    </>
  )
}