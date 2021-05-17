import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { useGlobalContext } from '../../Context';
import { COINS_API } from '../../Data/Data';

const Detail = () => {
  const { savedCoins } = useGlobalContext();
  const [coinDetail, setCoinDetail] = useState({});
  const path = window.location.pathname.split("/").pop();

  const fetchCoinDetail = async (path) => {
    try {
      const response = await fetch(COINS_API + `/${path}`);
      const data = await response.json();
      const savedCoinDetail = savedCoins.current.find(coin => coin.id === path);
      setCoinDetail(savedCoinDetail);
    }
    catch(err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchCoinDetail(path);
  }, [])

  return (
    <DetailPage>
      <img src={coinDetail.image} alt="코인 이미지" />
    </DetailPage>
  )
};

const DetailPage = styled.main`
  width: ${({ theme }) => theme.widthDetailPage};
  margin: 0 auto;
  padding: 60px;
`;

export default Detail
