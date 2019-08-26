import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { withRouter } from 'react-router-dom';
import { matchType } from '../../types/reactRouter';
import UserScreen from './UserScreen';
import { getUserByUsernameQuery } from './queries.gql';
import dataTransformer from './dataTransformer';

const UserScreenContainer = ({
  match,
}) => {
  const { loading, error, data } = useQuery(getUserByUsernameQuery, {
    variables: { username: match.params.username },
  });

  if (error) {
    // TODO: add error into a global snackbar notification
  }

  const user = data && !loading ? dataTransformer(data) : null;

  return (
    <UserScreen
      isLoading={loading}
      user={user}
    />
  );
};

UserScreenContainer.propTypes = {
  match: matchType.isRequired,
};

export default withRouter(UserScreenContainer);
