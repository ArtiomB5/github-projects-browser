import styled from "styled-components";
import * as common from "../../common";

export const Column = styled(common.column)`
  font-size: 2.5vw;
`;
export const Row = styled(common.row)`
  width: 100%;
  justify-content: space-around;
  margin: 5px 0;
`;
export const Header = styled(Row)`
  width: 100%;
  text-align: left;
  justify-content: center;
`;
export const Text = styled.div`
  width: 100%;
  text-align: left;
  margin: 5px 0;
`;
export const Description = styled(Text)`
  width: 100%;
  text-align: center;
  margin: 5px 0;
`;
export const Links = styled(Column)`
  text-align: left;
`;

export const ALink = styled.a`
  text-decoration: none;
`;