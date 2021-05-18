import React from 'react'
import styled from 'styled-components'
import DetailTableItem from './DetailTableItem';
import { flexBetween } from '../../../Styles/theme';
import { Paragraph } from '../../../Shared/StyledTags';

const DetailInfo = ({ rank, links, marketData, unit }) => {
  let prices;
  if (marketData) {
    prices = marketData.current_price;
  }



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
        <div>
          <div>
            <Paragraph
              fontSize="18px"
              fontWeight="700"
            >
              {unit === "krw" ? '₩' : '$'}
              {prices && prices[unit].toLocaleString()}
            </Paragraph>
            <Paragraph
              fontSize="12px"
              color={({ theme }) => theme.gray2}
            >
              1.00000000BTC
            </Paragraph>
          </div>
        </div>
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

  & > div {
    ${flexBetween};
  }
`;

export default DetailInfo
