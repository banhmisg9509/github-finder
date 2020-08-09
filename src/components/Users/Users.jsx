import React from 'react';
import PropTypes from 'prop-types';
import { UserItem, Spinner } from 'components';

function Users({ users, loading }) {
  return (
    <div className='container'>
      <div className={loading ? '' : 'grid-4'}>
        {loading ? (
          <Spinner />
        ) : (
          users.map((user) => <UserItem key={user.id} user={user} />)
        )}
      </div>
    </div>
  );
}

Users.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
};

Users.defaultProps = {
  users: [],
  loading: false,
};

export default Users;
