
import { DialogButton, DialogDangerButton } from "@admin-hub/common/styles/components/DialogButtons";
import { ButtonContainer, Dialog, Overlay } from "./Confirmation.styled"
import FlexBox from "@admin-hub/common/styles/components/FlexBox";

const Confirmation = ({ message, onUserSelection }: any) => {
    return (
        <Overlay>
      <Dialog>
        <p>{message}</p>
        <ButtonContainer>
            <FlexBox flexdirection="row" justifycontent="center" alignitems="center">
                <DialogDangerButton onClick={() => onUserSelection(true)}>Okay</DialogDangerButton>
                <DialogButton onClick={() => onUserSelection(false)}>Cancel</DialogButton>
            </FlexBox>
        </ButtonContainer>
      </Dialog>
    </Overlay>
    )
}

export default Confirmation;