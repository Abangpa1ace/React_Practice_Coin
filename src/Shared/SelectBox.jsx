import React from 'react';
import styled from 'styled-components';

const SelectBox = ({ options, select, value, changeSelect }) => {
  return (
    <Selectbox value={value} onChange={(e) => changeSelect(select, e.target.value)}>
      {options && options.map((option) => {
        return <option value={option}>
          {!isNaN(option) ? `${option}개 ` 
            : option.length >= 3 ? `${option.toUpperCase()} `
            : option.toUpperCase()
          }
          보기
        </option>
      })}
    </Selectbox>
  )
}

const Selectbox = styled.select`
  padding: 5px 10px;
  margin: 0 0 0 20px;
  text-align-last: right;
  border: 0;
`;

export default SelectBox
