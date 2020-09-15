import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import _ from 'lodash';
import handleRoute from '../../utils/handle-route';
import handleRequestErrors from '../../utils/handle-request-errors';
import CountryService from '../../services/country-service';
import { ReactComponent as LeftArrrowIcon } from '../../assets/svg/left-arrow.svg';
import CountryContainer from '../country-container/CountryContainer';
import CountryStyle from './country-style';
import ErrorPage from '../error-page/ErrorPage';

export default () => {
  const [country, setCountry] = useState();
  const [borderCountries, setBorderCountries] = useState([]);
  const [error, setError] = useState({});
  const { id } = useParams();
  const history = useHistory();

  const getBorderCountries = async borders => {
    if (borders.length) {
      const data = await CountryService.getBorderCountries(borders);
      setBorderCountries(data);
    }
  };
  
  const getCountry = async () => {
    const res = await CountryService.getCountry(id);
    setError(handleRequestErrors(res));
    if(_.isEmpty(error)) {
      setCountry(res.data);
      getBorderCountries(res.data.borders);
    }
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
      : 
        <div className="status">
          {_.isEmpty(error)
            ? <h1>Loading...</h1> 
            : <ErrorPage error={error}/>
          }
        </div>
      } 
    </CountryStyle>
  );
}