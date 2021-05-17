import React from 'react';
import styled from 'styled-components';
import ListChartTitle from './ListChartTitle';
import ListChartItem from './ListChartItem';

const ListChart = ({ coins, unit }) => {
  return (
    <Listchart>
      <ListChartTitle />
      {coins && coins.map((item) => {
        const { id, booked, name, symbol, current_price, price_change_percentage_1h_in_currency, price_change_percentage_24h_in_currency, price_change_percentage_7d_in_currency, total_volume } = item;
        return <ListChartItem 
          key={id}
          id={id}
          isBooked={booked}
          name={name}
          symbol={symbol}
          price={current_price}
          isKRW={unit === "krw"}
          per1h={price_change_percentage_1h_in_currency}
          per24h={price_change_percentage_24h_in_currency}
          per7d={price_change_percentage_7d_in_currency}
          volume={total_volume}
        />
      })}
    </Listchart>
  )
}

const Listchart = styled.ul`
  width: 100%;
`;

export default ListChart
