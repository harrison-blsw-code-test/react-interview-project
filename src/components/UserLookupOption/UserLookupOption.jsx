import React from 'react';
import userSearchResultType from '../../types/userSearchResultType';

const UserLookupOption = ({
  node,
}) => (
  <div>
    <span>{node.name}</span>
    <span>{node.username}</span>
    <span>{`${node.repositoriesCount}`}</span>
    <span>{`${node.organisationsCount}`}</span>
  </div>
);

UserLookupOption.propTypes = {
  node: userSearchResultType.isRequired,
};

export default UserLookupOption;
