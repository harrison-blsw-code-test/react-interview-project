import PropTypes from 'prop-types';

const type = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
});

export default type;
