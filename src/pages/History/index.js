import {isEmpty} from 'lodash';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {ICceklis, ICdot, ICoval, ICpipe} from '../../assets';
import {Header, Loading} from '../../components';
import {colors} from '../../utils';
import {getHistoryStatus} from '../../utils/axios';

const History = ({navigation, route}) => {
  const [loading, setLoading] = useState(false);
  const stateToken = useSelector((state) => state.reducerToken);
  const [status, setStatus] = useState({});
  const idLap = route.params;
  const [data, setData] = useState([
    {time: '09:00', title: 'Event 1', description: 'Event 1 Description'},
    {time: '10:45', title: 'Event 2', description: 'Event 2 Description'},
    {time: '12:00', title: 'Event 3', description: 'Event 3 Description'},
    {time: '14:00', title: 'Event 4', description: 'Event 4 Description'},
    {time: '16:30', title: 'Event 5', description: 'Event 5 Description'},
  ]);

  useEffect(() => {
    setLoading(true);
    statusLaporan();
  }, []);

  const statusLaporan = async () => {
    const ress = await getHistoryStatus(stateToken.token, idLap._id);
    if (ress.status === 'OK') {
      console.log('status', ress.result);
      setStatus(ress.result);
      setLoading(false);
    }
  };

  const convertUTCToLocalTime = (param) => {
    if (!isEmpty(param)) {
      let moment = require('moment');
      const dte = moment(param).format('DD-MM-YYYY HH:mm:ss');
      console.log(dte);
      return dte;
    }
  };

  return (
    <View style={styles.container}>
      <Header
        onPress={() => navigation.goBack()}
        title="History Status Laporan"
      />
      {/* <Timeline
        style={{paddingLeft: 20, paditop: 20, flex: 1}}
        data={data}
        timeContainerStyle={{minWidth: 70}}
        innerCircle={'dot'}
        circleSize={20}
        timeStyle={{
          textAlign: 'center',
          backgroundColor: '#3FC380',
          color: 'white',
          padding: 5,
          borderRadius: 13,
        }}
      /> */}
      <View style={styles.page}>
        <View>
          <Text style={styles.wait}>
            Menunggu{'\n'}
            {!isEmpty(status) && convertUTCToLocalTime(status.created_date)}
          </Text>
          <View style={styles.oval}>
            <ICoval />
          </View>
          <View style={styles.pipe}>
            <ICpipe />
          </View>
          <Text style={styles.veryfy}>
            Verifikasi {'\n'}{' '}
            {!isEmpty(status) && convertUTCToLocalTime(status.verifikasi_date)}
          </Text>
          <View style={styles.ovalMidle}>
            <ICoval />
          </View>
          <View style={styles.pipeMidle}>
            <ICpipe />
          </View>
          <Text style={styles.done}>
            {!isEmpty(status.accepted_date) && !isEmpty(status.rejected_date)
              ? `Diterima / Ditolak`
              : !isEmpty(status.accepted_date) && idLap.status === 'diterima'
              ? `Diterima\n${convertUTCToLocalTime(status.accepted_date)}`
              : !isEmpty(status.rejected_date) && idLap.status === 'ditolak'
              ? `Ditolak \n ${convertUTCToLocalTime(status.rejected_date)}`
              : null}
          </Text>
          <View style={styles.ovalBottom}>
            <ICoval />
          </View>
        </View>

        <View style={styles.ceklis(idLap.status)}>
          <ICceklis />
        </View>
        <View style={styles.dot(idLap.status)}>{/* <ICdot /> */}</View>
      </View>
      {loading && <Loading />}
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.white},
  page: {
    flex: 1,
    //alignItems: 'center',
    paddingTop: 30,
    //backgroundColor: 'cyan',
  },
  ceklis: (status) => ({
    position: 'absolute',
    top:
      status === 'terverifikasi'
        ? 210
        : status === 'menunggu'
        ? 55
        : status === 'diterima' || 'ditolak'
        ? 365
        : null,
    left: 170,
  }),
  dot: (status) => ({
    position: 'absolute',
    top: status === 'diterima' || status === 'ditolak' ? 300 : 130,
    left: 173,
  }),
  veryfy: {position: 'absolute', right: 10, top: 170, paddingRight: 10},
  wait: {paddingLeft: 10, position: 'absolute', top: 15},
  done: {paddingLeft: 10, top: 330, position: 'absolute'},
  oval: {
    flex: 1,
    position: 'absolute',
    left: 162,
    top: 15,
  },
  pipe: {
    //backgroundColor: 'red',
    flex: 1,
    paddingTop: 35,
    position: 'absolute',
    left: 178,
    top: 20,
  },
  ovalMidle: {
    //flex: 1,
    position: 'absolute',
    left: 162,
    top: 170,
  },
  pipeMidle: {
    //flex: 1,
    paddingTop: 35,
    position: 'absolute',
    left: 178,
    top: 175,
  },
  ovalBottom: {
    //flex: 1,
    paddingTop: 35,
    position: 'absolute',
    left: 162,
    top: 290,
  },
});
