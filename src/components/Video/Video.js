import React, { useState } from 'react';
import PropTypes from 'prop-types';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';
import ReactPlayer from 'react-player';

// ============================================================================

const Player = props => {
  const { videoUrl } = props;
  const ref = React.createRef();
  const [playing, setPlaying] = useState(false);

  const PlayVideo = function PlayVideo() {
    setPlaying(true);
  };

  return (
    <>
      <ReactPlayer
        ref={ref}
        url={videoUrl}
        playing={playing}
        config={{
          file: { attributes: { id: 'audio-element' } },
          vimeo: {
            preload: true,
            playerOptions: {
              responsive: true,
            },
          },
          youtube: {
            preload: true,
            embedOptions: {
              responsive: true,
            },
          },
        }}
        width="100%"
        height="auto"
      />
      <PlayButton
        type="button"
        onClick={() => PlayVideo()}
        style={{
          display: playing ? 'none' : 'flex',
        }}
      >
        <p>Play</p>
      </PlayButton>
    </>
  );
};

// ============================================================================

const Video = props => {
  const { isHero, grid, blok, node, firstBlok } = props;
  const isFirstBlok = firstBlok === node.component;

  if (grid) {
    return (
      <StyledVideoContained>
        <Player videoUrl={blok.videoUrl} />
      </StyledVideoContained>
    );
  }

  return (
    <StyledVideoFull isHero={isHero} isFirstBlok={isFirstBlok}>
      <Player videoUrl={node.videoUrl} />
    </StyledVideoFull>
  );
};

// ============================================================================

const StyledVideoContained = styled.div`
  ${tw`relative bg-black rounded-lg`}
  min-height: 200px;
  grid-column: span 12;

  & div,
  & iframe {
    ${tw`rounded-lg`}
  }
`;

const StyledVideoFull = styled.div`
  ${tw`w-full relative bg-black`}
  ${props =>
    props.isHero && props.isFirstBlok && tw`-mt-32 `}
  min-height: 200px;
`;

const PlayButton = styled.span`
  ${tw`
    absolute cursor-pointer text-white text-sm
    md:text-red-600 md:bg-white md:inset-x-0 md:mx-auto md:rounded-full md:shadow-xl md:flex md:justify-center md:items-center md:w-24 md:h-24
    lg:w-32 lg:h-32
  `}
  padding: 50% 90% 0 0;
  bottom: 1rem;
  display: flex;

  & p {
    ${tw`ml-2 leading-4`}
  }

  @media (min-width: 768px) {
    padding: 0;
    top: calc(50% - 3rem);

    & p {
      display: none;
    }
  }

  &::before {
    border-color: transparent transparent transparent var(--color-white-primary);
    content: '';
    box-sizing: border-box;
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 8px 0 8px 12px;
    margin-left: 1rem;

    @media (min-width: 768px) {
      border-width: 23px 0 23px 32px;
      border-color: transparent transparent transparent var(--color-brand);
      margin-left: 6px;
      transition-property: opacity;
      transition-duration: 250ms;
    }
  }
`;

// ============================================================================

Video.propTypes = {
  firstBlok: PropTypes.string.isRequired,
  isHero: PropTypes.bool,
  grid: PropTypes.bool.isRequired,
  blok: PropTypes.shape({
    videoUrl: PropTypes.string,
  }),
  node: PropTypes.shape({
    videoUrl: PropTypes.string,
    component: PropTypes.string.isRequired,
  }),
};

Video.defaultProps = {
  isHero: false,
  blok: PropTypes.shape({
    videoUrl: 'https://vimeo.com/362097506',
  }),
  node: PropTypes.shape({
    videoUrl: 'https://vimeo.com/362097506',
  }),
};

Player.propTypes = {
  videoUrl: PropTypes.string,
};

Player.defaultProps = {
  videoUrl: 'https://vimeo.com/362097506',
};

// ============================================================================

export default Video;
