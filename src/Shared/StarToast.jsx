import React, { useState } from 'react';
import { BsFillStarFill } from 'react-icons/bs';
import styled, { keyframes } from 'styled-components';
import { useGlobalContext } from '../Context';

const StarToast = ({ id, isBooked }) => {
  const { coinList, setCoinList } = useGlobalContext();
  const [showToast, setShowToast] = useState(false);

  const toggleBooked = (id) => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
    const toggledList = coinList.map(coin => coin.id === id ? {...coin, booked: !coin.booked } : coin);
    setCoinList(toggledList);
  }

  

  return (
    <Startoast isBooked={isBooked} onClick={() => toggleBooked(id)}>
      <BsFillStarFill />
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
  left: 10px;
  top: 10px;
  width: 200px;
  padding: 10px;
  background: #BDCEEE;
  font-size: 14px;
  animation: ${toastAni} 3s ease;
  z-index: ${({ theme }) => theme.zToast};
`;

export default StarToast
