import axios from 'axios';
import {
  detailLaporan,
  endPoint,
  getAddress,
  getLocation,
  headrs,
  historyStatus,
  tanggapanLaporan,
} from '../../config';
import {
  MessagesPoup,
  SuccesAddLaporan,
  SuccessLogin,
  SuccessVerifyOtp,
  validateForm,
  validatePhoto,
  SuccesAddSurvey,
  validateSurvey,
  failCreateLaporan,
} from '../validateForm';

const headers = {
  headers: {'Content-Type': 'application/json'},
};
export const daftarAkun = (data) => {
  console.log(data);
  return axios.post(endPoint.REGISTER, data, headers);
};

export const loginAkun = async (data) => {
  const dtLogin = JSON.stringify(data);
  console.log(endPoint.LOGIN);
  console.log(dtLogin);
  return axios
    .post(endPoint.LOGIN, dtLogin, headrs)
    .then((ress) => {
      console.log(ress.data);
      SuccessLogin();
      return ress.data;
    })
    .catch((err) => {
      MessagesPoup(err.response.data.message);
    });
};

export const loginPublic = async (data) => {
  console.log(data);
  const dtLogin = JSON.stringify(data);
  return axios
    .post(endPoint.LOGINPUBLIC, dtLogin, headers)
    .then((ress) => {
      SuccessVerifyOtp();
      const dt = ress.data;
      // console.log('loin-pulic', ress.data);
      return dt;
    })
    .catch((err) => {
      MessagesPoup(err.response.data.error.message);
      const fail = err.response.data;
      return fail;
    });
};

export const getDataBidang = async (auth) => {
  return await axios
    .get(endPoint.DATASBIDANG, {headers: {Authorization: `Bearer ${auth}`}})
    .then((ress) => {
      return ress.data;
    })
    .catch((err) => {
      return err.response;
    });
};

export const findAddress = async (param) => {
  console.log('findAddress', param);
  const uri = getAddress(param);
  return await axios
    .get(uri)
    .then((ress) => {
      return ress.data;
    })
    .catch((err) => {
      console.log('err', err);
    });
};

export const findGeo = async (lat, lon) => {
  const uri = getLocation(lat, lon);
  return await axios
    .get(uri)
    .then((ress) => {
      return ress.data;
    })
    .catch((err) => {
      console.log('err', err);
    });
};
export const verikasiOtp = (data) => {
  return axios.post(endPoint.SENDOTP, data);
};

export const getListLaporan = (auth) => {
  return axios
    .get(endPoint.LISTLAPORAN, {headers: {Authorization: `Bearer ${auth}`}})
    .then((ress) => {
      const dt = ress.data.result.data;

      return dt;
    })
    .catch((err) => {
      return err.data;
    });
};

export const getDetailLaporan = (auth, id) => {
  //console.log(auth, id);
  const uri = detailLaporan(id);
  return axios
    .get(uri, {headers: {Authorization: `Bearer ${auth}`}})
    .then((ress) => {
      //console.log('detail', ress);
      const dt = ress.data;
      return dt;
    })
    .catch((err) => {
      return err.data;
    });
};

export const createLaporan = (auth, dt) => {
  return axios
    .post(endPoint.ADDLAPORAN_NEW, dt, {
      headers: {
        Authorization: `Bearer ${auth}`,
        'Content-Type': 'application/json;charset=UTF-8',
      },
    })
    .then((ress) => {
      SuccesAddLaporan();
      const dt = ress.data;
      return dt;
    })
    .catch((err) => {
      failCreateLaporan();
      return err;
    });
};

export const getHistoryStatus = (auth, idLap) => {
  const uri = historyStatus(idLap);

  return axios
    .get(uri, {headers: {Authorization: `Bearer ${auth}`}})
    .then((ress) => {
      const dt = ress.data;
      return dt;
    })
    .catch((err) => {
      return err.data;
    });
};

export const getTanggapan = (auth, idLap) => {
  const uri = tanggapanLaporan(idLap);

  return axios
    .get(uri, {headers: {Authorization: `Bearer ${auth}`}})
    .then((ress) => {
      const dt = ress.data;
      return dt;
    })
    .catch((err) => {
      return err.data;
    });
};

export const CreateSurvey = (auth, dataSurvey) => {
  console.log('dataSurvey', dataSurvey);
  const validate = validateSurvey(dataSurvey);
  console.log(validate);
  if (validate) {
    return axios
      .post(endPoint.ADDULASAN, dataSurvey, {
        headers: {Authorization: `Bearer ${auth}`},
      })
      .then((ress) => {
        SuccesAddSurvey();
        console.log('survey', ress);
        return ress.data;
      })
      .catch((err) => {
        return err.data;
      });
  } else {
    return false;
  }
};
