import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../../ThemePalette/Store';
import PageNav from './PageNav';
import Chat from './Chat';

function Corner(props) {
  const [state] = useContext(Context);
  const { menuList, prefix } = props;

  return (
    <div>
      { state.corner === 'chat' && <Chat /> }
      { state.corner === 'nav' && <PageNav prefix={prefix} menuList={menuList} /> }
    </div>
  );
}

Corner.propTypes = {
  menuList: PropTypes.array.isRequired,
  prefix: PropTypes.string,
};

Corner.defaultProps = {
  prefix: 'ai-landing'
};

export default Corner;
