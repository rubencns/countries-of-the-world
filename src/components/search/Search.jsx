import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import handleRoute from '../../utils/handle-route';
import useOnClickOutside from '../../hooks/use-onclick-outside';
import { ReactComponent as SearchIcon } from '../../assets/svg/search.svg';
import { ReactComponent as AngleDownIcon } from '../../assets/svg/angle-down.svg';
import { ReactComponent as AngleUpIcon } from '../../assets/svg/angle-up.svg';
import SearchStyle from './search-style';

export default ({ input, setInput, region, setRegion, countries, setCountries }) => {
  const [results, setResults] = useState([]);
  const [isHidden, setHidden] = useState({ search: true, filter: true });
  const regions = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  const history = useHistory();
  const ref = useRef();
  useOnClickOutside(ref, () => setHidden({search: true, filter: true}));

  const handleInput = ({ target : { value } }) => {
    setInput(value.toLowerCase());
  }

  const onChange = () => {
    const newResults = countries.filter(c => c.name.toLowerCase().startsWith(input));
    setResults(newResults);
  }

  const handleForm = e => {
    e.preventDefault();
    setHidden({...isHidden, search: true});
    setCountries(results);
  }

  useEffect(() => {
    onChange();
    if(!input.length) setHidden({...isHidden, search: true});
    else setHidden({...isHidden, search: false});
  }, [input]);
  
  return (
    <SearchStyle isHidden={isHidden}>
      <form onSubmit={handleForm} className="search-input element">
        <button type="submit"><SearchIcon className="icon" /></button>
        <input type="text" placeholder="Search for a country..." value={input} onChange={handleInput} />
        <div className="dropdown element" ref={ref}>
          {results && 
            results.map(r => 
              <span className="dropdown-item" onClick={() => handleRoute(history, r.alpha3Code)} key={r.alpha3Code}>{r.name}</span>
          )}
        </div>
      </form>
      <div className="search-filter element" 
        onClick={() => setHidden({...isHidden, filter: !isHidden.filter})}>
        <span>{region === 'All' ? 'Filter by Region' : region}</span>
        {isHidden ? <AngleUpIcon className="icon" /> : <AngleDownIcon className="icon" />}
        <div className="dropdown element" ref={ref}>
          {regions.map(e => 
            <span className="dropdown-item" onClick={() => setRegion(e)} key={e}>{e}</span>
          )}
        </div>
      </div>
    </SearchStyle>
  )
}