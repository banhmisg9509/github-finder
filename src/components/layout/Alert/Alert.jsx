import { AlertContext } from 'context';
import React, { useContext } from 'react';

function Alert() {
  const { alert } = useContext(AlertContext);
  return (
    alert && (
      <div className={`alert alert-${alert.type}`}>
        <i className='fas fa-info-circle' /> {alert.message}
      </div>
    )
  );
}

export default Alert;
