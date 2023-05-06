import {debounce, isEmpty} from 'lodash';
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {IcMap} from '../../../assets';
import {colors, fonts} from '../../../utils';
import {findAddress, findGeo} from '../../../utils/axios';

const InputSearch = ({map, onPress, label, onChange}) => {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [masterDataSource, setMasterDataSource] = useState([]);
  const [flag, setFlag] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isEmpty(search) && flag) {
      setLoading(true);
      const timer = setTimeout(async () => {
        const dt = await findAddress(search);
        console.log('address', dt);

        setMasterDataSource(dt);
        setLoading(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [search]);

  const toState = (text) => {
    setFlag(true);
    setSearch(text);
  };

  const cleartext = (dt) => {
    setSearch(dt);
    if (isEmpty()) {
      setMasterDataSource([]);
      setLoading(false);
      setFlag(true);
    }
  };
  const getLatLon = async (address, lat, long) => {
    setFlag(false);
    setMasterDataSource([]);
    setSearch(address);
    console.log(address, lat, long);
    dispatch({type: 'SET_LATLONG', value: `${lat},${long}`});
    dispatch({type: 'SET_ALAMAT', value: address});
    const coordinat = await findGeo(lat, long);
    dispatch({type: 'SET_PROVINSI', value: coordinat.address.state});
  };

  //console.log('masterdata', masterDataSource, loading);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          value={search}
          style={styles.textInputStyle}
          onChangeText={
            loading ? (text) => cleartext(text) : (text) => toState(text)
          }
          underlineColorAndroid="transparent"
          placeholder="cari alamat"
          onChange={onChange}
        />
        {map && (
          <TouchableOpacity style={styles.icmap} onPress={onPress}>
            <IcMap />
          </TouchableOpacity>
        )}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            {loading ? (
              <Text style={styles.sugestText}>Loading ...</Text>
            ) : (
              !isEmpty(masterDataSource) &&
              masterDataSource.map((item, index) => {
                return (
                  <Text
                    onPress={() =>
                      getLatLon(item.display_name, item.lat, item.lon)
                    }
                    key={index}
                    style={styles.sugestText}>
                    {item.display_name}
                  </Text>
                );
              })
            )}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default InputSearch;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  itemStyle: {
    padding: 10,
  },
  textInputStyle: {
    borderWidth: 1,
    padding: 12,
    margin: 5,
    //borderColor: colors.tersier,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingRight: 50,
  },
  icmap: {
    position: 'absolute',
    left: 250,
    top: 55,
  },
  sugestText: {
    fontSize: 15,
    fontFamily: fonts.primary[400],
    borderColor: colors.border,
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 10,
  },
  content: {
    flex: 1,
    flexDirection: 'column',
  },
  label: {
    fontSize: 16,
    color: colors.text.secondary,
    marginBottom: 6,
    fontFamily: fonts.primary.normal,
  },
});
