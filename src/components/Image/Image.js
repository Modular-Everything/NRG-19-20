import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import tw from 'tailwind.macro';
import Img from 'gatsby-image';

import Container from '../Container';

// ============================================================================

const Image = props => {
  const data = useStaticQuery(graphql`
    query Placeholder {
      file(name: { eq: "default" }) {
        childImageSharp {
          fluid(jpegQuality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const placeholder = data.file.childImageSharp.fluid;
  const { src: image, isHero, isCard, isStatic } = props;

  const CardImg = () => (
    <Img
      css={tw`rounded-t rounded-b-lg`}
      fluid={image === null ? placeholder : image}
    />
  );

  const HeroImg = () => (
    <Img
      css={tw`-mt-32 mb-4 h-screen sm:h-auto`}
      fluid={image === null ? placeholder : image}
    />
  );

  const StaticImg = () => (
    <Container>
      <Img
        css={tw`rounded-lg mb-4`}
        fluid={image === null ? placeholder : image}
      />
    </Container>
  );

  return (
    <>
      {isCard && <CardImg />}
      {isHero && <HeroImg />}
      {isStatic && <StaticImg />}
    </>
  );
};

// ============================================================================

Image.propTypes = {
  src: PropTypes.string,
  isHero: PropTypes.bool,
  isCard: PropTypes.bool,
  isStatic: PropTypes.bool,
};

Image.defaultProps = {
  src: null,
  isHero: false,
  isCard: false,
  isStatic: false,
};

// ============================================================================

export default Image;
