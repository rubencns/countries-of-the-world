import React, { useState, useEffect } from 'react';
import CountryService from '../../services/country-service';
import matchStrings from '../../utils/match-strings';
import Search from '../search/Search';
import CardGrid from '../card-grid/CardGrid';
import HomeStyle from './home-style';

export default () => {
  const [input, setInput] = useState('');
  const [region, setRegion] = useState('All');
  const [allCountries, setAllCountries] = useState([]);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const handleRequest = async () => {
    const { data } = await CountryService.getCountries();
      setAllCountries(data);
      setCountries(data);
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
      <Search input={input} setInput={setInput} countries={countries} region={region} setRegion={setRegion} setCountries={setCountries}/>
      <CardGrid countries={countries} />
    </HomeStyle>
  )
}