import React from 'react';
import PropTypes from 'prop-types';
import { UserItem, Spinner } from 'components';

function Users({ users, loading }) {
  if (loading) return <Spinner />;

  return (
    <div className={loading ? '' : 'grid-3'}>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
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
