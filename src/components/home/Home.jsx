import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getCountries, filterByRegion } from '../../requests';
import Search from '../search/Search';
import CardGrid from '../card-grid/CardGrid';
import HomeStyle from './home-style';

export default () => {
  const [region, setRegion] = useState(null);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const handleRequests = async () => {
      if(region === null) {
        const { data } = await getCountries();
        setCountries(data);
      } 
      else {
        const { data } = await filterByRegion(region);
        setCountries(data);
      }
    }
    handleRequests();
  }, [region]);
  
  return (
    <HomeStyle>
      <Search countries={countries} setRegion={setRegion}/>
      <CardGrid countries={countries} />
    </HomeStyle>
  )
}