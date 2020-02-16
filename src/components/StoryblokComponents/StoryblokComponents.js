import ComponentNotFound from '../ComponentNotFound';
import Page from '../Page';
import Card from '../Card';
import Grid from '../Grid';

// ============================================================================

const ComponentList = {
  page: Page,
  grid: Grid,
  card: Card,
};

// ============================================================================

const Components = type => {
  if (typeof ComponentList[type] === 'undefined') {
    return ComponentNotFound;
  }
  return ComponentList[type];
};

// ============================================================================

export default Components;
