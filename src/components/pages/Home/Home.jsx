import React, { Fragment } from 'react';
import { Search, Users } from 'components';

function Home({ searchUsers, clearUsers, setAlert, users, loading }) {
  return (
    <Fragment>
      <Search
        searchUsers={searchUsers}
        clearUsers={clearUsers}
        setAlert={setAlert}
        showClear={users.length > 0}
      />
      <Users loading={loading} users={users} />
    </Fragment>
  );
}

export default Home;
