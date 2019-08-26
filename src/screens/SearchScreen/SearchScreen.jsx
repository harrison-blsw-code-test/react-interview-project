import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import UserLookup from '../../components/UserLookup';

const SearchScreen = ({
  onChange,
}) => (
  <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justify="center"
    style={{ minHeight: '100vh' }}
  >
    <UserLookup onChange={onChange} />
  </Grid>
);

SearchScreen.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default SearchScreen;
