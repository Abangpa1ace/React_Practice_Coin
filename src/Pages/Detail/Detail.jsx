import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import DetailDesc from '../../Components/Detail/DetailDesc';
import DetailExchange from '../../Components/Detail/DetailExchange/DetailExchange';
import DetailHeader from '../../Components/Detail/DetailHeader';
import DetailInfo from '../../Components/Detail/DetailInfo/DetailInfo';
import { useGlobalContext } from '../../Context';
import { COINS_API, currencyRegex } from '../../Data/Data';


const Detail = () => {
  // Coin Informations
  const { savedCoins } = useGlobalContext();
  const path = window.location.pathname.split("/").pop();
  const [coinDetail, setCoinDetail] = useState({});
  
  // Coin Exchange
  const [unit, setUnit] = useState("krw");
  const [exchange, setExchange] = useState({
    cryptocurrency: 1,
    currency: 1,
  })
  let exchangeRate = 21296653.24;
  if (unit === "usd") exchangeRate /= 1100;

  // Coin Description
  const [isShowDesc, setIsShowDesc] = useState(false);

  const fetchCoinDetail = async (path) => {
    try {
      const response = await fetch(COINS_API + `/${path}`);
      const data = await response.json();
      const coinRef = savedCoins.current.find(coin => coin.id === path);
      setCoinDetail({ 
        ...data, 
        booked: !savedCoins ? false : coinRef.booked 
      });
    }
    catch(err) {
      console.log(err);
    }
  }

  useEffect(() => {
    const savedCoin = JSON.parse(sessionStorage.getItem("coin"));
    if (savedCoin && savedCoin.id === path) {
      setCoinDetail(savedCoin);
    }
    else {
      fetchCoinDetail(path);
    }
  }, [])

  useEffect(() => {
    sessionStorage.setItem("coin", JSON.stringify(coinDetail));
  }, [coinDetail])

  const handleBook = () => {
    setCoinDetail({ ...coinDetail, booked: !coinDetail.booked })
  }

  const updateCurrency = (event) => {
    let { name, value } = event.target;
    const regex = currencyRegex[name];
    value = value.replaceAll(/,/g, "");

    if (regex.test(Number(value))) {
      if (name === "cryptocurrency" && value.split(".").pop().length > 8) {
        return;
      }
      if (name === "currency" && value[0] === "0") {
        return;
      }
      const anotherKey = Object.keys(exchange).find(key => key !== name)
      setExchange({
        [anotherKey]: name === "currency" ? (value / exchangeRate).toFixed(8) : value * exchangeRate,
        [name]: value,
      })
    }
  }

  const { 
    id, 
    booked, 
    image,
    symbol, 
    localization,
    market_cap_rank, 
    links,
    market_data,
    description,
  } = coinDetail;

  return (
    <DetailPage>
      <DetailHeader 
        id={id}
        booked={booked}
        handleBook={handleBook}
        image={image}
        localization={localization}
        symbol={symbol}
        unit={unit}
        setUnit={setUnit}
      />
      <DetailInfo 
        rank={market_cap_rank}
        links={links}
        marketData={market_data}
        unit={unit}
      />
      <DetailExchange
        exchange={exchange}
        handleChange={updateCurrency}
        unit={unit}
      />
      <DetailDesc
        description={description}
        isShowDesc={isShowDesc}
        setIsShowDesc={setIsShowDesc}
      />
    </DetailPage>
  )
};

const DetailPage = styled.main`
  width: ${({ theme }) => theme.widthDetailPage};
  margin: 0 auto;
  padding: 60px;
`;

export default Detail
