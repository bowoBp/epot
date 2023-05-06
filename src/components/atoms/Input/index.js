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

const Input = ({
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
  map,
  onPress,
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
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        keyboardType={keyboardType}
        placeholder={placeholder}
        onFocus={onFocusform}
        onBlur={onBlurForm}
        style={styles.Input(border, type)}
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
      {map && (
        <TouchableOpacity style={styles.icmap} onPress={onPress}>
          <IcMap />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  Input: (border, type) => ({
    borderWidth: 1,
    borderColor: border,
    borderRadius: 10,
    padding: 12,
    paddingHorizontal: type === 'ulasan' ? 5 : 12,
  }),
  label: {
    fontSize: 16,
    color: colors.mainApp.labelForm,
    marginBottom: 6,
    fontFamily: fonts.primary.normal,
  },
  icmap: {
    position: 'absolute',
    left: 280,
    top: 50,
  },
});
