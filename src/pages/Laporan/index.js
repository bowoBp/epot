import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  RefreshControl,
} from 'react-native';
import {useSelector} from 'react-redux';
import {Button, ListLaporan, Loading, Search} from '../../components';
import {colors, fonts} from '../../utils';
import {getListLaporan} from '../../utils/axios';
import {isEmpty} from 'lodash';
import {useDispatch} from 'react-redux';

const Laporan = ({navigation}) => {
  const [laporan, setLaporan] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const stateGlobal = useSelector((state) => state.reducerToken);
  const dispatch = useDispatch();

  useEffect(() => {
    navigation.addListener('focus', () => {
      listLaporan();
      dispatch({type: 'SET_BTN', value: false});
      dispatch({type: 'RESET_STATE'});
    });
    return () => {
      listLaporan();
      dispatch({type: 'SET_BTN', value: false});
      dispatch({type: 'RESET_STATE'});
    };
  }, []);

  const listLaporan = async () => {
    setLoading(true);
    const dtLaporan = await getListLaporan(stateGlobal.token);
    if (!isEmpty(dtLaporan)) {
      setLaporan(dtLaporan);
      setLoading(false);
    }
    setLoading(false);
  };
  const createCordinat = (data) => {
    if (!isEmpty(data)) {
      const latLong = data.split(',');
      const lat = Number(latLong[0]);
      const long = Number(latLong[1]);
      return {lat, long};
      // dispatch({type: 'SET_LAT', value: lat});
      // dispatch({type: 'SET_LONG', value: long});
    }
  };
  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };
  const onRefresh = () => {
    setRefresh(true);
    wait(200).then(() => setRefresh(false));
  };

  return (
    <>
      <View style={styles.page}>
        <StatusBar
          backgroundColor={colors.mainApp.background}
          barStyle="dark-content"
        />
        <View style={styles.content}>
          <Text style={styles.text}>List Laporan</Text>
          {/* <View style={styles.search}>
          <Search title="search" />
        </View> */}
          <ScrollView
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
            }>
            {!isEmpty(laporan) &&
              laporan.map((item, index) => {
                const latlong = item.lokasi_terlapor;
                const lokasi = createCordinat(latlong);
                const param = {lokasi, item};
                return (
                  <ListLaporan
                    key={index}
                    status={item.status}
                    title={item.bidang_name}
                    subtitle={`Polda ${item.provinsi}`}
                    score={item.rating_avg}
                    onPress={() => navigation.navigate('DetailLaporan', param)}
                  />
                );
              })}
          </ScrollView>
          {isEmpty(laporan) && (
            <View style={styles.wrappertext}>
              <Text style={styles.empty}>Empty</Text>
            </View>
          )}

          {/* <View style={styles.iconadd}>
            <Button
              type="icon-only"
              icon="add-laporan"
              onPress={() => navigation.navigate('AddLaporan')}
            />
          </View> */}
        </View>
      </View>
      {loading && <Loading />}
    </>
  );
};

export default Laporan;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.mainApp.background,
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingTop: 22,
    position: 'relative',
  },
  search: {
    marginHorizontal: 12,
    marginTop: 7,
    paddingBottom: 10,
  },
  text: {
    marginHorizontal: 12,
    fontSize: 14,
    fontFamily: fonts.primary[400],
    color: colors.text.HeaderText,
  },
  iconadd: {
    position: 'absolute',
    right: 35,
    bottom: 70,
  },
  empty: {
    textAlign: 'center',
    fontSize: 45,
    fontFamily: fonts.primary[400],
    color: colors.mainApp.emptyList,
    paddingBottom: 300,
  },
  wrappertext: {flex: 1, justifyContent: 'center'},
});
