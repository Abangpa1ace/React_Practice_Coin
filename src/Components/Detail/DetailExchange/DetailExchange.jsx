import React from 'react'
import styled from 'styled-components'
import DetailExchangeInput from './DetailExchangeInput';
import { flexCenter } from '../../../Styles/theme';
import { RiArrowLeftRightLine } from 'react-icons/ri';

const DetailExchange = () => {
  return (
    <Detailexchange>
      <h5>가격 계산</h5>
      <DetailExchangeInput 
        title="BTC"
        value="10"
      />
      <RiArrowLeftRightLine />
      <DetailExchangeInput 
        title="BTC"
        value="10"
      />
    </Detailexchange>
  )
}

const Detailexchange = styled.section`
  ${flexCenter};
  position: relative;
  margin: 20px 0 0;
  padding: 20px;
  background: ${({ theme }) => theme.gray1};

  h5 {
    position: absolute;
    left: 15px;
    top: 15px;
  }
`;

export default DetailExchange
