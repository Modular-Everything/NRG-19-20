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
        <Card link="/1" width={12} />
      </CardsWrapper>
      <CardsWrapper>
        <Card link="/1" width={4} />
        <Card link="/1" width={4} />
        <Card link="/1" width={4} />
      </CardsWrapper>
      <CardsWrapper>
        <Card link="/1" width={6} />
        <Card link="/1" width={6} />
        <Card link="/1" width={4} />
        <Card link="/1" width={8} />
      </CardsWrapper>
    </Container>
  </Layout>
);
