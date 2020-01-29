import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { Helmet } from 'react-helmet'

// ========================
// The primary card container
const Card = styled.div`
  ${tw`
    bg-white rounded-lg shadow-xl p-12 w-full h-auto m-4
  `}
  max-width: 500px;
`
// ========================

// ========================
// The card header
const CardHeader = styled.h1`
  ${tw`text-2xl mb-4 font-bold leading-tight text-teal-800`}
`
// ========================

// ========================
// Primary copy (inc. links, etc)
const CardCopy = styled.div`
  p {
    ${tw`
      text-sm mb-2 sm:text-md mb-3 text-gray-900 leading-relaxed
    `}

    &:last-of-type {
      ${tw`
        mb-0
      `}
    }

    & a {
      ${tw`text-teal-500`}

      &:hover {
        ${tw`underline text-teal-600`}
      }
    }
  }
`
// ========================

// ========================
// A reusable divider for separating content
const Divider = styled.div`
  ${tw`w-full h-1 bg-gray-100 my-6`}
`

// ========================
// Icons for credits
const CardIcons = styled.ul`
  ${tw`
    flex flex-row
  `}

  & li {
    ${tw`flex items-center mx-6`}

    &:first-of-type,
    &:last-of-type {
      ${tw`mx-0`}
    }
  }
`
// ========================

export default ({ data }) => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>{data.site.siteMetadata.title}</title>
    </Helmet>
    <Card>
      <CardHeader>Gatsby Tailwind 2 + Emotion / Styled Components</CardHeader>
      <CardCopy>
        <p>
          A (reasonably) unopinionated Gatsby starter, including; Tailwind 2 and
          Emotion. Use Tailwind utilities with Emotion powered CSS-in-JS to
          produce component scoped CSS (no need for utilities like Purge CSS,
          etc).
        </p>
        <p>
          <strong>
            Developed by Chrish Dunne (
            <a href="https://twitter.com/__ccld">@__ccld</a>)
          </strong>
        </p>
      </CardCopy>
      <Divider />
      <CardIcons>
        {data.allImageSharp.edges.map(({ node }, index) => (
          <li key={index}>
            <Img fixed={node.fixed} alt="" />
          </li>
        ))}
      </CardIcons>
    </Card>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allImageSharp {
      edges {
        node {
          fixed(width: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`
