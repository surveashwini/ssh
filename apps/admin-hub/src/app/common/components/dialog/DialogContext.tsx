import { ReactNode, createContext, useContext, useState} from "react";

interface DialogContextType {
    isDialogOpen: boolean;
    dialogContent: ReactNode | null;
    openDialog: (content: ReactNode) => void;
    closeDialog: () => void;
}

const DialogContext = createContext<DialogContextType>({
    isDialogOpen: false,
    dialogContent: null,
    openDialog: () => {},
    closeDialog: () => {}
})

export const DialogContextProvider = ({ children }: { children : ReactNode}) => {
    const [isDialogOpen, setIsDialogOpen]  = useState(false);
    const [dialogContent, setDialogContent]  = useState<ReactNode | null>(null);


    const openDialog = (content: ReactNode) => {
        setDialogContent(content);
        setIsDialogOpen(true);
    };

    const closeDialog = () => {
        setIsDialogOpen(false);
        setDialogContent(null);
    }

    return (
        <DialogContext.Provider value={{ isDialogOpen, dialogContent, openDialog, closeDialog }}>
            {children}
        </DialogContext.Provider>
    )
}

export const useDialog = () => {
    return useContext(DialogContext);
}