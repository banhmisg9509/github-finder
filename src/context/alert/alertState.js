import React, { useReducer } from 'react';
import { SET_ALERT, REMOVE_ALERT } from 'types';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';

const AlertState = ({ children }) => {
  const initialState = null

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  const setAlert = (message, type) => {
    dispatch({ type: SET_ALERT, payload: { message, type } })
    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 2500)
  }

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export default AlertState;
