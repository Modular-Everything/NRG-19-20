import React from 'react';
import Card from '../Card';

const ComponentList = {
  card: Card,
};

const Components = type => {
  if (typeof ComponentList[type] === 'undefined') {
    return <div>error!</div>;
  }
  return ComponentList[type];
};

export default Components;
