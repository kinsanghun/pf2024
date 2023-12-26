import React from 'react'
import styled from 'styled-components'

const Headline1 = styled.h1`
    letter-spacing: -1px;
    line-height: 1.5;
    font-size: ${({ theme }) => theme.text.lg};
    color: ${({ theme }) => theme.colors.text.headline };
`

export default Headline1