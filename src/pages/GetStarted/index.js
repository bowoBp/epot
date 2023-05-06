import React from 'react';
import {ImageBackground, StatusBar, StyleSheet, Text, View} from 'react-native';
import {ILogoMulai, ILogoTipidGs} from '../../assets';
import {Button, Gap} from '../../components';
import {colors, fonts} from '../../utils';

const GetStarted = ({navigation}) => {
  return (
    <>
      <StatusBar backgroundColor={colors.barBackground} />
      <ImageBackground source={ILogoMulai} style={styles.page}>
        <View style={styles.icon}>
          <ILogoTipidGs />
          <Text style={styles.title}>
            SAVE OUR NATURAL RESOURCES FOR FUTURE GENERATION
          </Text>
        </View>
        <Button title="Masuk" onPress={() => navigation.navigate('Login')} />
        <Gap height={10} />
        <Button
          type="secondary"
          title="Daftar"
          onPress={() => navigation.navigate('TermsCondition')}
        />
        <Gap height={16} />
      </ImageBackground>
    </>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    flex: 1,
    justifyContent: 'space-between',
  },
  icon: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    color: colors.white,
    //marginTop: 91,
    paddingTop: 10,
    fontFamily: fonts.primary[600],
  },
});
