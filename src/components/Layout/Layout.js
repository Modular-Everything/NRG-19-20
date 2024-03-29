import React from 'react';
import PropTypes from 'prop-types';

// ============================================================================

const Layout = props => {
  const { children } = props;

  return (
    <>
      <main>{children}</main>
    </>
  );
};

// ============================================================================

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

// ============================================================================

export default Layout;
