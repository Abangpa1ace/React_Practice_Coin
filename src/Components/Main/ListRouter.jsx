import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { flexCenter } from '../../Styles/theme';

const ListRouter = ({ focused }) => {
  return (
    <Listrouter>
      <ListLinker to="/" isfocused={focused === 'list'}>가상자산 시세 목록</ListLinker>
      <ListLinker to="/bookmark" isfocused={focused === 'bookmark'}>북마크 목록</ListLinker>
    </Listrouter>
  )
}

const Listrouter = styled.div`
  ${flexCenter};
  width: 100%;
  background: ${({ theme }) => theme.gray0};
  border-radius: ${({ theme }) => theme.radius};
`;

const ListLinker = styled(Link)`
  display: block;
  width: 50%;
  padding: 15px;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  border-radius: ${({ theme }) => theme.radius};

  background: ${({ isfocused }) => isfocused ? '#ffffff' : 'transparent'};
  color: ${({ theme, isfocused }) => isfocused ? "black" : theme.gray2};
  box-shadow: ${({ theme, isfocused }) => isfocused && `0px 0px 5px 1px ${theme.gray1}`};
`;

export default ListRouter
