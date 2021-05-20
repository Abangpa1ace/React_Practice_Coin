import React from 'react'
import styled from 'styled-components'
import { flexAlign } from '../../../Styles/theme'

const DetailExchangeInput = ({ title, name, value, handleChange }) => {
  return (
    <ExchangeInput>
      <div>{title}</div>
      <div>
        <input 
          name={name}
          value={Number(value) < 1 ? Number(value) : Number(value).toLocaleString()}
          onChange={(e) => handleChange(e)}
        />
      </div>
    </ExchangeInput>
  )
}

const ExchangeInput = styled.div`
  ${flexAlign};
  width: 300px;
  border: 1px solid ${({ theme }) => theme.gray2};

  div {
    &:nth-child(1) {
      width: 30%;
      padding: 25px 15px;
      background: ${({ theme }) => theme.gray0};
      border-right: 1px solid ${({ theme }) => theme.gray2};
      font-size: 16px;
      font-weight: bold;
    }

    &:nth-child(2) {
      width: 70%;
      padding: 15px;
      background: #ffffff;

      input {
        padding: 10px;
        font-size: 14px;
        text-align: right;
      }
    }
  }
`;

export default DetailExchangeInput
