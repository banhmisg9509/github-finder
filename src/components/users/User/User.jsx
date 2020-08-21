import PropTypes from 'prop-types';
import React, { Fragment, useEffect } from 'react';
import { Spinner, Repos } from 'components';
import { Link } from 'react-router-dom';

function User({ loading, user, repos, getUser, getUserRepos, match }) {

  useEffect(() => {
    const username = match.params.login;
    getUser(username);
    getUserRepos(username);
    // eslint-disable-next-line
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
       <Link to='/' className='btn btn-light'>
         Back to Search
        </Link>
        Hireable:{' '}
        {user.hireable ? (
          <i className='fas fa-check text-success' />
        ) : (
          <i className='fas fa-times-circle text-danger' />
        )}
        <div className='card grid-2'>
          <div className='all-center'>
            <img src={user.avatar_url} alt='avatar' className='round-img' style={{ width: '150px' }} />
            <h1>{user.name}</h1>
            <p>Location: {user.location}</p>
          </div>
          <div>
            {user.bio && ( <Fragment> <h3>Bio</h3> <p>{user.bio}</p> </Fragment> )}
            <a href={user.html_url} className='btn btn-dark my-1'> Visit Github Profile </a>
            <ul>
              <li> {user.login && ( <Fragment> <strong>Username: </strong> {user.login} </Fragment> )} </li>
              <li> {user.company && ( <Fragment> <strong>Company: </strong> {user.company} </Fragment> )} </li>
              <li> {user.blog && ( <Fragment> <strong>Website: </strong> {user.blog} </Fragment> )} </li>
            </ul>
          </div>
        </div>
        <div className='card text-center'>
          <div className='badge badge-primary'>Followers: {user.followers}</div>
          <div className='badge badge-success'>Following: {user.following}</div>
          <div className='badge badge-light'>Public Repos: {user.public_repos}</div>
          <div className='badge badge-dark'>Public gits: {user.public_gists}</div>
        </div>
        <Repos repos={repos} />
    </Fragment>
  );
}

User.propTypes = {
  loading: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  repos: PropTypes.array.isRequired,
  getUser: PropTypes.func.isRequired,
  getUserRepos: PropTypes.func.isRequired,
};

export default User;
