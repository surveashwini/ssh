import React from 'react';
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loader from "@admin-hub/common/components/loader/Loader";
import AppLayout from "@admin-hub/AppLayout";
import ErrorPage from "@admin-hub/common/components/error-page/ErrorPage";
import CustomerPage from '@admin-hub/features/components/customers/CustomerPage';
import { NotFound } from '@admin-hub/common/components/not-found/NotFound';
import FlexBox from './common/styles/components/FlexBox';
import { SectionHeader, SectionTitle } from './common/components/section-header/SectionHeader';
import NoData from './common/components/no-data/NoData';
import NinjaPage from './features/components/ninjas/NinjaPage';

const appRoutes = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true, element: (
                    <>
                    <SectionHeader>
                        <SectionTitle>Alarms</SectionTitle>
                    </SectionHeader>
                    <FlexBox alignitems='center' justifycontent='center'>
                        <NoData />
                    </FlexBox>
                    </>
                )
            },
            {
                path: '/customers',
                element: (
                    <Suspense fallback={<Loader />}>
                        <CustomerPage />
                    </Suspense>
                )
            },
            {
                path: '/ninjas',
                element: (
                    <Suspense fallback={<Loader />}>
                        <NinjaPage />
                    </Suspense>
                )
            },
            {
                path: '/operations',
                element: (
                    <Suspense fallback={<Loader />}>
                        {/* <Operations /> */}
                    </Suspense>
                )
            }
        ]
    },
    {
        path: '*',
        element: (
          <Suspense fallback={<Loader />}>
            <NotFound />
          </Suspense>
        ),
      },
])

export default appRoutes;