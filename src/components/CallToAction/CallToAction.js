import React from 'react';
import PropTypes from 'prop-types';

const CallToAction = props => {
  const { is: cta } = props;
  return <span>{cta}</span>;
};

CallToAction.propTypes = {
  is: PropTypes.string.isRequired,
};

export default CallToAction;
