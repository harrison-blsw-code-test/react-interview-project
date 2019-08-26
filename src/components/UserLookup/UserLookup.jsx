import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import AsyncSelect from 'react-select/async';
import UserLookupOption from '../UserLookupOption';
import styles from './styles';

const UserLookup = ({
  loadOptions,
}) => {
  const [t] = useTranslation();

  return (
    <AsyncSelect
      placeholder={t('Github username or name')}
      loadOptions={loadOptions}
      formatOptionLabel={UserLookupOption}
      styles={styles}
    />
  );
};

UserLookup.propTypes = {
  loadOptions: PropTypes.func.isRequired,
};

export default UserLookup;
