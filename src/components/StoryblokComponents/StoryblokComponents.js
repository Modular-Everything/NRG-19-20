import ComponentNotFound from '../ComponentNotFound';
import Page from '../Page';
import Services from '../Services';
import Contact from '../Contact';
import ContactDynamic from '../ContactDynamic';
import Grid from '../Grid';
import Card from '../Card';
import Copy from '../Copy';
import ProjectIntro from '../ProjectIntro';
import PageIntro from '../PageIntro';
import StaticImage from '../StaticImage';
import HeroImage from '../HeroImage';
import Video from '../Video';
import Credits from '../Credits';
import ContactCard from '../ContactCard';
import EmailCard from '../EmailCard';
import Spacer from '../Spacer';

// ============================================================================

const ComponentList = {
  page: Page,
  services: Services,
  contact: Contact,
  emailCard: EmailCard,
  contactCard: ContactCard,
  contactDyn: ContactDynamic,
  gridContact: Grid,
  grid: Grid,
  card: Card,
  copy: Copy,
  projectIntro: ProjectIntro,
  pageIntro: PageIntro,
  image: StaticImage,
  heroImage: HeroImage,
  video: Video,
  credits: Credits,
  spacer: Spacer,
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
