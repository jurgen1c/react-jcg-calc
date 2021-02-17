import React from 'react';
import PropTypes from 'prop-types';

export default function Display({ result }) {
  return (
    <div>
      {result}
    </div>
  );
}

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: 'o',
};
