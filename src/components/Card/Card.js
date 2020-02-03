import React from 'react';
import PropTypes from 'prop-types';
import tw from 'tailwind.macro';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import Image from '../Image';
import Subtitle from '../Subtitle';
import Title from '../Title';
import TextBlock from '../TextBlock';
import CallToAction from '../CallToAction';

// ============================================================================

const Card = props => {
  const { title, subtitle, cta, link, width, truncate } = props;

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
    <StyledCard onClick={() => link.click}>
      <Link
        to={link}
        css={css`
          display: block;
          @media (min-width: 640px) {
            display: ${width === 12 ? `grid` : `block`};
            grid-template-columns: 1fr 1fr;
          }
        `}
      >
        <Image />
        <CardContent>
          <Subtitle is={subtitle} />
          <Title is={title} />
          <TextBlock truncate={truncate} />
          <CallToAction is={cta} to={link} />
        </CardContent>
      </Link>
    </StyledCard>
  );
};

// ============================================================================

Card.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  cta: PropTypes.string,
  link: PropTypes.string.isRequired,
  width: PropTypes.string,
  truncate: PropTypes.number,
};

Card.defaultProps = {
  title: 'Title goes here',
  subtitle: 'Sub-title',
  cta: 'Call to Action',
  width: '6',
  truncate: null,
};

// ============================================================================

export default Card;
