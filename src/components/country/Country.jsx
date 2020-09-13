import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useHistory, useParams } from 'react-router-dom';
import handleRoute from '../../utils/handle-route';
import { ReactComponent as LeftArrrowIcon } from '../../assets/svg/left-arrow.svg';
import CountryStyle from './country-style';

export default () => {
  const [country, setCountry] = useState();
  const [borderCountries, setBorderCountries] = useState([]);
  const { id } = useParams();
  const history = useHistory();

  const getBorderCountries = async (data) => {
    try {
      let countries = [];
      for (let code of data.borders) {
        const { data } = await axios.get(
          `https://restcountries.eu/rest/v2/alpha/${code}`
        );
        countries.push(data);
      }
      setBorderCountries(countries);
    } catch (e) {
      console.error(e);
    }
  };
  
  const getCountry = async () => {
    try {
      const { data } = await axios.get(`https://restcountries.eu/rest/v2/alpha/${id}`);
      setCountry(data);
      getBorderCountries(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect (() => {
    getCountry();
  }, [country]); 
  
  return (
    <CountryStyle>
      <button className="element button" onClick={() => handleRoute(history)}><LeftArrrowIcon className="icon" />Back</button>
      <div className="container">
        { country
        ? 
          <>
            <img className="flag" src={country.flag} alt="flag" />
            <div className="info">
              <h1>{country.name}</h1>
              <div className="data">
                <div className="data-first">
                  <p><span>Native Name: </span>{country.nativeName}</p>
                  <p><span>Population: </span>{country.population}</p>
                  <p><span>Region: </span>{country.region}</p>
                  <p><span>Sub Region: </span>{country.subregion}</p>
                  <p><span>Capital: </span>{country.capital}</p>
                </div>
                <div className="data-second">
                  <p><span>Top Level Domain: </span>{country.topLevelDomain}</p>
                  <p><span>Currencies: </span>{country.currencies.map(c => 
                    (country.currencies.indexOf(c) === country.currencies.length-1) 
                      ? `${c.code}` 
                      : `${c.code}, `)}</p>
                  <p><span>Languages: </span>{country.languages.map(l => 
                    (country.languages.indexOf(l) === country.languages.length-1) 
                      ? `${l.name}` 
                      : `${l.name}, `)}</p>
                </div>
              </div>
              <div className="border-countries">
                <span>Border Countries: </span>
                  {
                    borderCountries.length
                    ?
                    borderCountries.map(e => 
                      <button className="element button" onClick={() => handleRoute(history, e.alpha3Code)} key={e.alpha3Code}>{e.name}</button>  
                    )
                    : <p>No border countries</p>
                  }
              </div>
            </div>
          </>
        : <h1>No data...</h1>
        }
      </div>
    </CountryStyle>
  );
}