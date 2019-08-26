import PropTypes from 'prop-types';
import repositoryType from './repositoryType';
import organisationType from './organisationType';

const type = PropTypes.shape({
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  repositories: PropTypes.arrayOf(repositoryType).isRequired,
  totalRepositories: PropTypes.number.isRequired,
  organisations: PropTypes.arrayOf(organisationType).isRequired,
  totalOrganisations: PropTypes.number.isRequired,
});

export default type;
