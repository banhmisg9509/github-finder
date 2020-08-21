import React, { Fragment } from 'react';
import { Search, Users } from 'components';

function Home({ searchUsers, clearUsers, toggleAlert, users, loading }) {
  return (
    <Fragment>
      <Search
        searchUsers={searchUsers}
        clearUsers={clearUsers}
        toggleAlert={toggleAlert}
        showClear={users.length > 0}
      />
      <Users loading={loading} users={users} />
    </Fragment>
  );
}

export default Home;
