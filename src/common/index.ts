import styled from "styled-components";

export const column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const row = styled(column)`
  flex-direction: row;
`;

export const respTypography = styled(column)<{size: number}>`
  @media (orientation: landscape) {
    font-size: ${props => `${props.size}vw`};
    line-height: ${props => `${props.size + 1.3}vw`};
  }

  @media (orientation: portrait) {
    font-size: ${props => `${props.size}vw`};
    line-height: ${props => `${props.size + 1.3}vh`};
  }
`;
