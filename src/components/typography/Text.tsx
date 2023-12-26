import React from 'react'
import styled from 'styled-components'

const Text = styled.div`
    letter-spacing: -1px;
    line-height: 1.5;
    font-size: ${({ theme }) => theme.text.md };
    color: ${({ theme }) => theme.colors.text.body };
`

export default Text