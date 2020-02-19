import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import tw from 'tailwind.macro';
import Img from 'gatsby-image';

import Container from '../Container';
import Caption from '../Caption';

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
  const { src: image, isHero, isCard, isStatic, caption } = props;

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
        css={tw`rounded mb-4`}
        fluid={image === null ? placeholder : image}
      />
      {caption && <Caption is={caption} />}
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
  caption: PropTypes.string,
};

Image.defaultProps = {
  src: null,
  isHero: false,
  isCard: false,
  isStatic: false,
  caption: undefined,
};

// ============================================================================

export default Image;
