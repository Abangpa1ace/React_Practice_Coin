import React from 'react'
import styled from 'styled-components';
import StarToast from '../../Shared/StarToast';
import SelectBox from '../../Shared/SelectBox';
import { Paragraph } from '../../Shared/StyledTags';
import { selectList } from '../../Data/Data';
import { flexBetween } from '../../Styles/theme';

const DetailHeader = ({ id, booked, handleBook, image, localization, symbol, unit, setUnit }) => {
  const changeSelect = (_, value) => {
    setUnit(value)
  }
  
  return (
    <Detailheader>
      <DetailTitle>
        <StarToast id={id} isBooked={booked} handleBook={handleBook} />
        <img src={image && image.small} alt="코인 이미지" />
        <Paragraph
          fontSize="18px"
          fontWeight="700"
        >
          {localization && `${localization.ko} (${symbol})`}
        </Paragraph>
      </DetailTitle>
      <SelectBox 
        options={selectList.unit}
        value={unit}
        changeSelect={changeSelect}
      />
    </Detailheader>
  )
}

const Detailheader = styled.header`
  ${flexBetween};
  margin: 0 0 40px;
`;

const DetailTitle = styled.div`
  ${flexBetween};
  height: 30px;

  img {
    height: 100%;
    margin: 0 10px;
  }
`;

export default DetailHeader
