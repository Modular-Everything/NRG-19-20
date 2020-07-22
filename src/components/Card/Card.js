import React from 'react';
import PropTypes from 'prop-types';

import Fade from 'react-reveal/Fade';

import tw from 'tailwind.macro';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import SbEditable from 'storyblok-react';

import CardVideo from '../CardVideo';
import CardImage from '../CardImage';
import Subtitle from '../Subtitle';
import Title from '../Title';
import TextBlock from '../TextBlock';
import CallToAction from '../CallToAction';

// ============================================================================

const Card = props => {
  const { blok } = props;
  const { title, subtitle, cta, image, width, link, excerpt } = blok;

  const StyledCard = styled.li`
    ${tw`
      bg-white
      cursor-pointer
      rounded-lg
      h-full
    `}
    box-shadow: 0 4px 10px 2px rgba(0, 0, 0, 0.1);
    transition: 150ms ease all;
    grid-column: span 12;

    @media (min-width: 500px) {
      grid-column: span ${width !== '4' ? '12' : '6'};
    }

    @media (min-width: 768px) {
      grid-column: span ${width !== '12-Alt' ? width : '12'};
    }

    &:hover {
      transform: scale(0.97);
      box-shadow: 0 2px 6px 2px rgba(0, 0, 0, 0.15);
    }

    & a {
      display: grid;
    }

    ${width === '12' &&
      `& a {
        grid-template-columns: 1fr 1fr;

        @media (max-width: 639px) {
          grid-template-columns: 1fr;
        }
      }`}

    ${width === '12-Alt' &&
      `& a {
        grid-template-columns: 1fr;
      }`}
  `;

  const CardContent = styled.div`
    ${tw`p-6`}
    ${width === '12-Alt' &&
      `
        display: grid;
        grid-template-columns: 1fr 1fr;

        @media (max-width: 639px) {
          grid-template-columns: 1fr;
        }
      `}
  `;

  const ext = RegExp(/(.mp4)/);

  return (
    <SbEditable content={blok}>
      <StyledCard itemscope itemtype="http://schema.org/article">
        <Fade ssrFadeout>
          <Link to={link !== undefined ? `/${link.cached_url}` : `/`}>
            {ext.test(image) ? (
              <CardVideo is={image} />
            ) : (
              <CardImage is={image} altRatio={width === '12-Alt'} itemprop="image" />
            )}
            <CardContent>
              <div>
                <Subtitle is={subtitle} />
                <Title isCard is={title} heading="h2" itemprop="name" />
              </div>
              <div>
                <TextBlock is={excerpt} itemprop="description" />
                <CallToAction is={cta} color="white" />
              </div>
            </CardContent>
          </Link>
        </Fade>
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
    link: PropTypes.objectOf(PropTypes.string).isRequired,
    excerpt: PropTypes.string.isRequired,
  }).isRequired,
};

// ============================================================================

export default Card;
