import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const CallToAction = props => {
  const { is: cta, to } = props;
  return <Link to={to}>{cta}</Link>;
};

CallToAction.propTypes = {};

export default CallToAction;
