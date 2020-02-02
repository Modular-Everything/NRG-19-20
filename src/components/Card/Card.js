import React from 'react';
import PropTypes from 'prop-types';
import tw from 'tailwind.macro';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import Image from '../Image';
import Subtitle from '../Subtitle';
import Title from '../Title';
import CallToAction from '../CallToAction';

// ============================================================================

const Card = props => {
  const { title, subtitle, cta, link, width } = props;

  const StyledCard = styled.li`
    ${tw`
      bg-white
      shadow-lg
      cursor-pointer
      rounded-t
      rounded-b-lg
    `}
    grid-column: span ${width};
  `;

  const CardContent = styled.div`
    ${tw`
      p-6
    `}
  `;

  return (
    <StyledCard onClick={() => link.click}>
      <Link
        css={css`
          display: ${width === 4 ? `grid` : `block`};
          grid-template-columns: 1fr 1fr;
        `}
        to={link}
      >
        <Image />
        <CardContent>
          <Subtitle is={subtitle} />
          <Title is={title} />
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
};

Card.defaultProps = {
  title: 'Title goes here',
  subtitle: 'Sub-title',
  cta: 'Call to Action',
  width: '2',
};

// ============================================================================

export default Card;
