import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  ICInfoActive,
  ICInfoDark,
  IConaddLaporan,
  IConAddLAporanActive,
  IconLaporan,
  IconLaporanActive,
  Iconprofile,
  IconProfileActive,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const ItemTab = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Laporan') {
      return active ? <IconLaporanActive /> : <IconLaporan />;
    }
    if (title === 'Buat Laporan') {
      return active ? <IConAddLAporanActive /> : <IConaddLaporan />;
    }
    if (title === 'Info') {
      return active ? <ICInfoActive /> : <ICInfoDark />;
    }
    return <IconLaporan />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ItemTab;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: (active) => ({
    fontSize: 10,
    color: active ? colors.text.menuActive : colors.text.menuInactive,
    fontFamily: fonts.primary[600],
    paddingTop: 4,
  }),
});
