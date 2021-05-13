import React from 'react';
import styled from 'styled-components';
import ListRouter from '../../Components/Main/ListRouter';

const Bookmark = () => {
  return (
    <BookmarkPage>
      <ListRouter focused='bookmark' />
    </BookmarkPage>
  )
}

const BookmarkPage = styled.main`
  width: ${({ theme }) => theme.widthWeb};
  margin: 0 auto;
  padding: 60px;
`;

export default Bookmark;
