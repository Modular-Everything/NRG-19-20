import ComponentNotFound from '../ComponentNotFound';
import Page from '../Page';
import Grid from '../Grid';
import Card from '../Card';
import Copy from '../Copy';
import StaticImage from '../StaticImage';

// ============================================================================

const ComponentList = {
  page: Page,
  grid: Grid,
  card: Card,
  copy: Copy,
  image: StaticImage,
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
