import PropTypes from 'prop-types';
import React, { Fragment, useState } from 'react';

function Search({ searchUsers, toggleAlert, clearUsers, showClear }) {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text === '') {
      toggleAlert('Please enter something.', 'light');
      return;
    }

    searchUsers(text);
    setText('');
  };

  return (
    <Fragment>
      <form className='form' onSubmit={handleSubmit}>
        <input
          type='text'
          name='text'
          placeholder='Search users...'
          value={text}
          onChange={handleChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {showClear && (
        <button className='btn btn-light btn-block' onClick={clearUsers}>
          Clear
        </button>
      )}
    </Fragment>
  );
}

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  toggleAlert: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
};

export default Search;
