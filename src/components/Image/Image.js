import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import tw from 'tailwind.macro';
import Img from 'gatsby-image';

// ============================================================================

const Image = props => {
  const data = useStaticQuery(graphql`
    query Placeholder {
      file(name: { eq: "default" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const placeholder = data.file.childImageSharp.fluid;
  const { src: image } = props;

  return (
    <Img
      css={tw`rounded-t rounded-b-lg`}
      fluid={image === null ? placeholder : image}
    />
  );
};

// ============================================================================

Image.propTypes = {
  src: PropTypes.string,
};

Image.defaultProps = {
  src: null,
};

// ============================================================================

export default Image;
