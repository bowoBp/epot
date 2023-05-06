import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ILCatObat, ILCatPsikiater, ILCatUmum} from '../../../assets';
import {colors, fonts} from '../../../utils';

const DoctorCategory = ({category, onPress}) => {
  const IconDokter = () => {
    if (category === 'dokter umum') {
      return <ILCatUmum style={styles.ilustration} />;
    }
    if (category === 'dokter psikiater') {
      return <ILCatPsikiater style={styles.ilustration} />;
    }
    if (category === 'dokter obat') {
      return <ILCatObat style={styles.ilustration} />;
    }
    return <ILCatUmum style={styles.ilustration} />;
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <IconDokter />
      <View>
        <Text style={styles.label}>Saya Butuh</Text>
        <Text style={styles.category}>{category}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DoctorCategory;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: colors.cardLight,
    alignSelf: 'flex-start',
    borderRadius: 10,
    marginRight: 10,
    width: 100,
    height: 130,
  },
  ilustration: {marginBottom: 20},
  label: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.primary,
  },
  category: {
    fontSize: 12,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    textTransform: 'capitalize',
  },
});
