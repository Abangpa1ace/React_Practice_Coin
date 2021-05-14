import React from 'react'
import styled from 'styled-components'

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
  display: grid;
  grid-template-columns: ${({ theme }) => theme.gridColChart};
  grid-gap: 10px;
  width: 100%;
  padding: 10px 20px 10px 10px;
  background: ${({ theme }) => theme.gray0};
  color: ${({ theme }) => theme.gray2};
  border: ${({ theme }) => theme.border};
  font-size: 12px;

  p {
    text-align: right;

    &.left {
      text-align: left;
    }
  }
`;

export default ListChartTitle;
