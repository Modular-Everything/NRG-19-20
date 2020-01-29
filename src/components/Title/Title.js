import React from 'react';
import PropTypes from 'prop-types';

const Title = props => {
  const { is, large } = props;

  return <>{large === true ? <h2>{is}</h2> : <pre>{is}</pre>}</>;
};

Title.propTypes = {
  is: PropTypes.string.isRequired,
  large: PropTypes.string,
};

Title.defaultProps = {
  large: 'Title Name',
};

export default Title;
