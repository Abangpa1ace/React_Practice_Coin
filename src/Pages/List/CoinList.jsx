import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import ListRouter from '../../Components/List/ListRouter';
import SelectBox from '../../Shared/SelectBox';
import { useGlobalContext } from '../../Context';
import { selectList } from '../../Data/Data';
import { flexAlign } from '../../Styles/theme';
import ListChartTitle from '../../Components/List/ListChartTitle';

const CoinList = () => {
  const { fetchCoins } = useGlobalContext();
  const [selectValue, setSelectValue] = useState({
    filter: '전체',
    unit: 'krw',
    count: 50,
  })
  const { filter, unit, count } = selectValue;

  useEffect(() => {
    fetchCoins(unit, count);
  }, [unit, count])

  const changeSelect = (select, value) => {
    setSelectValue({
      ...selectValue,
      [select]: value,
    })
  }

  return (
    <CoinListPage>
      <ListRouter focused='list' />
      <ListSelects>
        {Object.keys(selectValue).map(select => 
          <SelectBox
            key={select}
            options={selectList[select]}
            select={select}
            value={selectValue[select]} 
            changeSelect={changeSelect}
          />
        )}
      </ListSelects>
      <ListChart>
        <ListChartTitle />

      </ListChart>
    </CoinListPage>
  )
}

const CoinListPage = styled.main`
  width: ${({ theme }) => theme.widthWeb};
  margin: 0 auto;
  padding: 60px;
`;

const ListSelects = styled.div`
  ${flexAlign};
  justify-content: flex-end;
  width: 100%;
  padding: 10px 0;
  margin: 10px 0;
`;

const ListChart = styled.div`
  width: 100%;
`;

export default CoinList;
