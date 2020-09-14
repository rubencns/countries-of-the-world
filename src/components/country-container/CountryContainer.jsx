import React from 'react';
import BorderCountryButtons from '../border-country-buttons/BorderCountryButtons';
import CountryContainerStyle from './country-container-style';

export default ({ country, borderCountries }) => {
  return (
    <CountryContainerStyle>
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
          <BorderCountryButtons borderCountries={borderCountries} />
        </div>
      </div>       
    </CountryContainerStyle>
  )
}