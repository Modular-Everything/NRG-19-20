import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Fade from 'react-reveal/Fade';

import tw from 'tailwind.macro';
import { keyframes } from '@emotion/core';
import styled from '@emotion/styled';

import Container from '../Container';
import Makers from '../../../static/images/makers.svg';

// ============================================================================

const Footer = () => {
  const query = useStaticQuery(graphql`
    {
      storyblokEntry(name: { eq: "Footer" }) {
        content
      }
    }
  `);

  const data = JSON.parse(query.storyblokEntry.content);

  return (
    <StyledFooter>
      <Fade ssrFadeout>
        <Container>
          <Top>
            <div>
              <p>{data.caption}</p>
              <Contact href={`mailto:${data.email}`}>{data.email}</Contact>
            </div>

            <div>
              <a href="/">
                <MakersImg
                  src={Makers}
                  alt="NRG &bull; Creators, Makers and Builders."
                />
              </a>
            </div>
          </Top>

          <Bottom>
            <Social>
              {data.social.map(node => (
                // eslint-disable-next-line no-underscore-dangle
                <li key={node._uid}>
                  <a
                    href={node.url.cached_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {node.name}
                  </a>
                </li>
              ))}
            </Social>
            <p>&copy; NRG 2020</p>
          </Bottom>
        </Container>
      </Fade>
    </StyledFooter>
  );
};

// ============================================================================

const StyledFooter = styled.footer`
  ${tw`py-6 sm:py-12`}
  color: var(--color-white-primary);
  background-color: var(--color-black-primary);
  font-family: 'Simplon BP', -apple-system, 'Helvetica Neue', sans-serif;
  box-shadow: 0 500px 0 500px var(--color-black-primary);
`;

const Top = styled.div`
  ${tw`
    flex
    justify-between
    text-sm
  `}

  & p {
    ${tw`
      hidden sm:block
    `}
  }
`;

const Bottom = styled.div`
  ${tw`
    text-sm mt-8
    sm:flex sm:justify-between
  `}

  & p {
    ${tw`
      mr-6 mt-24 sm:mt-0
    `}
  }
`;

const Contact = styled.a`
  ${tw`
    mt-4 block text-sm font-medium leading-tight
    sm:text-3xl
  `}

  &:hover {
    color: var(--color-brand);
  }
`;

const AnimateRotation = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(-360deg);
  }
`;

const MakersImg = styled.img`
  ${tw`
    hidden sm:block
  `}
  animation: ${AnimateRotation} 30s linear infinite;
`;

const Social = styled.ul`
  ${tw`
    flex
    justify-start
    text-sm
    flex-wrap
  `}

  & a:hover {
    color: var(--color-brand);
  }

  & li {
    ${tw`mr-4 py-1 sm:py-0`}

    &:last-of-type {
      ${tw`m-0`}
    }
  }
`;

// ============================================================================

export default Footer;
