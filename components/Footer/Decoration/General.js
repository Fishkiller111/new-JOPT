import React from 'react';
import PropTypes from 'prop-types';
import Decoration from './Fog';

function General(props) {
  const { children } = props;

  return (
    <Decoration>
      {children}
    </Decoration>
  );
}

General.propTypes = {
  children: PropTypes.node.isRequired,
};

export default General;
