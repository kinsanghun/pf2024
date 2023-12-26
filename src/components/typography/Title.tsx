import styled from "styled-components";

const Title = styled.div`
    letter-spacing: -1px;
    line-height: 1.5;
    font-size: ${({ theme }) => theme.text.xl };
    color: ${({ theme }) => theme.colors.text.title };
`

export default Title;