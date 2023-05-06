import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {useDispatch} from 'react-redux';
import {IconBackDark} from '../../assets';
import {Button, Header} from '../../components';
import {colors, fonts} from '../../utils';
import {findGeo} from '../../utils/axios';

const PilihLokasi = ({navigation, route}) => {
  const data = route.params;
  console.log('data', data);
  const [textlokasi, setTextLokasi] = useState(true);
  const [alamat, setAlamat] = useState('');
  const dispatch = useDispatch();

  const [cordinat, setCordinat] = useState({
    latitude: -6.4945638,
    longitude: 106.8610435,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    chngeRegion();
    changeStateForm();
  }, [data]);

  const chngeRegion = () => {
    setCordinat({
      ...cordinat,
      latitude: data.geometry.location.lat,
      longitude: data.geometry.location.lng,
    });
    setAlamat(data.formatted_address);
  };

  const changeStateForm = async () => {
    const lat = data.geometry.location.lat;
    const long = data.geometry.location.lng;
    const province = await findGeo(lat, long);
    console.log('province', province);
    dispatch({
      type: 'SET_STATE',
      value: `${lat},${long}`,
      key: 'lokasi_terlapor',
    });
    dispatch({
      type: 'SET_STATE',
      value: data.formatted_address,
      key: 'alamat_terlapor',
    });
    dispatch({
      type: 'SET_STATE',
      value:
        province.address.city === 'Tangerang' ||
        province.address.city === 'Tangerang Selatan' ||
        province.address.city === 'Bekasi' ||
        province.address.city === 'Depok'
          ? 'Metro Jaya'
          : province.address.state === undefined
          ? 'Metro Jaya'
          : province.address.state,
      key: 'provinsi',
    });
  };

  const findAddres = async (data) => {
    const address = await findGeo(
      data.coordinate.latitude,
      data.coordinate.longitude,
    );
    dispatch({
      type: 'SET_STATE',
      value: `${address.lat},${address.lon}`,
      key: 'lokasi_terlapor',
    });
    dispatch({
      type: 'SET_STATE',
      value: address.display_name,
      key: 'alamat_terlapor',
    });
    dispatch({
      type: 'SET_STATE',
      value: address.address.state,
      key: 'provinsi',
    });
    setAlamat(address.display_name);
  };
  return (
    <>
      {/* <TouchableOpacity>
        <IconBackDark />
      </TouchableOpacity> */}
      <MapView
        provider={PROVIDER_GOOGLE}
        initialRegion={cordinat}
        zoomEnabled={true}
        style={styles.map}
        showsBuildings={true}
        showsTraffic={true}
        showsIndoors={true}
        showsCompass={true}
        liteMode={false}
        //onRegionChange={}
      >
        <Marker
          draggable
          coordinate={{
            latitude: data.geometry.location.lat,
            longitude: data.geometry.location.lng,
          }}
          onDragEnd={(e) => findAddres(e.nativeEvent)}
          //title={lokasi}
        />
      </MapView>
      {textlokasi && (
        <View style={styles.wrapper}>
          <Text style={styles.textLokasi}>{alamat}</Text>
          <View style={styles.btnPilih}>
            <Button
              title="Pilih lokasi ini"
              onPress={() => navigation.navigate('AddLaporan')}
            />
          </View>
        </View>
      )}
    </>
  );
};

export default PilihLokasi;

const styles = StyleSheet.create({
  map: {
    flex: 1,
    //width: Dimensions.get('window').width,
    //height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
    //alignSelf: 'center',
    //marginHorizontal: 15,
  },
  btnPilih: {
    paddingHorizontal: 10,
    paddingBottom: 10,
    paddingTop: 10,
  },
  textLokasi: {
    fontSize: 16,
    fontFamily: fonts.primary[400],
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  wrapper: {
    //backgroundColor: '#5d5d5d',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
