import React from 'react';
import PropTypes from 'prop-types';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';

// ============================================================================

const CardImage = props => {
  const { is: image } = props;

  const StyledImage = styled.img`
    ${tw`rounded-t rounded-b-lg`};
  `;

  return (
    <>
      <StyledImage src={image} alt="" />
    </>
  );
};

// ============================================================================

CardImage.propTypes = {
  is: PropTypes.string.isRequired,
};

// ============================================================================

export default CardImage;

// import React from 'react';
// import PropTypes from 'prop-types';
// import tw from 'tailwind.macro';
// import Img from 'gatsby-image';

// import Container from '../Container';
// import Caption from '../Caption';

// // ============================================================================

// const CardImage = props => {
//   const { src: image, isHero, isCard, isStatic, caption } = props;

//   const CardImg = () => <Img css={tw`rounded-t rounded-b-lg`} fluid={image} />;

//   const HeroImg = () => (
//     <Img css={tw`-mt-32 mb-4 h-screen sm:h-auto`} fluid={image} />
//   );

//   const StaticImg = () => (
//     <Container>
//       <Img css={tw`rounded mb-4`} fluid={image} />
//       {caption && <Caption is={caption} />}
//     </Container>
//   );

//   return (
//     <>
//       {isCard && <CardImg />}
//       {isHero && <HeroImg />}
//       {isStatic && <StaticImg />}
//     </>
//   );
// };

// // ============================================================================

// Image.propTypes = {
//   src: PropTypes.string,
//   isHero: PropTypes.bool,
//   isCard: PropTypes.bool,
//   isStatic: PropTypes.bool,
//   caption: PropTypes.string,
// };

// Image.defaultProps = {
//   src: null,
//   isHero: false,
//   isCard: false,
//   isStatic: false,
//   caption: undefined,
// };

// // ============================================================================

// export default CardImage;