import React from 'react';

import Layout from '../components/Layout';
import Container from '../components/Container';
import CardsWrapper from '../components/CardsWrapper';
import Card from '../components/Card';

// ============================================================================

export default () => (
  <Layout>
    <Container>
      <CardsWrapper>
        <Card
          link="/1"
          title="hy charl"
          cta="make dinner"
          subtitle="chrish"
          width={4}
        />
        <Card link="/1" />
        <Card link="/1" />
        <Card link="/1" />
        <Card link="/1" width={2} />
        <Card link="/2" width={2} />
        <Card link="/3" width={1} />
        <Card link="/4" width={3} />
        <Card link="/4" width={4} />
        <Card link="/4" width={4} />
      </CardsWrapper>
    </Container>
  </Layout>
);
