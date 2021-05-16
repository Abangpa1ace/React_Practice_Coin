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
  gridColChart: '1fr 10fr 1fr 15fr 10fr 5fr 5fr 20fr', 
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

export const chartGrids = css`
  display: grid;
  grid-template-columns: ${({ theme }) => theme.gridColChart};
  grid-gap: 10px;
  width: 100%;
  padding: 10px 20px 10px 10px;
`;