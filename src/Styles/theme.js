import { css } from 'styled-components';

const theme = {
  widthWeb: '1100px',
  gray0: '#F4F4F4',
  gray1: '#C4C4C4',
  gray2: '#B0B0B0',
  gray3: '#636363',
  percentRed: '#D04138',
  percentBlue: '#3083DB',
  starYellow: '#F6B50C',
  radius: '5px',
  transition: 'all .3s ease',
  gridColChart: '2fr 7fr 4fr 12fr 8fr 4fr 4fr 12fr', 
  zToast: 100,
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
  align-items: center;
  width: 100%;
  padding: 10px 20px 10px 15px;

  p {
    text-align: right;

    &.left {
      text-align: left;
    }
  }
`;