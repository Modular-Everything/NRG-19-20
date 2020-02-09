import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import Header from '../Header';

// ============================================================================

const Layout = props => {
  const { children, hasHero } = props;
  const data = useStaticQuery(graphql`
    query Meta {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const SiteTitle = data.site.siteMetadata.title;

  return (
    <>
      <Helmet>
        <title>{SiteTitle}</title>
      </Helmet>
      <Header siteName={SiteTitle} hasHero={hasHero} color />
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
  hasHero: PropTypes.bool,
};

Layout.defaultProps = {
  hasHero: false,
};

// ============================================================================

export default Layout;
