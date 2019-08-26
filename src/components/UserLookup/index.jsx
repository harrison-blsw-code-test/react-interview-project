import React from 'react';
import PropTypes from 'prop-types';
import { withApollo } from '@apollo/react-hoc';
import UserLookup from './UserLookup';
import dataTransformer from './dataTransformer';
import { searchUsersQuery } from './queries.gql';

const UserLookupContainer = ({
  client,
}) => {
  const loadOptions = (query) => client.query({
    query: searchUsersQuery,
    variables: {
      query,
    },
  }).then(({ data, errors }) => {
    if (errors) {
      // TODO: add error into a global snackbar notification
      return [];
    }
    return dataTransformer(data);
  });

  return (
    <UserLookup
      loadOptions={loadOptions}
    />
  );
};

UserLookupContainer.propTypes = {
  client: PropTypes.shape({
    query: PropTypes.func.isRequired,
  }).isRequired,
};

export default withApollo(UserLookupContainer);
