import { Spinner, UserItem } from 'components';
import { GithubContext } from 'context';
import React, { useContext } from 'react';

function Users() {
  const { loading, users } = useContext(GithubContext);

  if (loading) return <Spinner />;

  return (
    <div className={loading ? '' : 'grid-3'}>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
}

export default Users;
