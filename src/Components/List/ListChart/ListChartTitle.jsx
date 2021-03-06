import React from 'react'
import styled from 'styled-components'
import { chartGrids } from '../../../Styles/theme';

const ListChartTitle = () => {
  return (
    <ChartTitle>
      <p></p>
      <p className="left">자산</p>
      <p></p>
      <p>Price</p>
      <p>1H</p>
      <p>24H</p>
      <p>7D</p>
      <p>24H Volume</p>
    </ChartTitle>
  )
}

const ChartTitle = styled.div`
  ${chartGrids};
  padding-top: 10px;
  padding-bottom: 10px;
  background: ${({ theme }) => theme.gray0};
  color: ${({ theme }) => theme.gray2};
  border-radius: 3px;
  font-size: 12px;
`;

export default ListChartTitle;
