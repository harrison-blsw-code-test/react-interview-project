import PropTypes from 'prop-types';

const type = PropTypes.shape({
  id: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  repositoriesCount: PropTypes.number.isRequired,
  organisationsCount: PropTypes.number.isRequired,
});

export default type;
