import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const Loading = () => {
  return (
    <View style={styles.continer}>
      <ActivityIndicator size="large" color={colors.barBackground} />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  continer: {
    flex: 1,
    position: 'absolute',
    backgroundColor: colors.loadingBackground,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontFamily: fonts.primary[600],
    color: colors.barBackground,
    marginTop: 16,
  },
});
