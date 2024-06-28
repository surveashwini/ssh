import React from 'react';
import styled from 'styled-components';
import NoData from '@admin-hub/common/components/no-data/NoData';
import { ColumnContainer, ColumnHeader, DataCell, DataRow, DatatableContainer } from './Datatable.styled';
import { EditIcon } from '@admin-hub/common/styles/components/EditIcon';
import { DeleteIcon } from '@admin-hub/common/styles/components/DeleteIcon';
import FlexBox from '@admin-hub/common/styles/components/FlexBox';

const Link = styled.a`
  text-decoration: none;
  word-break: break-all;
  &:hover {
    text-decoration: underline;
  }
`;

const Datatable = ({ data , columns, editable, deletable, onEdit, onDelete }: any) => {
  return (
    <DatatableContainer
      role="table"
      tabIndex={0}
      aria-label={`Datatable`}
    >
      <ColumnContainer role="columnheader">
        {
          columns.map((column: string) => (<ColumnHeader key={column}>{column}</ColumnHeader>))
        }
        { (editable || deletable) && (<ColumnHeader>Actions</ColumnHeader>)}
      </ColumnContainer>
      { data?.length > 0 ? 
        data.map((row: any) => (
            <DataRow key={row.id}>
              {
                columns.map((cell: string) => (<DataCell>{row[cell.toLowerCase()]}</DataCell>))
              }
              <DataCell>
                  <FlexBox flexdirection='row'>
                    <EditIcon onClick={() => onEdit(row.id)} />
                    <DeleteIcon onClick={() => onDelete(row.id)} />
                  </FlexBox>
              </DataCell>
            </DataRow>
        )): (
          <NoData />
        )
      }
    </DatatableContainer>
  ) ;
};

export default Datatable;
