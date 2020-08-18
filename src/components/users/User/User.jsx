import { Spinner } from 'components';
import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

export default class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }

  static propTypes = {
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired,
  };

  render() {
    const { user, loading } = this.props;
    if (loading) return <Spinner />;

    return (
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
            <img
              src={user.avatar_url}
              alt='avatar'
              className='round-img'
              style={{ width: '150px' }}
            />
            <h1>{user.name}</h1>
            <p>Location: {user.location}</p>
          </div>
          <div>
            {user.bio && (
              <Fragment>
                <h3>Bio</h3>
                <p>{user.bio}</p>
              </Fragment>
            )}
            <a href={user.html_url} className='btn btn-dark my-1'>
              Visit Github Profile
            </a>
            <ul>
              <li>
                {user.login && (
                  <Fragment>
                    <strong>Username: </strong>
                    {user.login}
                  </Fragment>
                )}
              </li>
              <li>
                {user.company && (
                  <Fragment>
                    <strong>Company: </strong>
                    {user.company}
                  </Fragment>
                )}
              </li>
              <li>
                {user.blog && (
                  <Fragment>
                    <strong>Website: </strong>
                    {user.blog}
                  </Fragment>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className='card text-center'>
          <div className='badge badge-primary'>Followers: {user.followers}</div>
          <div className='badge badge-success'>Following: {user.following}</div>
          <div className='badge badge-light'>Public Repos: {user.public_repos}</div>
          <div className='badge badge-dark'>Public gits: {user.public_gists}</div>
        </div>
      </Fragment>
    );
  }
}
