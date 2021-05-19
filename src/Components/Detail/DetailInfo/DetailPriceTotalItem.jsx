import React from 'react'
import styled from 'styled-components'

const DetailPriceTotalItem = ({ title, value, unit }) => {
  return (
    <PriceTotalItem>
      <p>{title}</p>
      <p>
        {unit === "krw" ? "₩" : "$"}
        {value && value.toLocaleString()}
      </p>
    </PriceTotalItem>
  )
}

const PriceTotalItem = styled.div`
  margin: 0 0 0 50px;
  text-align: right;
  font-size: 13px;

  p:first-child {
    margin: 0 0 5px;
  }
`;

export default DetailPriceTotalItem
