import React from 'react';
import PropTypes from 'prop-types';
import { UserItem } from 'components';

function Users({ users }) {
  return (
    <div className='container'>
      <div className='grid-4'>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

Users.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object),
};

export default Users;
