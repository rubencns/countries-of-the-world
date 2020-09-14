import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import handleRoute from '../../utils/handle-route';
import CountryService from '../../services/country-service';
import { ReactComponent as LeftArrrowIcon } from '../../assets/svg/left-arrow.svg';
import CountryContainer from '../country-container/CountryContainer';
import CountryStyle from './country-style';

export default () => {
  const [country, setCountry] = useState();
  const [borderCountries, setBorderCountries] = useState([]);
  const { id } = useParams();
  const history = useHistory();

  const getBorderCountries = async (borders) => {
    const data = await CountryService.getBorderCountries(borders);
    setBorderCountries(data);
  };
  
  const getCountry = async () => {
    const { data, data: { borders } } = await CountryService.getCountry(id);
    setCountry(data);
    if(borders.length) getBorderCountries(borders)
  };

  useEffect (() => {
    getCountry();
  }, [id]); 
  
  return (
    <CountryStyle>
      <button className="element button" 
        onClick={() => handleRoute(history)}>
          <LeftArrrowIcon className="icon" />
          Back
      </button>
      { country
        ? <CountryContainer country={country} borderCountries={borderCountries} />
        : <div className="status"><h1>No data...</h1></div>
      } 
    </CountryStyle>
  );
}