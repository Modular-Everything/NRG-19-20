import React from 'react';
import PropTypes from 'prop-types';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import Image from '../Image';
import Subtitle from '../Subtitle';
import Title from '../Title';
import CallToAction from '../CallToAction';
import SampleImage from '../../../static/images/emotion-js.png';

// ============================================================================

const Card = props => {
  const { title, subtitle, cta, link } = props;

  return (
    <StyledCard onClick={() => link.click}>
      <Link to={link}>
        <Image src={SampleImage} />
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

const StyledCard = styled.li`
  ${tw`
    bg-white
    shadow-lg
    cursor-pointer
    rounded-b-lg
  `}
`;

const CardContent = styled.div`
  ${tw`
    p-6
  `}
`;

// ============================================================================

Card.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  cta: PropTypes.string,
  link: PropTypes.string.isRequired,
};

Card.defaultProps = {
  title: 'Title goes here',
  subtitle: 'Sub-title',
  cta: 'Call to Action',
};

// ============================================================================

export default Card;
