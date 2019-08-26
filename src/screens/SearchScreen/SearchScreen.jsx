import React from 'react';
import Grid from '@material-ui/core/Grid';
import UserLookup from '../../components/UserLookup';

const SearchScreen = () => (
  <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justify="center"
    style={{ minHeight: '100vh' }}
  >
    <UserLookup style={{ minWidth: '50vh' }} />
  </Grid>
);

export default SearchScreen;
