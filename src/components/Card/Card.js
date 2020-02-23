import React from 'react';
import PropTypes from 'prop-types';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import SbEditable from 'storyblok-react';

import CardImage from '../CardImage';
import Subtitle from '../Subtitle';
import Title from '../Title';
// import TextBlock from '../TextBlock';
import CallToAction from '../CallToAction';

// ============================================================================

const Card = props => {
  const { blok } = props;
  const { title, subtitle, cta, image, width } = blok;

  const StyledCard = styled.li`
    ${tw`
      bg-white
      shadow-lg
      cursor-pointer
      rounded-t
      rounded-b-lg
    `}
    grid-column: span ${width};
    height: fit-content;

    @media (max-width: 639px) {
      grid-column: span 12;
    }
  `;

  const CardContent = styled.div`
    ${tw`p-6`}
  `;

  return (
    <SbEditable content={blok}>
      <StyledCard>
        <Link to="/">
          <CardImage is={image} />
          <CardContent>
            <Subtitle is={subtitle} />
            <Title isCard is={title} />
            {/* <TextBlock truncate={truncate} /> */}
            <CallToAction is={cta} />
          </CardContent>
        </Link>
      </StyledCard>
    </SbEditable>
  );
};

// ============================================================================

Card.propTypes = {
  blok: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    cta: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
  }).isRequired,
};

// ============================================================================

export default Card;
