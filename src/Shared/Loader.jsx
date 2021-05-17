import React from 'react'
import styled from 'styled-components';
import { flexCenter } from '../Styles/theme';

const Loader = () => {
  return (
    <LoadContainer>
      <LoadBox>
        코인 정보를 불러오는 중입니다.
      </LoadBox>
    </LoadContainer>
  )
}

const LoadContainer = styled.div`
  ${flexCenter};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: ${({ theme }) => theme.zLoader};
`;

const LoadBox = styled.div`
  ${flexCenter};
  width: 600px;
  height: 300px;
  background: #ffffff;
  font-size: 24px;
  border-radius: 10px;
`;

export default Loader
