import React, { useState } from 'react';
import PropTypes from 'prop-types';

import tw from 'tailwind.macro';
import styled from '@emotion/styled';
import Vimeo from '@u-wave/react-vimeo';
import Container from '../Container';
import Arrow from '../../../static/images/arrowWhite.svg';

import Placeholder from '../../../static/images/placeholder.webp';

// ============================================================================

const Player = props => {
  const { videoUrl, textural } = props;
  const ref = React.createRef();
  const [playing, setPlaying] = useState(false);

  const PlayVideo = function PlayVideo() {
    setPlaying(true);
  };

  return (
    <>
      {!textural && (
        <PlayButton
          aria-label="Play Video"
          type="button"
          onClick={() => PlayVideo()}
          style={{
            display: playing ? 'none' : 'flex',
          }}
        />
      )}
      <Vimeo
        ref={ref}
        video={videoUrl}
        paused={!playing}
        background={textural}
        loop={textural}
        autoplay={textural}
        muted={textural}
        responsive={!textural}
        className="react-player"
      />
    </>
  );
};

// ============================================================================

const Video = props => {
  const { isHero, grid, blok, node, firstBlok, caption, link } = props;
  const isFirstBlok = firstBlok === node.component;

  if (grid) {
    return (
      <StyledVideoContained>
        <Player videoUrl={blok.videoUrl} textural={blok.textural} />
      </StyledVideoContained>
    );
  }

  return (
    <StyledVideoFull
      isHero={isHero}
      isFirstBlok={isFirstBlok}
      textural={node.textural !== undefined ? node.textural : true}
      bg={Placeholder}
    >
      {caption && (
        <Overlay>
          <Container>
            <p>
              {link ? (
                <a href={link} target="_blank" rel="noopener noreferrer">
                  {caption}
                  <span>
                    <img src={Arrow} alt="->" />
                  </span>
                </a>
              ) : (
                <>
                  {caption}
                  <span>
                    <img src={Arrow} alt="->" />
                  </span>
                </>
              )}
            </p>
          </Container>
        </Overlay>
      )}

      <Player
        videoUrl={node.videoUrl}
        textural={node.textural !== undefined ? node.textural : true}
      />
    </StyledVideoFull>
  );
};

// ============================================================================

const StyledVideoContained = styled.div`
  ${tw`bg-black overflow-hidden relative rounded-lg`}
  grid-column: span 12;

  & div,
  & iframe {
    ${tw`rounded-lg`}
  }
`;

const StyledVideoFull = styled.div`
  ${tw`bg-black overflow-hidden relative w-full`}
    background-size: cover;
  ${props => props.bg && `background-image: url(${props.bg});`}
  ${props => props.isHero && props.isFirstBlok && tw`-mt-40`}
  ${props => !props.textural && `min-height: 400px`}
  ${props =>
    props.textural &&
    `
      height: 90vh;
  `}

  & .react-player {
    transform: scale(3.5);

    @media (min-width: 768px) {
      transform: scale(2);
    }

    @media (min-width: 1024px) {
      transform: scale(1.5);
    }

    ${tw`
      w-full h-full
    `}
  }

  & .react-player iframe {
    ${tw`
      h-full w-full object-fit
    `}
  }
`;

const PlayButton = styled.span`
  ${tw`
    absolute bg-white cursor-pointer flex h-24 inset-x-0 invisible items-center justify-center mx-auto rounded-full shadow-xl text-red-600 w-24
    sm:block sm:visible
    lg:h-32 lg:w-32
  `}
  padding: 50% 50% 0 0;
  bottom: 1rem;
  display: flex;
  z-index: 999;

  & p {
    ${tw`ml-2 leading-4`}
  }

  padding: 0;
  top: calc(50% - 3rem);

  &::before {
    border-color: transparent transparent transparent var(--color-brand);
    content: '';
    box-sizing: border-box;
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 16px 0 16px 24px;
    margin-left: 6px;

    @media (min-width: 768px) {
      border-width: 23px 0 23px 32px;
      transition-property: opacity;
      transition-duration: 250ms;
    }
  }
`;

const Overlay = styled.div`
  ${tw`
    absolute bottom-0 h-32 w-full z-40
  `}

  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.8)
  );

  & a,
  & p {
    font-family: 'Simplon BP', -apple-system, 'Helvetica Neue', sans-serif;
    ${tw`
      flex items-center mt-6 text-sm text-white
      md:text-base
    `}

    & img {
      ${tw`w-3 ml-2`}
    }
  }

  & a:hover {
    ${tw`underline`}
  }
`;

// ============================================================================

Video.propTypes = {
  firstBlok: PropTypes.string,
  isHero: PropTypes.bool,
  grid: PropTypes.bool,
  blok: PropTypes.shape({
    textural: PropTypes.bool,
    videoUrl: PropTypes.string,
  }),
  node: PropTypes.shape({
    textural: PropTypes.bool,
    videoUrl: PropTypes.string,
    component: PropTypes.string.isRequired,
  }),
};

Video.defaultProps = {
  firstBlok: undefined,
  isHero: false,
  grid: false,
  blok: PropTypes.shape({
    textural: false,
    videoUrl: 'https://vimeo.com/362097506',
  }),
  node: PropTypes.objectOf({
    textural: false,
    videoUrl: 'https://vimeo.com/362097506',
  }),
};

Player.propTypes = {
  videoUrl: PropTypes.string,
  textural: PropTypes.bool,
};

Player.defaultProps = {
  videoUrl: 'https://vimeo.com/362097506',
  textural: false,
};

// ============================================================================

export default Video;
