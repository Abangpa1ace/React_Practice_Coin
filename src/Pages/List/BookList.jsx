import React from 'react';
import styled from 'styled-components';
import ListChart from '../../Components/List/ListChart/ListChart';
import ListRouter from '../../Components/List/ListRouter';

const BookList = () => {
  return (
    <BookListPage>
      <ListRouter focused='bookmark' />
      <ListChart coins unit="krw" />
    </BookListPage>
  )
}

const BookListPage = styled.main`
  width: ${({ theme }) => theme.widthWeb};
  margin: 0 auto;
  padding: 60px;
`;

export default BookList;
