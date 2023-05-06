import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IconSendDark, IconSendLight} from '../../../assets';
import {colors} from '../../../utils';

const BtnIconSend = ({disable, onPress}) => {
  if (disable) {
    return (
      <View style={styles.container(disable)}>
        <IconSendDark />
      </View>
    );
  }
  return (
    <TouchableOpacity style={styles.container(disable)} onPress={onPress}>
      <IconSendLight />
    </TouchableOpacity>
  );
};

export default BtnIconSend;

const styles = StyleSheet.create({
  container: (disable) => ({
    backgroundColor: disable ? colors.disable : colors.button.primary.iconsend,
    width: 45,
    height: 45,
    borderRadius: 10,
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 3,
  }),
});
