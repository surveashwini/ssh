import styled from 'styled-components';

export const SectionHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.textPrimary}; 
  padding: ${(props) => props.theme.spacing(2)}; 
  margin-bottom: ${(props) => props.theme.spacing(3)};
`;

export const SectionTitle = styled.h1`
  font-size: 1.5rem; 
  font-weight: ${(props) => props.theme.typography.fontWeight.regular}; 
    margin: 0;
  color: ${(props) => props.theme.colors.primary};
`;
