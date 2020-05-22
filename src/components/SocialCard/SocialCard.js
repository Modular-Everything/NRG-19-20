import React from 'react';
import PropTypes from 'prop-types';
import SbEditable from 'storyblok-react';

import styled from '@emotion/styled';
import tw from 'tailwind.macro';

// ============================================================================

const EmailCard = props => {
  const { blok } = props;

  return (
    <SbEditable content={blok}>
      <Card width={blok.width}>
        <ul>
          {blok.social.map(node => (
            <li>
              <a
                href={node.url.cached_url}
                target="_blank"
                rel="noopener noreferrer"
                // eslint-disable-next-line no-underscore-dangle
                key={node._uid}
              >
                <img src={node.icon} alt="Social" />
              </a>
            </li>
          ))}
        </ul>
      </Card>
    </SbEditable>
  );
};

export default EmailCard;

// ============================================================================

const Card = styled.div`
  ${tw`
    bg-white rounded-lg p-6 self-start
  `}
  box-shadow: 0 4px 10px 2px rgba(0, 0, 0, 0.1);
  grid-column: span 1;

  @media (min-width: 500px) {
    grid-column: span ${({ width }) => width};
  }

  & ul {
    ${tw`
        flex flex-row justify-around
      `}
  }

  & li {
    ${tw`
        mr-8
      `}
    height: 24px;
    width: 24px;

    @media (min-width: 768px) {
      height: 28px;
      width: 28px;
    }

    &:last-of-type {
      ${tw`mr-0`}
    }

    & img {
      object-fit: cover;
      height: 100%;
    }
  }
`;

// ============================================================================

EmailCard.propTypes = {
  blok: PropTypes.shape({
    platforms: PropTypes.array.isRequired,
  }).isRequired,
};
