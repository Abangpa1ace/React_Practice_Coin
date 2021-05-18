import React from 'react'
import styled from 'styled-components'
import DetailTableItem from './DetailTableItem';
import { flexBetween } from '../../../Styles/theme';

const DetailInfo = ({ rank, links }) => {

  return (
    <Detailinfo>
      <DetailTable>
        <DetailTableItem 
          title="시가총액" 
          value={`Rank #${rank}`} 
        isTop />
        <DetailTableItem 
          title="웹사이트" 
          value={links && 
            <a href={links.homepage[0]}>
              {links.homepage[0] && links.homepage[0].split(".").slice(1).join(".")}
            </a>
          } 
        />
      </DetailTable>
      <DetailPrices>
        <div>hihi</div>
        <div>hihi</div>
      </DetailPrices>
    </Detailinfo>
  )
}

const Detailinfo = styled.section`
  ${flexBetween};
  height: 120px;
`;

const DetailTable = styled.div`
  width: 50%;
  height: 100%;
`;

const DetailPrices = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  div {
    ${flexBetween};
  }
`;

export default DetailInfo
