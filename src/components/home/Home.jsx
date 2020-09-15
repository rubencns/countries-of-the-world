import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import CountryService from '../../services/country-service';
import handleRequestErrors from '../../utils/handle-request-errors';
import matchStrings from '../../utils/match-strings';
import Search from '../search/Search';
import CardGrid from '../card-grid/CardGrid';
import ErrorPage from '../error-page/ErrorPage';
import HomeStyle from './home-style';

export default () => {
  const [input, setInput] = useState('');
  const [region, setRegion] = useState('All');
  const [allCountries, setAllCountries] = useState([]);
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState({});

  useEffect(() => {
    const handleRequest = async () => {
      const res = await CountryService.getCountries();
      setError(handleRequestErrors(res));
      if(_.isEmpty(error)) {
        setAllCountries(res.data);
        setCountries(res.data);
      }
    }
    handleRequest();
  }, []);

  useEffect(() => {
    if(region === 'All') {
      return setCountries(allCountries.filter(c => matchStrings(c.name, input)));
    }
    const filtered = allCountries.filter(c => c.region === region);
    return setCountries(filtered.filter(c => matchStrings(c.name, input)));
  }, [region, input]);
  
  return (
    <HomeStyle>
      { (_.isEmpty(error))
        ?
        <>
          <Search input={input} setInput={setInput} countries={countries} region={region} setRegion={setRegion} setCountries={setCountries}/>
          <CardGrid countries={countries} /> 
        </>
        : <ErrorPage error={error} />
       }
    </HomeStyle>
  )
}