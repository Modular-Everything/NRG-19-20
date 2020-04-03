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
  const { title, subtitle, cta, image, width, link } = blok;

  const StyledCard = styled.li`
    ${tw`
      bg-white
      shadow-lg
      cursor-pointer
      rounded-t
      rounded-b-lg
    `}
    grid-column: span ${width !== '12-Alt' ? width : '12'};
    height: fit-content;

    & a {
      display: grid;
    }

    ${width === '12' &&
      `& a {
        grid-template-columns: 1fr 1fr;
      }`}

    ${width === '12-Alt' &&
      `& a {
        grid-template-columns: 1fr;
      }`}

    @media (max-width: 639px) {
      grid-column: span 12;
    }
  `;

  const CardContent = styled.div`
    ${tw`p-6`}
    /* This is goofy-ass syntax... */
    ${width === '12-Alt' &&
      `
        display: grid;
        grid-template-columns: 1fr 1fr;

        @media (max-width: 639px) {
          grid-template-columns: 1fr;
        }
      `}
  `;

  return (
    <SbEditable content={blok}>
      <StyledCard>
        <Link to={link !== undefined ? link.url : `/`}>
          <CardImage is={image} />
          <CardContent>
            <div>
              <Subtitle is={subtitle} />
              <Title isCard is={title} />
            </div>
            <div>
              {/* <TextBlock truncate={truncate} /> */}
              <CallToAction is={cta} />
            </div>
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
    link: PropTypes.string.isRequired,
  }).isRequired,
};

// ============================================================================

export default Card;
