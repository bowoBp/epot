const env = {
  URL: 'http://192.168.0.98:7068/api/v1',
  LIVE: 'https://api.laportipidter.com/api/v1',
};

export const headrs = {
  headers: {'Content-Type': 'application/json'},
};

export const endPoint = {
  REGISTER: `${env.LIVE}/user/create_user_public`,
  SENDOTP: `${env.LIVE}/login/auth_public`,
  LOGIN: `${env.LIVE}/login/send_otp`,
  LOGINPUBLIC: `${env.LIVE}/login/auth_public`,
  DATASBIDANG: `${env.LIVE}/bidang/datas`,
  LISTLAPORAN: `${env.LIVE}/laporan/datas?key=&limit=100&page=`,
  ADDLAPORAN: `${env.LIVE}/laporan/create`,
  ADDLAPORAN_NEW: `${env.LIVE}/laporan/create_new`,
  ADDULASAN: `${env.LIVE}/laporan/create_survey`,
  ADDRESS: `https://nominatim.openstreetmap.org/search.php?q=cibinong&polygon_geojson=1&format=jsonv2`,
  LOCATION: `https://nominatim.openstreetmap.org/reverse.php?lat=-6.4656372&lon=106.8510231&format=jsonv2`,
};

export const detailLaporan = (id) => {
  const uri = `${env.LIVE}/laporan/data?id=${id}`;
  return uri;
};
export const getAddress = (param) => {
  const uri = `https://nominatim.openstreetmap.org/search.php?q=${param}&polygon_geojson=1&format=jsonv2`;
  return uri;
};
export const getLocation = (lat, long) => {
  const uri = `https://nominatim.openstreetmap.org/reverse.php?lat=${lat}&lon=${long}&format=jsonv2`;
  return uri;
};
export const historyStatus = (id) => {
  const uri = `${env.LIVE}/laporan/history_status?id=${id}`;
  return uri;
};

export const tanggapanLaporan = (id) => {
  const uri = `${env.LIVE}/laporan/check_response?id=${id}`;
  return uri;
};
