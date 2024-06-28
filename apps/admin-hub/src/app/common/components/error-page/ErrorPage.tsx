import React from 'react';
import { useRouteError } from 'react-router-dom';
import FlexBox from '@admin-hub/common/styles/components/FlexBox';

export default function ErrorPage() {
  const error = useRouteError() as Error;

  return (
    <FlexBox flexdirection="row" justifycontent="center" alignitems="center">
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.message}</i>
        </p>
      </div>
    </FlexBox>
  );
}
