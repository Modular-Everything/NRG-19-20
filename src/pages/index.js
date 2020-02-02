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
          title="Title goes here"
          subtitle="Sub-Title"
          cta="Read More"
          link="/1"
        />
        <Card link="/2" />
        <Card link="/3" />
        <Card link="/4" />
      </CardsWrapper>
    </Container>
  </Layout>
);
