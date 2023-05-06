import {showMessage, hideMessage} from 'react-native-flash-message';

export const validateForm = (form) => {
  console.log('form', form);
  if (
    form.bidang === '' ||
    form.terlapor === '' ||
    form.saksi === '' ||
    form.fasilitas === '' ||
    form.lokasi_terlapor === '' ||
    form.alamat_terlapor === '' ||
    form.uraian === '' ||
    form.province === ''
  ) {
    showMessage({
      message: 'harap data input terisi semua',
      type: 'warning',
      description: 'data tidak boleh kosong',
    });
    return true;
  } else {
    return false;
  }
};
export const validateMaxFoto = (image) => {
  const video = image[0].mime;
  console.log(video);
  console.log('form', image);
  if (image.length >= 9) {
    showMessage({
      message: 'Unggah Foto',
      type: 'warning',
      description: 'Unggah tidak bisa lebih dari 10',
    });
    return true;
  } else if (video === 'video/mp4') {
    showMessage({
      message: 'Unggah Foto',
      type: 'warning',
      description: 'Tidak bisa unggah video, hanya unggah foto',
    });
    return true;
  } else {
    return false;
  }
};
export const validateFormLogin = (form) => {
  const nik = form.nik;
  const lengthNik = nik.length;
  console.log(lengthNik);
  if (lengthNik < 16) {
    showMessage({
      message: 'Input NIK tidak boleh kurang dari 16 digit',
      type: 'warning',
      description: 'some field still empty',
    });
    return true;
  } else {
    if (
      form.name === '' ||
      form.email === '' ||
      form.nik === '' ||
      form.phone === ''
    ) {
      showMessage({
        message: "field can't empty please check again",
        type: 'warning',
        description: 'some field still empty',
      });
      return true;
    }
  }
};
export const validatePhoto = () => {
  showMessage({
    message: 'Anda belum memilih photo',
    type: 'warning',
  });
};

export const validateSurvey = (form) => {
  if (form.rating_kecepatan === 0 || form.rating_kepuasan === 0) {
    showMessage({
      message: 'Anda Belum Memberi Rating Ulasan',
      type: 'warning',
      description: 'Rating Bintang',
    });
    return false;
  } else if (form.ulasan === '') {
    showMessage({
      message: 'Anda Belum Meangisi Ulasan',
      type: 'warning',
      description: 'Kolom Ulasan Tidak Boleh Kosong',
    });
    return false;
  } else {
    return true;
  }
};

export const MessagesPoup = (errorMessages) => {
  showMessage({
    message: errorMessages,
    type: 'danger',
  });
};
export const failSenOtp = (errorMessages) => {
  showMessage({
    message: errorMessages,
    type: 'danger',
  });
};
export const failCreateLaporan = () => {
  showMessage({
    message: 'Terjadi Kesalahan',
    type: 'danger',
  });
};

export const SuccessMssage = () => {
  showMessage({
    message: 'berhasil mendaftar',
    type: 'success',
  });
};

export const SuccessLogin = () => {
  showMessage({
    message: 'Berhasil mengirim Kode OTP',
    type: 'success',
  });
};
export const SuccessOtp = () => {
  showMessage({
    message: 'berhasil mengirim OTP ke email anda',
    type: 'success',
  });
};
export const SuccessVerifyOtp = () => {
  showMessage({
    message: 'Verifikasi OTP berhasil',
    type: 'success',
  });
};
export const SuccesAddLaporan = () => {
  showMessage({
    message: 'Laporan anda berhasil di simpan',
    type: 'success',
  });
};
export const SuccesAddSurvey = () => {
  showMessage({
    message: 'Terimakasih, Survey dan Ulasan Anda Sudah Kami Terima',
    type: 'success',
  });
};

export const hideEmail = (email) => {
  var a = email.split('@');
  var b = a[0];
  var newstr = '';
  for (var i in b) {
    if (i > 2 && i < b.length - 1) newstr += '*';
    else newstr += b[i];
  }
  console.log(newstr + '@' + a[1]);
  const newEmail = newstr + '@' + a[1];
  return newEmail;
};

const parseDate = (param) => {
  console.log('parseDate', param);
  const a = param.split('T');
  const b = a[1].split('.');
  const newDate = `${a[0]} ${b[0]}`;
  return newDate;
};
