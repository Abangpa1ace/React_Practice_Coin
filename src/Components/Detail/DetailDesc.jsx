import React from 'react';
import styled, { keyframes } from 'styled-components';

const DetailDesc = ({ description, isShowDesc, setIsShowDesc }) => {
  return (
    <Detaildesc>
      <DetailDescBtn onClick={() => setIsShowDesc((prev) => !prev)}>
        설명{isShowDesc ? "숨기기 ▲" : "보기 ▼"}
      </DetailDescBtn>
      {(isShowDesc && (description.ko || description.en)) &&
        <DetailDescText>
          {description && 
            description.ko ? description.ko : description.en}
        </DetailDescText>
      }
    </Detaildesc>
  )
}

const Detaildesc = styled.section`
width: 100%;
  margin: 20px 0 0;
`;

const DetailDescBtn = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid ${({ theme }) => theme.gray1};
  font-size: 14px;
  text-align: center;
  cursor: pointer;
`;

const DetailDescText = styled.pre`
  width: 100%;
  padding: 20px 10px;
  line-height: 1.2;
  white-space: pre-wrap;
`;

export default DetailDesc
