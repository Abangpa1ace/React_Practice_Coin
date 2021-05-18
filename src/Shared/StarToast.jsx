import React, { useState, useEffect } from 'react';
import { BsFillStarFill } from 'react-icons/bs';
import styled, { keyframes } from 'styled-components';
import { useGlobalContext } from '../Context';

const StarToast = ({ id, isBooked, handleBook }) => {
  const { coinList, setCoinList, savedCoins } = useGlobalContext();
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const toastTimer = setTimeout(() => {
      setShowToast(false);
    }, 2000);
    return () => clearTimeout(toastTimer);
  }, [showToast])

  const toggleBooked = (id, handleBook) => {
    setShowToast(true);
    if (handleBook) {
      handleBook();
    }
    else {
      const toggledList = coinList.map(coin => coin.id === id ? {...coin, booked: !coin.booked } : coin);
      setCoinList(toggledList);
      savedCoins.current = toggledList;
    }
  }

  return (
    <Startoast isBooked={isBooked}>
      <BsFillStarFill onClick={() => toggleBooked(id, handleBook)}/>
      {showToast && 
        <Toast>북마크가 {isBooked ? '설정' : '해제'}되었습니다.</Toast>
      }
    </Startoast>
  )
}

const Startoast = styled.div`
  position: relative;

  svg {
    fill: ${({ theme, isBooked }) => isBooked ? theme.starYellow : theme.gray0};
  }
`;

const toastAni = keyframes`
  0%, 100% {
    visibility: hidden;
    opacity: 0;
  }
  50% {
    visibility: visible;
    opacity: 1;
  }
`;

const Toast = styled.span`
  position: absolute;
  left: 15px;
  top: 15px;
  width: 200px;
  padding: 10px;
  visibility: hidden;
  background: #BDCEEE;
  font-size: 14px;
  border-radius: ${({ theme }) => theme.radius};
  z-index: ${({ theme }) => theme.zToast};
  animation: ${toastAni} 2s ease;
`;

export default StarToast
