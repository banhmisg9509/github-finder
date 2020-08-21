import React from 'react';
import PropTypes from 'prop-types';
import { RepoItem } from 'components';

function Repos({ repos }) {
  return repos.map((repo) => <RepoItem repo={repo} key={repo.id} />);
}

Repos.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default Repos;
