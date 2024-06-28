import styled from "styled-components";
import { Button } from "./Button";
import { DangerButton } from "./DangerButton";

export const DialogButton = styled(Button)`
    &:focus {
        outline: none;
        box-shadow: unset; 
    }
`;


export const DialogDangerButton = styled(DangerButton)`
    &:focus {
        outline: none;
        box-shadow: unset; 
    }
`;