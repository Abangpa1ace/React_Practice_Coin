import React from 'react';
import styled from 'styled-components';
import ListChart from '../../Components/List/ListChart/ListChart';
import ListRouter from '../../Components/List/ListRouter';
import { useGlobalContext } from '../../Context';

const BookList = () => {
  const { coinList } = useGlobalContext();

  return (
    <BookListPage>
      <ListRouter focused='bookmark' />
      <div className="spacer" />
      <ListChart coins={coinList.filter(coin => coin.booked === true)} unit="krw" />
    </BookListPage>
  )
}

const BookListPage = styled.main`
  width: ${({ theme }) => theme.widthListPage};
  margin: 0 auto;
  padding: 60px;

  div.spacer {
    height: 60px;
  }
`;

export default BookList;
