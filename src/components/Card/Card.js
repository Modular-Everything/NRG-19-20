import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Image from './Image.jsx';
import Subtitle from './Subtitle.jsx';
import CallToAction from './CallToAction.jsx';
import Title from './Title.jsx';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {} = this.props;
    return (
      <div>
        <Image />
        <Subtitle />
        <CallToAction />
        <Title />
      </div>
    );
  }
}

Card.propTypes = {};

export default Card;
