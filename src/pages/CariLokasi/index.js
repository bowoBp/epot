import React, {useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import {colors, fonts} from '../../utils';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {Header, Maps} from '../../components';
import {IConSearch, ICPosition} from '../../assets';
import {isEmpty} from 'lodash';
import {findGeo} from '../../utils/axios';
navigator.geolocation = require('@react-native-community/geolocation');

const CariLokasi = ({navigation}) => {
  const [location, setLocation] = useState({
    destination: '',
    currentLoaction: false,
  });
  const [currentLoc, setCurrentLoc] = useState({
    geometry: {
      location: {
        lat: 0,
        lng: 0,
      },
    },
    formatted_address: '',
  });

  const getCurrentPostion = () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      console.log('current', position);
      const alamat = await findGeo(
        position.coords.latitude,
        position.coords.longitude,
      );
      console.log('alamat', alamat);
      const currentLocation = {
        formatted_address: alamat.display_name,
        geometry: {
          location: {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          },
        },
      };
      console.log('currentLoc', currentLoc);
      navigation.navigate('PilihLokasi', currentLocation);
    });
  };

  return (
    <>
      <Header
        onPress={() => navigation.goBack()}
        title="Cari Lokasi"
        type="Cari Lokasi"
      />
      <GooglePlacesAutocomplete
        textInputProps={{
          onChangeText: (text) => {
            if (text === '')
              setLocation({
                ...location,
                destination: '',
                currentLoaction: false,
              });
            if (!isEmpty(text))
              setLocation({...location, currentLoaction: true});
          },
        }}
        styles={{
          container: {
            flex: 1,
            backgroundColor: colors.white,
          },
          textInputContainer: {
            backgroundColor: 'white',
            paddingHorizontal: 15,
            paddingVertical: 15,
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderBottomColor: colors.border,
            borderTopColor: colors.border,
          },
          textInput: {
            height: 38,
            color: '#5d5d5d',
            fontSize: 16,
            paddingLeft: 40,
            backgroundColor: colors.border,
          },
          predefinedPlacesDescription: {
            color: '#1faadb',
          },
          poweredContainer: {
            justifyContent: 'flex-end',
            alignItems: 'center',
            borderBottomRightRadius: 5,
            borderBottomLeftRadius: 5,
            borderColor: colors.background,
            borderTopWidth: 1,
            flex: 1,
          },

          row: {
            backgroundColor: colors.white,
            padding: 13,
            height: 45,
            flexDirection: 'row',
          },
          separator: {
            height: 0.5,
            backgroundColor: colors.background,
          },
          loader: {
            flexDirection: 'row',
            justifyContent: 'flex-end',
            height: 20,
          },
        }}
        placeholder="Tulis Jalan / Tempat / Perkebunan"
        minLength={2}
        fetchDetails={true}
        onPress={(data, details = null) => {
          console.log(JSON.stringify(details.geometry.location));
          navigation.navigate('PilihLokasi', details);
        }}
        query={{
          key: 'AIzaSyCmNXBzkCFCpuudiVWsMDapH77sGJy59no',
          language: 'id',
        }}
      />
      <TouchableOpacity style={styles.icon}>
        <IConSearch />
      </TouchableOpacity>
      {!location.currentLoaction && (
        <TouchableOpacity style={styles.icpostion} onPress={getCurrentPostion}>
          <ICPosition />
          <Text style={styles.text}>Gunakan lokasi saya saat ini</Text>
        </TouchableOpacity>
      )}
    </>
  );
};

export default CariLokasi;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    position: 'absolute',
    top: 75,
    left: 30,
  },
  icpostion: {
    position: 'absolute',
    top: 135,
    left: 15,
    flexDirection: 'row',
  },
  text: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    paddingLeft: 15,
    //position: 'absolute',
  },
});
