import React, {useState} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {ILogoMulai, ILogoTextTipidter, ILogoVerifikasi} from '../../assets';
import {Button, Gap, Loading} from '../../components';
import Input from '../../components/atoms/Input';
import {colors, useform} from '../../utils';
import {loginAkun} from '../../utils/axios';

const Login = ({navigation}) => {
  const [loadingLogin, setLoadingLogin] = useState(false);
  const token = useSelector((state) => state.reducerPushNotif);
  const [formLogin, setFormLogin] = useform({
    phone: '',
    //device_id: token.idNotif,
  });

  const onLogin = async () => {
    setLoadingLogin(true);
    const users = await loginAkun(formLogin);
    if (users.status === 'OK') {
      setFormLogin('reset');
      setLoadingLogin(false);
      navigation.navigate('Kodeverifikasi', users.result);
    }
  };

  return (
    <>
      <StatusBar backgroundColor={colors.barBackground} />
      <ImageBackground style={styles.page} source={ILogoMulai}>
        <ScrollView>
          <View
            style={{
              flex: 1,
            }}>
            <View style={styles.logoLapor}>
              <ILogoTextTipidter />
            </View>

            <View style={styles.content}>
              <View style={styles.img}>
                <ILogoVerifikasi />
              </View>

              <View style={styles.input}>
                <Input
                  label="Nomor Handphone"
                  placeholder=" 0812 2233 XXXX"
                  keyboardType="numeric"
                  value={formLogin.phone}
                  onChangetext={(value) => setFormLogin('phone', value)}
                  maxLength={13}
                />
              </View>
              <View style={styles.btn}>
                <Button title="Masuk" onPress={onLogin} />
              </View>
              {/* <View style={styles.login}></View> */}
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
      {loadingLogin && <Loading />}
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    height: 250,
    borderRadius: 10,
    margin: 40,
    width: 300,
    maxWidth: '80%',
  },

  login: {
    flex: 1,
    alignContent: 'space-between',
    justifyContent: 'space-between',
    paddingBottom: 10,
    paddingTop: 20,
    backgroundColor: 'red',
  },
  input: {
    margin: 20,
  },
  btn: {marginHorizontal: 40, paddingBottom: 20},
  img: {
    position: 'relative',
    flex: 1,
    alignItems: 'center',
    marginTop: -30,
  },
  logoLapor: {
    flex: 1,
    padding: 40,
    alignItems: 'center',
  },
});
