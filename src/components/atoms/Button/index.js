import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IcAddPhoto, IcMap, ICMapLight} from '../../../assets';
import {colors, fonts} from '../../../utils';
import BtnIconSend from './BtnIconSend';
import IconOnly from './IconOnly';
import BtnEpot from './BtnEpot';

const Button = ({type, title, onPress, icon, disable, upload, logo}) => {
  if (type === 'btn-icon-send') {
    return <BtnIconSend disable={disable} onPress={onPress} />;
  }
  if (type === 'icon-only') {
    return <IconOnly icon={icon} onPress={onPress} />;
  }
  if (type === 'btn-epot') {
    return <BtnEpot type={type} title={title} onPress={onPress} />;
  }
  if (disable) {
    return (
      <View style={styles.disbleBg}>
        <Text style={styles.textDisable}>{title}</Text>
      </View>
    );
  }
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <View style={styles.icupload}>
        {logo === 'photo' && <IcAddPhoto />}
        {logo === 'map' && <ICMapLight />}
      </View>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (type) => ({
    backgroundColor:
      type === 'secondary'
        ? colors.button.secondary.background
        : colors.button.primary.background,
    paddingVertical: 10,
    borderRadius: 10,
    paddingHorizontal: 20,
  }),
  text: (type) => ({
    paddingHorizontal: 5,
    fontSize: type === 'Detail-Laporan' ? 11 : 14,
    textAlign: 'center',
    //textTransform: 'capitalize',
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
