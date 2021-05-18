import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import ListRouter from '../../Components/List/ListRouter';
import ListChart from '../../Components/List/ListChart/ListChart';
import SelectBox from '../../Shared/SelectBox';
import { useGlobalContext } from '../../Context';
import { selectList } from '../../Data/Data';
import { flexAlign } from '../../Styles/theme';

const CoinList = () => {
  const { coinList, fetchCoins, filterCoins } = useGlobalContext();
  const [reqCount, setReqCount] = useState(1);
  const [selectValue, setSelectValue] = useState({
    filter: '전체',
    unit: 'krw',
    count: 50,
  })
  const { filter, unit, count } = selectValue;

  useEffect(() => {
    filterCoins(filter)
  }, [filter])

  useEffect(() => {
    fetchCoins(unit, count, reqCount);
  }, [unit, count, reqCount])

  const changeSelect = (select, value) => {
    setReqCount(1);
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
      <ListChart coins={coinList} unit={unit} />
      <ListMoreBtn onClick={() => setReqCount((prev) => prev + 1)}>
        + 더보기
      </ListMoreBtn>
    </CoinListPage>
  )
}

const CoinListPage = styled.main`
  width: ${({ theme }) => theme.widthListPage};
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

const ListMoreBtn = styled.div`
  padding: 20px 0;
  color: ${({ theme }) => theme.gray3};
  border-bottom: 1px solid ${({ theme }) => theme.gray0};
  font-size: 14px;
  text-align: center;
  cursor: pointer;
`;

export default CoinList;
