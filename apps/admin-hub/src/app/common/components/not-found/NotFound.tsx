import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FlexBox from '../../styles/components/FlexBox';

const NotFoundContainer = styled(FlexBox)`
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  ${({ theme }) => {
    const { colors } = theme;
    return {
      backgroundColor: colors.background,
      color: colors.text,
    };
  }}

  h2 {
    ${({ theme }) => {
      const { fontSizes, spacing } = theme;
      return {
        fontSize: fontSizes.large,
        marginBottom: spacing.medium,
      };
    }}
  }

  p {
    ${({ theme }) => {
      const { fontSizes, spacing } = theme;
      return {
        fontSize: fontSizes.medium,
        marginBottom: spacing.medium,
      };
    }}
  }

  a {
    ${({ theme }) => {
      const { colors, spacing, borders, borderRadius, fontSizes } = theme;
      return {
        fontSize: fontSizes.medium,
        textDecoration: 'none',
        padding: `${spacing.small} ${spacing.medium}`,
        border: `${borders.thin} ${colors.primary}`,
        background: colors.primary,
        borderRadius,
        cursor: 'pointer',
      };
    }}
  }
`;

export const NotFound = () => (
  <NotFoundContainer>
    <h2>404 - Page Not Found</h2>
    <p>The page you are looking for does not exist.</p>
    <Link to="/">Go to Home</Link>
  </NotFoundContainer>
);
