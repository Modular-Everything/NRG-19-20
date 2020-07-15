/* eslint-disable no-use-before-define */
import React from 'react';
import PropTypes from 'prop-types';
import SbEditable from 'storyblok-react';
import ReactMarkdown from 'react-markdown';

import styled from '@emotion/styled';
import tw from 'tailwind.macro';

import Subtitle from '../Subtitle';
import Title from '../Title';

// ============================================================================

const ContactCard = props => {
  const { blok } = props;
  const { copy, subtitle, title, titleColor, width } = blok;

  return (
    <SbEditable content={blok}>
      <Card width={width}>
        {subtitle && <Subtitle is={subtitle} />}
        {title && <Title is={title} red={titleColor === 'red' && true} />}
        <ReactMarkdown source={copy} renderers={{ paragraph: TextBlock }} />
      </Card>
    </SbEditable>
  );
};

export default ContactCard;

// ============================================================================

const Card = styled.div`
  ${tw`
    bg-white rounded-lg p-6 self-start
  `}
  box-shadow: 0 4px 10px 2px rgba(0, 0, 0, 0.1);
  grid-column: span 12;

  @media (min-width: 500px) {
    grid-column: span ${({ width }) => width};
  }
`;

// ======

const TextBlock = styled.p`
  ${tw`
    max-w-md mt-4 pt-3 text-brand-black text-sm
    sm:mt-10
  `}
  font-family: 'Simplon BP', -apple-system, 'Helvetica Neue', sans-serif;
`;

// ============================================================================

ContactCard.propTypes = {
  blok: PropTypes.shape({
    copy: PropTypes.string,
    subtitle: PropTypes.string,
    title: PropTypes.string,
    titleColor: PropTypes.string,
    width: PropTypes.string,
  }),
};

ContactCard.defaultProps = {
  blok: {
    copy: null,
    subtitle: null,
    title: null,
    titleColor: null,
    width: null,
  },
};
