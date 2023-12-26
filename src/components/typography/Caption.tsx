import styled from "styled-components";

const Caption = styled.div`
    letter-spacing: -1px;
    line-height: 1.5;
    font-size: ${({ theme }) => theme.text.sm };
    color: ${({ theme }) => theme.colors.text.caption };
`

export default Caption;