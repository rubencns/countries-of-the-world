import React, {useState} from 'react';
import {ReactComponent as SearchIcon} from '../../assets/svg/search.svg';
import {ReactComponent as AngleDownIcon} from '../../assets/svg/angle-down.svg';
import {ReactComponent as AngleUpIcon} from '../../assets/svg/angle-up.svg';
import HomeStyle from './home-style';

export default () => {
  const [isHidden, setHide] = useState(true);
  const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

  return (
    <HomeStyle isHidden={isHidden}>
      <div className="search">
        <div className="search-input element">
          <SearchIcon className="icon" />
          <input className="" type="text" placeholder="Search for a country..." />
        </div>
        <div className="search-filter element" onClick={() => setHide(!isHidden)}>
          <span>Filter by Region</span>
          {isHidden ? <AngleUpIcon className="icon" /> : <AngleDownIcon className="icon" />}
          <div className="dropdown element">
            {regions.map(e => 
              <span className="dropdown-item" onClick={() => console.log(e)}>{e}</span>
            )}
          </div>
        </div>
      </div>
    </HomeStyle>
  )
}