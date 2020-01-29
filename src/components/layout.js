import React from 'react'
import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const PageContainer = styled.div`
  ${tw`
    flex items-center justify-center h-screen w-full bg-gray-100
  `}
`

const Layout = ({ children }) => <PageContainer>{children}</PageContainer>

export default Layout
