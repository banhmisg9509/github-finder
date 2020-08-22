import { GithubContext, AlertContext } from 'context';
import React, { Fragment, useContext, useState } from 'react';

function Search() {
  const { searchUsers, clearUsers, users } = useContext(GithubContext);
  const { alert, setAlert } = useContext(AlertContext);
  const [text, setText] = useState('');

  const handleChange = e => {
    setText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (text === '') {
      !alert && setAlert('Please enter something.', 'light');
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
      {users.length > 0 && (
        <button className='btn btn-light btn-block' onClick={clearUsers}>
          Clear
        </button>
      )}
    </Fragment>
  );
}

export default Search;
