import React, {
  createContext,
  useReducer,
  useMemo
} from 'react';
import PropTypes from 'prop-types';
import uiState, { reducer } from '../../theme/config';

export const Context = createContext(uiState);

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, uiState);
  const value = useMemo(() => [state, dispatch], [state, dispatch]);

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
};

Store.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Store;
