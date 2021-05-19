import React from 'react';
import { Paragraph } from './StyledTags';

const PercentParagraph = ({ children, fontSize, fontWeight }) => {
  return (
    <Paragraph
      color={({ theme }) => 
        !children ? theme.gray1 :
        children > 0 ? theme.percentRed : theme.percentBlue}
      fontSize={fontSize}
      fontWeight={fontWeight}
    >
      {children ? `${children.toFixed(1)}%` : '정보없음'}
    </Paragraph>
  )
}

export default PercentParagraph;
