import { css } from 'styled-components';

const theme = {
  widthWeb: '1000px',
  gray0: '#F4F4F4',
  gray1: '#C4C4C4',
  gray2: '#B0B0B0',
  gray3: '#636363',
  rateRed: '#D04138',
  rateBlue: '#3083DB',
  radius: '5px',
  transition: 'all .3s ease',
  zLoader: 200,
}

export default theme;

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const flexBetween = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const flexAlign = css`
  display: flex;
  align-items: center;
`;