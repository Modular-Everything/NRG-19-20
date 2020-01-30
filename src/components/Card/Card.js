import React from 'react';
import PropTypes from 'prop-types';

// import Image from '../Image';
import Subtitle from '../Subtitle';
import Title from '../Title';
// import CallToAction from '../CallToAction';

const Card = props => {
  const { title } = props;

  return (
    <div>
      <Subtitle is={title} />
      <Title is={title} />
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Card;
