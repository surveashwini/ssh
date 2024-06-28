import React from 'react';
import styled, { keyframes } from 'styled-components';

import { StyledLoader, LoaderWrapper } from '@admin-hub/common/components/loader/Loader.styled';

const Loader = () => {
  return (
    <LoaderWrapper>
      <StyledLoader role="progressbar" />
    </LoaderWrapper>
  );
};

export default Loader;
