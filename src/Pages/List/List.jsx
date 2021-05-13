import React from 'react'
import styled from 'styled-components';
import ListRouter from '../../Components/Main/ListRouter';

const List = () => {
  return (
    <ListPage>
      <ListRouter focused='list' />
    </ListPage>
  )
}

const ListPage = styled.main`
  width: ${({ theme }) => theme.widthWeb};
  margin: 0 auto;
  padding: 60px;
`;

export default List;
