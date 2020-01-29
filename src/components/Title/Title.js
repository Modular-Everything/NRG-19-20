import React from 'react';
import PropTypes from 'prop-types';

const Title = props => {
  const { is: title } = props;

  return <h2>{title}</h2>;
};

Title.propTypes = {
  is: PropTypes.string.isRequired,
};

export default Title;
