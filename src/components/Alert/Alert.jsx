import React from 'react';
import PropTypes from 'prop-types';

function Alert({ alert }) {
  return (
    alert && (
      <div className={`alert alert-${alert.type}`}>
        <i className='fas fa-info-circle' /> {alert.message}
      </div>
    )
  );
}

Alert.propTypes = {
  alert: PropTypes.object,
};

Alert.defaultProps = {
  alert: null,
};

export default Alert;
