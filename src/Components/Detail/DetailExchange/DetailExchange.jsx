import React from 'react'
import styled from 'styled-components'
import DetailExchangeInput from './DetailExchangeInput';
import { flexCenter } from '../../../Styles/theme';
import { RiArrowLeftRightLine } from 'react-icons/ri';

const DetailExchange = ({ exchange, handleChange, unit }) => {
  return (
    <Detailexchange>
      <h5>가격 계산</h5>
      <DetailExchangeInput 
        title="BTC"
        name="cryptocurrency"
        value={exchange.cryptocurrency}
        handleChange={handleChange}
      />
      <RiArrowLeftRightLine />
      <DetailExchangeInput 
        title={unit.toUpperCase()}
        name="currency"
        value={exchange.currency}
        handleChange={handleChange}
      />
    </Detailexchange>
  )
}

const Detailexchange = styled.section`
  ${flexCenter};
  position: relative;
  margin: 20px 0 0;
  padding: 50px;
  background: ${({ theme }) => theme.gray1};

  h5 {
    position: absolute;
    left: 15px;
    top: 15px;
  }

  svg {
    margin: 0 20px;
    font-size: 24px;
  }
`;

export default DetailExchange
