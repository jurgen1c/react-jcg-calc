import PropTypes from 'prop-types';

export default function Button({ name, key }) {
  return (
    <button type="button" name={name} key={key} className={(name === '0' ? 'o-btn' : 'btn')}>
      {name}
    </button>
  );
}
Button.propTypes = {
  name: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
};
