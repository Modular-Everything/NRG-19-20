import Card from '../Card';
import Page from '../page';
import ComponentNotFound from '../ComponentNotFound';

const ComponentList = {
  page: Page,
  feature: Card,
};

const Components = type => {
  if (typeof ComponentList[type] === 'undefined') {
    return ComponentNotFound;
  }
  return ComponentList[type];
};

export default Components;
