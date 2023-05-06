import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IcAddPhoto} from '../../../assets';
import {colors, fonts} from '../../../utils';
import BtnIconSend from './BtnIconSend';
import IconOnly from './IconOnly';

const BtnEpot = ({type, title, onPress, icon, disable, upload}) => {
  return (
    <TouchableOpacity style={styles.container(type, title)} onPress={onPress}>
      {upload ? (
        <View style={styles.icupload}>
          <IcAddPhoto />
        </View>
      ) : (
        <Text style={styles.text(type)}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default BtnEpot;

const styles = StyleSheet.create({
  container: (type, title) => ({
    backgroundColor:
      type === 'btn-epot' && title === 'menunggu'
        ? colors.button.primary.menunggu
        : type === 'btn-epot' && title === 'verifikasi'
        ? colors.button.primary.verifikasi
        : type === 'btn-epot' && title === 'ditolak'
        ? colors.button.primary.ditolak
        : type === 'btn-epot' && title === 'diterima'
        ? colors.button.primary.diterima
        : type === 'btn-epot' && title === 'Buat Ulasan'
        ? colors.button.primary.ulasan
        : type === 'btn-epot' && title === 'Kirim'
        ? colors.button.primary.diterima
        : type === 'btn-epot' && title === 'Kembali'
        ? colors.button.primary.kembali
        : type === 'btn-epot' && title === 'Setuju'
        ? colors.button.primary.verifikasi
        : colors.button.primary.diterima,
    paddingVertical: 5,
    borderRadius: 10,
    paddingHorizontal: 15,
  }),
  text: (type) => ({
    textTransform: 'capitalize',
    fontSize: type === 'btn-epot' ? 11 : 18,
    textAlign: 'center',
    color:
      type === 'secondary'
        ? colors.button.secondary.text
        : colors.button.primary.text,
    fontFamily: fonts.primary[600],
  }),
  disbleBg: {
    backgroundColor: colors.button.disable.background,
    paddingVertical: 10,
    borderRadius: 10,
  },
  textDisable: {
    fontSize: 18,
    textAlign: 'center',
    color: colors.button.disable.text,
  },
  icupload: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
