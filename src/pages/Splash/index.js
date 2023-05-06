import React, {useEffect} from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {ILogoTipidter} from '../../assets';
import {colors, fonts} from '../../utils';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('GetStarted');
    }, 3000);
    // return () => {
    //   cleanup;
    // };
  }, [navigation]);

  return (
    <View style={styles.page}>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <ILogoTipidter />
      <Text style={styles.title}>LAPOR TIPIDTER </Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontFamily: fonts.primary[600],
    fontSize: 20,
    marginTop: 20,
    color: colors.text.primary,
  },
});
