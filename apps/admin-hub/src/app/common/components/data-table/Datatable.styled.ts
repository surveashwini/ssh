
import styled from 'styled-components';

export const DatatableContainer = styled.div`
  overflow: auto;
  margin: ${(props) => props.theme.spacing(10)} ${(props) => props.theme.spacing(10)};
  background-color: ${(props) => props.theme.colors.background};
  border: ${(props) => props.theme.borders.width.thin} solid lightgray;
`;

export const ColumnContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${(props) => props.theme.spacing(3)}; 
  background-color: ${(props) => props.theme.colors.surface};
  color: ${(props) => props.theme.colors.textPrimary};
`;

export const ColumnHeader = styled.div`
  font-size: ${(props) => props.theme.typography.fontSize.medium};
  font-weight: ${(props) => props.theme.typography.fontWeight.bold};
  text-align: center;
  padding: ${(props) => props.theme.spacing(3)} ${(props) => props.theme.spacing(3)};
`;

export const DataRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${(props) => props.theme.spacing(3)}; 
`;

export const DataCell = styled.div`
  padding: ${(props) => props.theme.spacing(3)} ${(props) => props.theme.spacing(3)};
  border-bottom: ${(props) => props.theme.borders.width.thin} solid ${(props) => props.theme.colors.surface}; 
  &:not(:last-child) {
    border-right: ${(props) => props.theme.borders.width.thin} solid ${(props) => props.theme.colors.surface};
  }
`;
