import React from 'react';
import { withRouter } from 'react-router-dom';
import SearchScreen from './SearchScreen';
import { historyType } from '../../types/reactRouter';

const SearchScreenContainer = ({
  history,
}) => {
  const onChange = (selectedOption) => {
    history.push(`/user/${selectedOption.node.username}`);
  };

  return (
    <SearchScreen
      onChange={onChange}
    />
  );
};

SearchScreenContainer.propTypes = {
  history: historyType.isRequired,
};

export default withRouter(SearchScreenContainer);
