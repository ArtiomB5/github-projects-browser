import styled from "styled-components";
import * as common from "../common";

export const Card = styled(common.row)`
  border: 1px solid #485767;
  margin: 5px;
  border-radius: 15px;
`;

export const IMG = styled.img`
  width: auto;
  border-radius: 50%;


  @media (orientation: landscape) {
    height: 10vw;
  }

  @media (orientation: portrait) {
    height: 18vw;
  }
`;

export const IMGSContent = styled(common.column)`
  text-align: center;

  @media (orientation: landscape) {
    width: 12vw;
  }

  @media (orientation: portrait) {
    height: 20vw;
  }
`;

export const TextContent = styled(common.column)`
  text-align: center;

  @media (orientation: landscape) {
    width: calc(100vw - 12vw);
  }

  @media (orientation: portrait) {
    width: calc(100vw - 20vw);
  }
`;

export const Buttons = styled(common.row)`
  width: 100%;
  padding-bottom: 5px;
`;
