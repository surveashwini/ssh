import styled from "styled-components";
import { Button } from "./Button";

export const DangerButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.danger};
  color: ${(props) => props.theme.colors.background};
  border: none;
  margin:  ${(props) => props.theme.spacing(2)};
`;