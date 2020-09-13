import React from 'react';
import { ReactComponent as Moon } from '../../assets/svg/moon.svg';
import { darkMode } from "../../themes";
import HeaderStyle from './header-style'

export default ({ handleTheme, themeColor }) => {
  return (
    <HeaderStyle themeColor={themeColor}>
      <h3>Where in the world?</h3>
      <button className="switch" onClick={handleTheme}>
        <Moon className="icon" />
        <span>{themeColor === darkMode ? 'Light Mode' : 'Dark Mode'}</span>
      </button>
    </HeaderStyle>
  )
}