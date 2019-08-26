import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import userType from '../../types/userType';

const UserScreen = ({
  user,
  isLoading,
}) => {
  const [t] = useTranslation();

  if (isLoading) {
    return <CircularProgress />;
  }
  return (
    <>
      <img src={user.image} alt={user.username} />
      <h1>{user.name}</h1>
      <p>{user.username}</p>
      <p>{user.bio}</p>
      {user.repositories.length > 0 && (
        <>
          <h2>
            {t('Repositories')}
            (
            {user.totalRepositories}
            )
          </h2>
          <ul>
            {user.repositories.map((repository) => (
              <li>{repository.name}</li>
            ))}
          </ul>
        </>
      )}
      {user.organisations.length > 0 && (
        <>
          <h2>
            {t('Organisations')}
            (
            {user.totalOrganisations}
            )
          </h2>
          <ul>
            {user.organisations.map((organisation) => (
              <li>{organisation.name}</li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

UserScreen.propTypes = {
  user: userType,
  isLoading: PropTypes.bool.isRequired,
};

UserScreen.defaultProps = {
  user: null,
};

export default UserScreen;
