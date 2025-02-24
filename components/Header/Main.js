import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../ThemePalette/Store';
import singleMenu from './data/single';
import Mixed from './Mixed';
import Mega from './Mega';
import DropList from './DropList';
import NavScroll from './NavScroll';
import Search from './Search';
import Basic from './Basic';
import Hamburger from './Hamburger';

function Main(props) {
  const [state] = useContext(Context);
  const {
    onToggleDark, onToggleDir,
    home, menu, prefix
  } = props;
  return (
    <div>
      { state.header === 'mixed' && <Mixed prefix={prefix} home={home} menu={menu} onToggleDark={onToggleDark} onToggleDir={onToggleDir} />}
      { state.header === 'mega' && <Mega onToggleDark={onToggleDark} onToggleDir={onToggleDir} />}
      { state.header === 'droplist' && <DropList onToggleDark={onToggleDark} onToggleDir={onToggleDir} />}
      { state.header === 'navscroll' && <NavScroll prefix={prefix} menu={menu} home={home} onToggleDark={onToggleDark} onToggleDir={onToggleDir} />}
      { state.header === 'search' && <Search onToggleDark={onToggleDark} onToggleDir={onToggleDir} />}
      { state.header === 'basic' && <Basic onToggleDark={onToggleDark} onToggleDir={onToggleDir} />}
      { state.header === 'hamburger' && <Hamburger prefix={prefix} menu={menu} home={home} onToggleDark={onToggleDark} onToggleDir={onToggleDir} />}
    </div>
  );
}

Main.propTypes = {
  home: PropTypes.bool,
  menu: PropTypes.array,
  prefix: PropTypes.string,
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired
};

Main.defaultProps = {
  home: false,
  prefix: 'ai-landing',
  menu: singleMenu.inner
};

export default Main;
