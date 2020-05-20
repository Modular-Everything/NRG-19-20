/* eslint-disable no-use-before-define */
import React from 'react';
// import PropTypes from 'prop-types';
import SbEditable from 'storyblok-react';

import styled from '@emotion/styled';
import tw from 'tailwind.macro';

import Subtitle from '../Subtitle';

// ============================================================================

const EmailCard = props => {
  const { blok } = props;

  const {
    emailA,
    emailALabel,
    emailB,
    emailBLabel,
    emailC,
    emailCGroup,
    emailCLabel,
  } = blok;

  return (
    <SbEditable content={blok}>
      <Card>
        <Subtitle is="Email Us" />
        <Emails>
          {emailA && (
            <Email>
              <Label>{emailALabel}</Label>
              <a href={`mailto:${emailA}@madewithnrg.com`}>
                <div>
                  {emailA}
                  <span>@madewithnrg.com</span>
                </div>
              </a>
            </Email>
          )}

          {emailB && (
            <Email>
              <Label>{emailBLabel}</Label>
              <a href={`mailto:${emailB}`}>
                <div>
                  {emailB}
                  <span>@madewithnrg.com</span>
                </div>
              </a>
            </Email>
          )}

          {emailC && (
            <Email>
              <Label>{emailCLabel}</Label>
              <a href={`mailto:${emailC}`}>
                <div>
                  {emailC}
                  <span>@madewithnrg.com</span>
                </div>
              </a>
            </Email>
          )}
        </Emails>
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
  grid-column: span 12;
`;

// ======

const Emails = styled.ul`
  font-family: 'Simplon BP', -apple-system, 'Helvetica Neue', sans-serif;
  display: grid;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

// ======

const Email = styled.li`
  & a {
    ${tw`
      leading-tight text-2xl
      md:flex-row md:text-xl
      lg:text-3xl
      xl:text-4xl
    `}
    color: var(--color-brand);

    &:hover {
      color: var(--color-white);
    }

    & span {
      ${tw`block`}
    }
  }
`;

// ======

const Label = styled.p`
  ${tw`
    text-sm mb-2 mt-4 text-brand-black
  `}
`;

// ============================================================================

EmailCard.propTypes = {};

EmailCard.defaultProps = {};
