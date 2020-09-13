import React, { useState } from 'react';
import {ReactComponent as SearchIcon} from '../../assets/svg/search.svg';
import {ReactComponent as AngleDownIcon} from '../../assets/svg/angle-down.svg';
import {ReactComponent as AngleUpIcon} from '../../assets/svg/angle-up.svg';
import SearchStyle from './search-style';

export default ({ countries, setRegion }) => {
  const [isHidden, setHide] = useState(true);
  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  return (
    <SearchStyle isHidden={isHidden}>
      <div className="search-input element">
        <SearchIcon className="icon" />
        <input className="" type="text" placeholder="Search for a country..." />
      </div>
      <div className="search-filter element" onClick={() => setHide(!isHidden)}>
        <span>Filter by Region</span>
        {isHidden ? <AngleUpIcon className="icon" /> : <AngleDownIcon className="icon" />}
        <div className="dropdown element">
          {regions.map(e => 
            <span className="dropdown-item" onClick={() => setRegion(e)} key={e}>{e}</span>
          )}
        </div>
      </div>
    </SearchStyle>
  )
}