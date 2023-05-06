const mainColors = {
  blue1: '#0066CB',
  blue2: '#005ce6',
  blue3: '#EDF5FC',
  green1: '#0BCAD4',
  green2: '#EDFCFD',
  green3: '#1F6C5C',
  green4: '#208C74',
  green4: '#16A085',
  green5: '#3FC380',
  dark1: '#112340',
  dark2: '#495A75',
  grey1: '#7D8797',
  grey2: '#e9e9e9',
  grey3: '#FFFFFF',
  grey4: '#8092AF',
  grey5: '#EDEEF0',
  grey6: '#B1B7C2',
  grey7: '#EDF5FC',
  grey8: '#D4DEE7',
  grey9: '#D6D6D6',
  grey10: '#959595',
  grey11: '#5E6875',
  black1: '#000000',
  black2: 'rgba(0,0,0,0.5)',
  gold1: '#FFAF4F',
  red1: '#E64646',
};

export const colors = {
  primary: mainColors.green1,
  secondary: mainColors.dark1,
  tersier: mainColors.green5,
  blue: mainColors.blue2,
  background: mainColors.blue3,
  white: 'white',
  black: 'black',
  inputdisable: mainColors.grey5,
  text: {
    primary: mainColors.black1,
    secondary: mainColors.grey10,
    menuInactive: mainColors.dark2,
    menuActive: mainColors.green4,
    background: mainColors.grey3,
    category: mainColors.grey4,
    rate: mainColors.gold1,
    HeaderText: mainColors.green4,
  },
  button: {
    primary: {
      background: mainColors.green4,
      text: 'white',
      iconsend: mainColors.blue1,
      verifikasi: mainColors.green5,
      menunggu: mainColors.grey10,
      ditolak: mainColors.red1,
      diterima: mainColors.blue1,
      ulasan: mainColors.gold1,
      kembali: mainColors.dark2,
    },
    secondary: {
      background: mainColors.grey3,
      text: mainColors.green4,
    },
    disable: {
      background: mainColors.grey5,
      text: mainColors.grey6,
    },
  },
  mainApp: {
    background: mainColors.grey7,
    borderSearch: mainColors.grey8,
    borderlist: mainColors.green4,
    emptyList: mainColors.grey9,
    text: mainColors.green4,
    backgroundphoto: mainColors.grey8,
    labelForm: mainColors.black1,
  },
  border: mainColors.grey2,
  cardLight: mainColors.green2,
  disable: mainColors.grey5,
  loadingBackground: mainColors.black2,
  getStartedBg: mainColors.green3,
  barBackground: mainColors.green4,
};