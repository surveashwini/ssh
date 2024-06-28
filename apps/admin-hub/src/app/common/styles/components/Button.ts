import styled from 'styled-components';

export const Button = styled.button`
  margin: ${(props) => props.theme.spacing(2)};
  background-color: ${(props) => props.theme.colors.surface};
  color: ${(props) => props.theme.colors.primary}; 
  border: 1px solid ${(props) => props.theme.colors.primary}; 
  border-radius: ${(props) => props.theme.borders.radius.medium}; 
  padding: ${(props) => props.theme.spacing(2)} ${(props) => props.theme.spacing(3)};
  font-size: ${(props) => props.theme.typography.fontSize.medium}; 
  font-weight: ${(props) => props.theme.typography.fontWeight.regular}; 
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryLight}; 
    font-weight: ${(props) => props.theme.typography.fontWeight.bold}; 
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(33, 150, 243, 0.5); 
  }

  &:disabled {
    background-color: ${(props) => props.theme.colors.disabled}; 
    border: 1px solid ${(props) => props.theme.colors.disabled}; 
    color: ${(props) => props.theme.colors.textSecondary}; 
    cursor: not-allowed;
    opacity: 0.6;
  }
`;
