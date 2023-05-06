import {isEmpty} from 'lodash';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {useDispatch, useSelector} from 'react-redux';
import {IconRemovePhoto} from '../../assets';
import {
  Button,
  DropDown,
  Gap,
  Input,
  Loading,
  MultpileImage,
} from '../../components';
import {
  colors,
  fonts,
  validateForm,
  validateMaxFoto,
  validatePhoto,
} from '../../utils';
import {createLaporan} from '../../utils/axios';

const AddLaporan = ({navigation, route}) => {
  const [loading, setLoading] = useState(false);
  const stateGlobal = useSelector((state) => state.reducerToken);
  const stateTerlapor = useSelector((state) => state.reducerTerlapor);
  const stateFormLap = useSelector((state) => state.reducerAddlaporan);
  const users = route.params;
  const dispatch = useDispatch();
  const [time, setTime] = useState();

  const onChangeText = (keys, values) => {
    dispatch({type: 'SET_STATE', value: values, key: keys});
  };

  useEffect(() => {
    const date = getDate();
    setTime(date);
  }, [navigation]);

  const getImage = async () => {
    ImagePicker.openPicker({
      includeBase64: true, // for base 64 string
      multiple: true, // To support multiple image selection
      quality: 2.5,
      maxWidth: 300,
      maxHeight: 400,
      mediaType: 'any',
      maxFiles: 6,
      //compressImageQuality: 0.5,
      //compressImageMaxHeight: 200,
      //compressImageMaxWidth: 200,
    })
      .then((image) => {
        const valdate = validateMaxFoto(image);
        if (!valdate) {
          const newImg = [];
          image.map((item) => {
            const im = item.data;
            newImg.push(im);
          });
          dispatch({type: 'SET_STATE', value: newImg, key: 'file'});
          //console.log('newImage', newImg);
        }
      })
      .catch((err) => {});
  };
  const getDate = () => {
    let date = new Date().getDate(); //To get the Current Date
    let month = new Date().getMonth() + 1; //To get the Current Month
    let year = new Date().getFullYear(); //To get the Current Year
    return date + '-' + `0` + month + '-' + year; //format: dd-mm-yyyy;
  };

  const RemoveImg = (img) => {
    let imageNew = [];
    stateFormLap.file.forEach((data, index) => {
      if (index !== img) {
        imageNew.push(data);
      }
    });
    dispatch({type: 'SET_STATE', value: imageNew, key: 'file'});
  };

  const confirmAction = () => {
    console.log('confirmAction', dtLaporan);
    Alert.alert('Konfirmasi', 'Simpan Laporan?', [
      {
        text: 'Cancel',
        onPress: () => {
          submit;
        },
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('confirmAction', dtLaporan)},
    ]);
  };
  const submit = async () => {
    setLoading(true);
    if (!isEmpty(stateFormLap.file)) {
      //console.log('form', stateFormLap);
      const pass = validateForm(stateFormLap);
      if (!pass) {
        const ress = await createLaporan(stateGlobal.token, stateFormLap);
        if (ress.status == 'OK') {
          dispatch({type: 'RESET_STATE'});
          setLoading(false);
          navigation.replace('MainApp');
        } else {
          setLoading(false);
        }
      }
    } else {
      validatePhoto();
      setLoading(false);
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
          <View style={styles.wrapper}>
            <Text style={styles.text}>Format Laporan</Text>
            <Gap height={10} />
            <ScrollView
              style={styles.scroll}
              showsVerticalScrollIndicator={false}>
              <Input
                disable
                value={time}
                label="Tanggal Dibuat"
                style={styles.inptgl}
              />
              <Gap height={10} />
              <DropDown
                onChange={(value) => onChangeText('bidang', value)}
                label="Bidang"
              />
              <Gap height={10} />
              <Input
                placeholder="Contoh: Jhone Done"
                value={stateFormLap.terlapor}
                label="Terlapor"
                onChangetext={(value) => onChangeText('terlapor', value)}
              />
              <Gap height={10} />
              <Input
                placeholder="Contoh: 1. Jhone jl.pahlawan kemerdekaan, Jawa tengah, 021548518"
                value={stateFormLap.saksi}
                label="Saksi"
                multiline={true}
                numberOfLines={4}
                onChangetext={(value) => onChangeText('saksi', value)}
              />
              <Gap height={10} />
              <Input
                value={stateFormLap.fasilitas}
                label="Alat/Fasilitas Yang Digunakan Terlapor"
                placeholder="Contoh: Truk fuso 2 unit"
                onChangetext={(value) => onChangeText('fasilitas', value)}
              />
              <Gap height={15} />
              {/* <InputSearch
                label="Lokasi Kejadian"
                map
                onPress={() => navigation.navigate('CariLokasi')}
              /> */}
              {!isEmpty(stateFormLap.alamat_terlapor) ? (
                <View>
                  <Input
                    value={stateFormLap.alamat_terlapor}
                    label="Titik Lokasi TKP "
                  />
                  <Gap height={15} />
                  <Button
                    logo="map"
                    title="Ganti Titik Lokasi TKP"
                    upload
                    onPress={() => navigation.navigate('CariLokasi')}
                  />
                </View>
              ) : (
                <Button
                  logo="map"
                  title="Titik Lokasi TKP"
                  upload
                  onPress={() => navigation.navigate('CariLokasi')}
                />
              )}
              <Gap height={30} />
              <Button
                logo="photo"
                title="Unggah Foto"
                upload
                onPress={getImage}
              />
              <Gap height={15} />
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.uploadimages}>
                  {!isEmpty(stateFormLap.file) &&
                    stateFormLap.file.map((item, index) => {
                      return (
                        <View key={index}>
                          <MultpileImage
                            source={{
                              uri: `data:image/jpeg;base64,${item}`,
                            }}
                            key={index}
                          />
                          <TouchableOpacity
                            style={styles.iconremove}
                            onPress={() => RemoveImg(index)}>
                            <IconRemovePhoto />
                          </TouchableOpacity>
                        </View>
                      );
                    })}
                </View>
              </ScrollView>
              <Gap height={10} />
              <Input
                placeholder="Contoh: Melakukan pertambangan liar di daerah dataran pegunungan membuat rusaknya lingkungan. Lat: -6.200000 Long:106.816666 "
                value={stateFormLap.uraian}
                label="Uraian Laporan"
                multiline={true}
                numberOfLines={4}
                onChangetext={(value) => onChangeText('uraian', value)}
              />
              <Gap height={15} />
              <Button title="Simpan" onPress={submit} />
              <Gap height={35} />
            </ScrollView>
          </View>
        </View>
      </View>
      {loading && <Loading />}
    </>
  );
};

export default AddLaporan;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.mainApp.background,
    flex: 1,
  },
  page: {
    backgroundColor: colors.white,
    flex: 1,
    marginTop: 15,
    marginHorizontal: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  text: {
    fontSize: 18,
    fontFamily: fonts.primary[400],
    color: colors.mainApp.text,
  },
  uploadimages: {
    flexDirection: 'row',
    backgroundColor: colors.mainApp.backgroundphoto,
  },
  inptgl: {
    marginTop: 20,
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: 20,
  },
  pickercontainer: {
    height: 40,
  },
  background: {
    backgroundColor: '#fafafa',
  },
  itemstyle: {
    justifyContent: 'flex-start',
  },
  dropDownStyle: {
    backgroundColor: '#fafafa',
  },
  label: {
    fontSize: 16,
    color: colors.text.secondary,
    marginBottom: 6,
    fontFamily: fonts.primary.normal,
  },
  scroll: {
    paddingVertical: 10,
  },
  iconremove: {position: 'absolute', bottom: 8, right: 6},
});
