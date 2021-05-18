import React from 'react'
import styled from 'styled-components';
import { flexAlign } from '../../../Styles/theme';

const DetailTableItem = ({ title, value, isTop }) => {
  return (
    <TableItem isTop={isTop}>
      <div>{title}</div>
      <div>{value}</div>
    </TableItem>
  )
}

const TableItem = styled.div`
  ${flexAlign};
  height: 50%;
  text-align: left;
  border: 1px solid ${({ theme }) => theme.gray1};
  border-top: ${({ isTop, theme }) => isTop ? `1px solid ${theme.gray1}` : "none" };

  div {
    padding: 20px 15px;

    &:nth-child(1) {
      width: 30%;
      height: 100%;
      background: ${({ theme }) => theme.gray0};
    }

    &:nth-child(2) {
      width: 70%;
    }

    a {
      text-decoration: underline;
    }
  }
`;

export default DetailTableItem;
