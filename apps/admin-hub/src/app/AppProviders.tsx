import React from 'react';
import { ThemeProvider } from 'styled-components';
import { RouterProvider } from 'react-router-dom';

import theme from '@admin-hub/common/styles/theming/theme';
import { GlobalStyles } from '@admin-hub/App.styled';
import appRoutes from '@admin-hub/AppRoutes';
import { DialogContextProvider } from '@admin-hub/common/components/dialog/DialogContext';
import Dialog from '@admin-hub/common/components/dialog/Dialog';

export default function RootApp() {
    return (
        
        <ThemeProvider theme={theme}>
            <DialogContextProvider>
            <GlobalStyles />
            <RouterProvider router={appRoutes} /> 
            <Dialog />
            </DialogContextProvider>
        </ThemeProvider>
        
    );
}
