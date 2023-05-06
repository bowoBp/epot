import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {colors, fonts} from '../../../utils';
import Button from '../Button';

const IputChat = ({value, onChangeText, onButtonPress, doctorName}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={`Tulis pesan untuk ${doctorName}`}
        value={value}
        onChangeText={onChangeText}
      />
      <Button
        type="btn-icon-send"
        disable={value.length < 1}
        onPress={onButtonPress}
      />
    </View>
  );
};

export default IputChat;

const styles = StyleSheet.create({
  container: {padding: 16, flexDirection: 'row', backgroundColor: colors.white},
  input: {
    backgroundColor: colors.inputdisable,
    width: 273,
    height: 45,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
    fontSize: 14,
    fontFamily: fonts.primary.normal,
  },
});
