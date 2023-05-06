import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

const SearchPlaces = () => {
  return (
    <GooglePlacesAutocomplete
      placeholder="Cari Lokasi"
      onPress={(data, details = null) => {
        console.log('ress', data, details);
      }}
      query={{
        key: 'AIzaSyCmNXBzkCFCpuudiVWsMDapH77sGJy59no',
        language: 'id',
      }}
    />
  );
};

export default SearchPlaces;

const styles = StyleSheet.create({});
