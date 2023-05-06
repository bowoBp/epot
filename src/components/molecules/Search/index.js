import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {IConSearch} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Search = ({title}) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder={title} style={styles.input} />
      <TouchableOpacity style={styles.icon}>
        <IConSearch />
      </TouchableOpacity>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.mainApp.borderSearch,
    borderRadius: 25,
    height: 40,
    fontSize: 13,
    fontFamily: fonts.primary[200],
    paddingLeft: 46,
    paddingRight: 40,
  },
  icon: {
    position: 'absolute',
    top: 12,
    left: 15,
  },
  container: {
    position: 'relative',
  },
});
