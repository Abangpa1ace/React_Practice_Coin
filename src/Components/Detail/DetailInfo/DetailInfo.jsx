import React from 'react'
import styled from 'styled-components'
import DetailTableItem from './DetailTableItem';
import { Paragraph } from '../../../Shared/StyledTags';
import PercentParagraph from '../../../Shared/PercentParagraph';
import { flexBetween, flexCenter } from '../../../Styles/theme';
import DetailPriceTotalItem from './DetailPriceTotalItem';

const DetailInfo = ({ rank, links, marketData, unit }) => {
  let prices, rates, capRates, cap, volume;
  if (marketData) {
    prices = {
      krw: marketData.current_price.krw, 
      usd: marketData.current_price.usd
    }
    rates = {
      krw: marketData.price_change_percentage_24h_in_currency.krw,
      usd: marketData.price_change_percentage_24h_in_currency.usd,
    }
    capRates = {
      krw: marketData.market_cap_change_percentage_24h_in_currency.krw,
      usd: marketData.market_cap_change_percentage_24h_in_currency.usd,
    }
    cap = marketData.market_cap;
    volume = marketData.total_volume;
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
        <DetailPriceParas>
          <Paragraph
            margin="0 15px 0 0"
            fontSize="18px"
            fontWeight="700"
          >
            {unit === "krw" ? '₩' : '$'}
            {prices && prices[unit].toLocaleString()}
          </Paragraph>
          <PercentParagraph
            fontWeight="700"
          >
            {rates && rates[unit]}
          </PercentParagraph>
        </DetailPriceParas>
        <DetailPriceParas>
          <Paragraph
            fontSize="12px"
            color={({ theme }) => theme.gray2}
            margin="0 15px 0 0"
          >
            1.00000000BTC
          </Paragraph>
          <PercentParagraph
            fontSize="12px"
          >
            {capRates && capRates[unit]}
          </PercentParagraph>
        </DetailPriceParas>
        <DetailPriceTotals>
          <DetailPriceTotalItem 
            title="시가총액"
            value={cap && cap[unit]}
            unit={unit}
          />
          <DetailPriceTotalItem 
            title="24시간 거래대금"
            value={volume && volume[unit]}
            unit={unit}
          />
        </DetailPriceTotals>
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
  justify-content: flex-end;
  align-items: flex-end;
`;

const DetailPriceParas = styled.div`
  ${flexCenter};
  margin: 0 0 10px;
`;

const DetailPriceTotals = styled.div`
  ${flexCenter};
  margin: 20px 0 0;
`;

export default DetailInfo
