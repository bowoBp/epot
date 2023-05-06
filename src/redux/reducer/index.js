import {combineReducers} from 'redux';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
const SCREEN_HEIGHT = height;
const SCREEN_WIDTH = width;
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const initialState = {
  loading: false,
  name: 'Bowo Prasetyo',
};

const initialBtnSurvey = {
  status: true,
};

const initialStateClick = {
  count: 0,
  isPageHandler: true,
};

const initialStateToken = {
  token: '',
};

const inisialtokenNotif = {
  idNotif: '',
};

const intialPicker = {
  selected: '',
};
const intialTerlapor = {
  latlong: '',
  alamatTerlapor: '',
  provinsi: '',
};
const initialMap = {
  latitude: 0,
  longitude: 0,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
};
const inisialLaporan = {
  bidang: '',
  terlapor: '',
  saksi: '',
  fasilitas: '',
  lokasi_terlapor: '',
  alamat_terlapor: '',
  file: [],
  uraian: '',
  provinsi: '',
};
const reducerPushNotif = (state = inisialtokenNotif, action) => {
  switch (action.type) {
    case 'SET_NOTIF':
      return {
        ...state,
        idNotif: action.value,
      };
    default:
      return state;
  }
};
const reducerAddlaporan = (state = inisialLaporan, action) => {
  switch (action.type) {
    case 'SET_STATE':
      return {
        ...state,
        [action.key]: action.value,
      };
    case 'RESET_STATE':
      return inisialLaporan;
    default:
      return state;
  }
};
const reducerBackHandler = (state = initialStateClick, action) => {
  if (action.type === 'RESET_FLAG') {
    return {
      ...state,
      isPageHandler: false,
    };
  } else if (action.type === 'SET_FLAG') {
    return {
      ...state,
      isPageHandler: true,
    };
  } else {
    return state;
  }
};

const reducerLoading = (state = initialState, action) => {
  if (action.type === 'SET_LOADING') {
    return {
      ...state,
      loading: action.value,
    };
  }
  return state;
};
const reducerToken = (state = initialStateToken, action) => {
  if (action.type === 'SET_TOKEN') {
    return {
      ...state,
      token: action.value,
    };
  }
  return state;
};
const reducerPicker = (state = intialPicker, action) => {
  if (action.type === 'SET_PICKER') {
    return {
      ...state,
      selected: action.value,
    };
  }
  return state;
};
const reducerTerlapor = (state = intialTerlapor, action) => {
  switch (action.type) {
    case 'SET_LATLONG':
      return {
        ...state,
        latlong: action.value,
      };
    case 'SET_ALAMAT':
      return {
        ...state,
        alamatTerlapor: action.value,
      };
    case 'SET_PROVINSI':
      return {
        ...state,
        provinsi: action.value,
      };

    default:
      return state;
  }
};
const reducerMap = (state = initialMap, action) => {
  switch (action.type) {
    case 'SET_LAT':
      return {
        ...state,
        latitude: action.value,
      };
    case 'SET_LONG':
      return {
        ...state,
        longitude: action.value,
      };
    case 'RESET_LATLONG':
      return initialMap;
    default:
      return state;
  }
};
const reducerBtnSurvey = (state = initialBtnSurvey, action) => {
  switch (action.type) {
    case 'SET_BTN':
      return {
        ...state,
        status: action.value,
      };
    default:
      return state;
  }
};
const reducer = combineReducers({
  reducerBackHandler,
  reducerLoading,
  reducerToken,
  reducerPicker,
  reducerTerlapor,
  reducerMap,
  reducerBtnSurvey,
  reducerAddlaporan,
  reducerPushNotif,
});

export default reducer;
