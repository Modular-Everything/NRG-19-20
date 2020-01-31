import React from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';

// import Image from '../Image';
import Subtitle from '../Subtitle';
import Title from '../Title';
import CallToAction from '../CallToAction';

const Card = props => {
  const { title, subtitle, cta, link } = props;

  const fadeIn = useSpring({
    to: {
      opacity: 1,
      transform: 'translate3d(0, 0, 0)',
    },
    from: {
      opacity: 0,
      transform: 'translate3d(0, 1.5rem, 0)',
    },
  });

  return (
    <animated.div style={fadeIn}>
      <Subtitle is={subtitle} />
      <Title is={title} />
      <CallToAction is={cta} to={link} />
    </animated.div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  cta: PropTypes.string,
  link: PropTypes.string,
};

Card.defaultProps = {
  cta: 'Call to Action',
  link: false,
};

export default Card;
