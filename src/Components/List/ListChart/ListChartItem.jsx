import React from 'react'
import styled from 'styled-components'
import { Paragraph } from '../../../Shared/StyledTags';
import PercentParagraph from '../../../Shared/PercentParagraph';
import { chartGrids } from '../../../Styles/theme';
import StarToast from '../../../Shared/StarToast';
import { Link } from 'react-router-dom';

const ListChartItem = ({
  id,
  isBooked,
  name,
  symbol,
  price,
  isKRW,
  per1h,
  per24h,
  per7d,
  volume
}) => {

  const letterPrice = (value) => {
    const unit = isKRW ? '₩ ' : '$ ';
    if (value) {
      return unit + (Math.round(value.toFixed(2) * 100) / 100).toLocaleString();
    }
  }

  return (
    <ChartItem>
      <StarToast id={id} isBooked={isBooked} />
      <p className="left">
        <Link to={`/detail/${id}`}>{name}</Link>
      </p>
      <Paragraph
        color={({ theme }) => theme.gray2}
        fontSize="12px"
      >
        {symbol}
      </Paragraph>
      <p>
        {letterPrice(price)}
      </p>
      <PercentParagraph>
        {per1h}
      </PercentParagraph>
      <PercentParagraph>
        {per24h}
      </PercentParagraph>
      <PercentParagraph>
        {per7d}
      </PercentParagraph>
      <p>
        {letterPrice(volume)}
      </p>
    </ChartItem>
  )
}

const ChartItem = styled.li`
  ${chartGrids};
  padding-top: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid ${({ theme }) => theme.gray0};
  
  p {
    font-size: 13px;
    font-weight: 600;
  }
`;

export default ListChartItem
