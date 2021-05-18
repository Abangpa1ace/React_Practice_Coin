import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import DetailHeader from '../../Components/Detail/DetailHeader';
import DetailInfo from '../../Components/Detail/DetailInfo/DetailInfo';
import { useGlobalContext } from '../../Context';
import { COINS_API } from '../../Data/Data';


const Detail = () => {
  const { savedCoins } = useGlobalContext();
  const path = window.location.pathname.split("/").pop();
  const [coinDetail, setCoinDetail] = useState({});
  const [unit, setUnit] = useState("krw");

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
    if (savedCoin.id === path) {
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
      <div>{description && description.ko}</div>
    </DetailPage>
  )
};

const DetailPage = styled.main`
  width: ${({ theme }) => theme.widthDetailPage};
  margin: 0 auto;
  padding: 60px;
`;

export default Detail
