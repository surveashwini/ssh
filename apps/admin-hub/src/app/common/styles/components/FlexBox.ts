import React from 'react';
import styled, { css } from 'styled-components';
import { media } from '@admin-hub/common/styles/theming/media';

interface FlexBoxProps {
  alignitems?: string;
  justifycontent?: string;
  flexdirection?: string;
}

export const FlexBox = styled.div<FlexBoxProps>`
  ${({ flexdirection, alignitems, justifycontent }) => css`
    display: flex;
    flex-direction: ${flexdirection};
    justify-content: ${justifycontent};
    align-items: ${alignitems};
  `}

  ${media.tablet`
    width: 100%;
  `};

  ${media.desktop`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: initial;
  `};
`;

export default FlexBox;
