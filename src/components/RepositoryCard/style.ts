import styled from "styled-components";
import * as common from "../../common";

export const Card = styled(common.row)`
  border: 1px solid #485767;
  margin: 5px;
  border-radius: 15px;
  width: 100%;
`;

export const IMGSContent = styled(common.column)`
  text-align: center;
  word-wrap: break-word;

  @media (orientation: landscape) {
    width: 12vw;
  }

  @media (orientation: portrait) {
    height: 20vw;
  }
`;

export const TextContent = styled(common.column)`
  text-align: center;
  word-wrap: break-word;

  @media (orientation: landscape) {
    width: calc(100% - 12vw);
  }

  @media (orientation: portrait) {
    width: calc(100% - 20vw);
  }
`;

export const Buttons = styled(common.row)`
  width: 100%;
  padding-bottom: 5px;
`;
