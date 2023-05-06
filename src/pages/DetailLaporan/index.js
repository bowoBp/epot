import React, {useEffect, useState} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {useDispatch, useSelector} from 'react-redux';
import {CardDetail, Header, Loading} from '../../components';
import {colors} from '../../utils';
import {getDetailLaporan} from '../../utils/axios';
import {isEmpty} from 'lodash';

const DetailLaporan = ({navigation, route}) => {
  const param = route.params;
  const stateGlobal = useSelector((state) => state.reducerToken);
  const [detLaporan, setDetLaporan] = useState({});
  const [loading, setLoading] = useState(false);
  const [latitude, setLatitude] = useState(param.lokasi.lat);
  const [longitude, setLongitude] = useState(param.lokasi.long);

  const dispatch = useDispatch();

  useEffect(() => {
    setLatitude(parseFloat(param.lokasi.lat));
    setLongitude(parseFloat(param.lokasi.long));
    detailLap();
    return () => {
      setLatitude(parseFloat(param.lokasi.lat));
      setLongitude(parseFloat(param.lokasi.long));
      detailLap();
    };
  }, [navigation]);

  const detailLap = async () => {
    setLoading(true);
    const ress = await getDetailLaporan(stateGlobal.token, param.item._id);
    if (ress.status === 'OK') {
      setDetLaporan(ress.result);
      setLoading(false);
      dispatch({type: 'SET_BTN', value: true});
    }
  };

  return (
    <>
      <StatusBar
        backgroundColor={colors.mainApp.background}
        barStyle="dark-content"
      />
      <View style={styles.container}>
        <View style={styles.page}>
          <Header
            type="Detail-Laporan"
            title="Detail Laporan"
            onPress={() => navigation.goBack('Laporan')}
          />
          <MapView
            provider={PROVIDER_GOOGLE}
            initialRegion={{
              latitude: latitude,
              longitude: longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            zoomEnabled={true}
            style={styles.map}
            showsBuildings={true}
            showsTraffic={true}
            showsIndoors={true}
            showsCompass={true}
            liteMode={false}>
            <Marker
              draggable
              coordinate={{
                latitude: latitude,
                longitude: longitude,
              }}
              onDragEnd={(e) => console.log(e.nativeEvent.coordinate)}
              title={detLaporan.alamat_terlapor}
            />
          </MapView>
        </View>
        <View style={styles.status}>
          <CardDetail
            rating={param.item.rating_avg}
            idlap={param.item._id}
            bidang={detLaporan.bidang_name}
            ticketNo={detLaporan.no_ticket}
            polda={detLaporan.provinsi}
            lokasi={detLaporan.alamat_terlapor}
            namepelapor={detLaporan.terlapor}
            status={detLaporan.status}
            image={detLaporan.file}
            alamatTerlapor={detLaporan.alamat_terlapor}
            saksi={detLaporan.saksi}
            fasilitas={detLaporan.fasilitas}
            uraian={detLaporan.uraian}
            onPress={() => navigation.navigate('History', param.item)}
            hasRating={() => navigation.replace('MainApp')}
            toPreview={(img) => navigation.navigate('PreviewImage', img)}
          />
        </View>
      </View>
      {loading && <Loading />}
    </>
  );
};

export default DetailLaporan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mainApp.background,
    //justifyContent: 'space-between',
  },
  page: {
    marginHorizontal: 15,
    marginTop: 10,
    backgroundColor: colors.white,
    flex: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingTop: 10,
    //position: 'relative',
    //paddingRight: 100,
  },
  status: {
    //marginTop: 10,
    flex: 1,
    //marginHorizontal: 15,
  },
  map: {
    flex: 1,
    //width: Dimensions.get('window').width,
    //height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
    //alignSelf: 'center',
    //marginHorizontal: 15,
  },
});
