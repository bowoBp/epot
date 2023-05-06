import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {IcMap} from '../../../assets';
import {colors, fonts} from '../../../utils';

const TextArea = ({
  label,
  editable,
  value,
  onChangetext,
  secureTextEntry,
  disable,
  placeholder,
  keyboardType,
  maxLength,
  multiline,
  numberOfLines,
  type,
}) => {
  const [border, setBorder] = useState(colors.border);

  const onFocusform = () => {
    setBorder(colors.tersier);
  };

  const onBlurForm = () => {
    setBorder(colors.border);
  };

  return (
    <View style={styles.textAreaContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        underlineColorAndroid="transparent"
        keyboardType={keyboardType}
        placeholder={placeholder}
        onFocus={onFocusform}
        onBlur={onBlurForm}
        style={styles.Input(border)}
        editable={editable}
        value={value}
        onChangeText={onChangetext}
        secureTextEntry={secureTextEntry}
        selectTextOnFocus={!disable}
        editable={!disable}
        maxLength={maxLength}
        multiline={multiline}
        numberOfLines={numberOfLines}
      />
    </View>
  );
};

export default TextArea;

const styles = StyleSheet.create({
  Input: (border) => ({
    width: 150,
    height: 80,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    //backgroundColor: 'yellow',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: border,
  }),
  label: {
    fontSize: 16,
    color: colors.mainApp.labelForm,
    marginBottom: 6,
    fontFamily: fonts.primary.normal,
    borderRadius: 10,
  },
  textAreaContainer: {
    borderColor: colors.background,
    //borderWidth: 1,
    padding: 10,
    paddingHorizontal: 20,
  },
});
