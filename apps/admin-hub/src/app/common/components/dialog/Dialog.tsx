import { useDialog } from "./DialogContext";
import { Overlay, Content, CloseButton } from './Dialog.styled';

const Dialog = () => {
    const { isDialogOpen, dialogContent, closeDialog } = useDialog();

    if(!isDialogOpen) return null;

    return (
        <Overlay onClick={closeDialog}>
        <Content onClick={(e) => e.stopPropagation()}>
          <CloseButton onClick={closeDialog}>×</CloseButton>
          {dialogContent}
        </Content>
      </Overlay>
    )
}

export default Dialog;