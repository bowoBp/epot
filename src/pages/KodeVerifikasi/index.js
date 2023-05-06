import React, {useEffect, useRef, useState} from 'react';
import {StatusBar, StyleSheet, Text, TextInput, View} from 'react-native';
import BackgroundTimer from 'react-native-background-timer';
import {ScrollView} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {ILogoVerifikasi} from '../../assets';
import {Button, Header, Link} from '../../components';
import {colors, fonts, hideEmail} from '../../utils';
import {loginPublic} from '../../utils/axios';

const KodeVerifikasi = ({navigation, route}) => {
  const users = route.params;
  const token = useSelector((state) => state.reducerPushNotif);
  const [secondsLeft, setSecondLeft] = useState(300);
  const [timeron, setTimeron] = useState(true);
  const [loginInternal, setLoginInternal] = useState({
    otp: '',
    id: users.user_id,
    email: '',
    device_id: token.idNotif,
  });
  const dispatch = useDispatch();

  const inputEl1 = useRef(null);
  const inputEl2 = useRef(null);
  const inputEl3 = useRef(null);
  const inputEl4 = useRef(null);

  useEffect(() => {
    emailHas();
    if (timeron) startTimer();
    else BackgroundTimer.stopBackgroundTimer();
    return () => {
      BackgroundTimer.stopBackgroundTimer();
    };
  }, [0]);

  useEffect(() => {
    if (secondsLeft === 0) BackgroundTimer.stopBackgroundTimer();
  }, [0]);

  const startTimer = () => {
    BackgroundTimer.runBackgroundTimer(() => {
      setSecondLeft((secs) => {
        if (secs > 0) return secs - 1;
        else return 0;
      });
    }, 1000);
  };

  const clockify = () => {
    let hours = Math.floor(secondsLeft / 60 / 60);
    let mins = Math.floor(secondsLeft / 60);
    let seconds = Math.floor(secondsLeft % 60);
    let displayHours = hours < 10 ? `0${hours}` : hours;
    let displayMins = mins < 10 ? `0${mins}` : mins;
    let displaySecs = seconds < 10 ? `0${seconds}` : seconds;
    return {
      displayHours,
      displayMins,
      displaySecs,
    };
  };

  const onChangeText = (key, value) => {
    const x = loginInternal.otp;
    const y = x.concat(value);
    setLoginInternal({
      ...loginInternal,
      otp: y,
    });
  };

  const onSignin = async () => {
    const ress = await loginPublic(loginInternal);
    if (ress.status === 'OK') {
      const users = ress.result;
      if (users.user_type === 'REGULAR') {
        dispatch({type: 'SET_TOKEN', value: users.access_token});
        setLoginInternal({
          ...loginInternal,
          otp: '',
        });
        inputEl1.current.clear();
        inputEl2.current.clear();
        inputEl3.current.clear();
        inputEl4.current.clear();
        navigation.replace('MainApp', ress.users);
      } else {
        alert(
          'Maaf, akun anda bukan sebagai masyarakat, silahkan login melalui web',
        );
        navigation.replace('GetStarted');
      }
    }
    setLoginInternal({
      ...loginInternal,
      otp: '',
    });
    inputEl1.current.clear();
    inputEl2.current.clear();
    inputEl3.current.clear();
    inputEl4.current.clear();
  };
  const emailHas = async () => {
    const has = await hideEmail(users.email);
    setLoginInternal({
      ...loginInternal,
      email: has,
    });
  };

  return (
    <View style={styles.page}>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <Header type="verifikasi" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.text}>Kode Verifikasi</Text>
        <View style={styles.content}>
          <ILogoVerifikasi />
          <View style={styles.containerinput}>
            <View style={styles.childinput}>
              <TextInput
                keyboardType="numeric"
                maxLength={1}
                style={styles.input}
                ref={inputEl1}
                //autoFocus={true}
                onChangeText={(value) =>
                  onChangeText('joinOtp1', value.toString())
                }
                onChange={() => inputEl2.current.focus()}
              />
            </View>
            <View style={styles.childinput}>
              <TextInput
                keyboardType="numeric"
                maxLength={1}
                style={styles.input}
                ref={inputEl2}
                onChangeText={(value) => onChangeText('otp', value)}
                onChange={() => inputEl3.current.focus()}
              />
            </View>
            <View style={styles.childinput}>
              <TextInput
                keyboardType="numeric"
                maxLength={1}
                style={styles.input}
                ref={inputEl3}
                onChangeText={(value) => onChangeText('otp', value)}
                onChange={() => inputEl4.current.focus()}
              />
            </View>
            <View style={styles.childinput}>
              <TextInput
                keyboardType="numeric"
                maxLength={1}
                style={styles.input}
                ref={inputEl4}
                onChangeText={(value) => onChangeText('otp', value)}
              />
            </View>
          </View>
          <View style={styles.otp}>
            <Text style={styles.textotp}>
              Kode OTP sudah dikirim ke email : {'\n'}
              {loginInternal.email}
            </Text>

            <Text style={styles.textotp}>
              Silahkan cek kotak masuk atau spam email anda
            </Text>
            {secondsLeft === 0 ? (
              <Link title="Kirim Ulang Kode Verifikasi" align="center" />
            ) : (
              <Text style={styles.time}>
                Waktu Tersisa {clockify().displayMins} :{' '}
                {clockify().displaySecs}
              </Text>
            )}
          </View>
        </View>
        <View style={{paddingTop: 50}}>
          <Button title="Masuk" onPress={onSignin} />
        </View>
      </ScrollView>
    </View>
  );
};

export default KodeVerifikasi;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
    //paddingVertical: 40,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 31,
    fontFamily: fonts.primary[400],
    color: colors.text.primary,
    textAlign: 'center',
  },
  content: {
    paddingVertical: 20,

    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: 56,
    height: 56,
    backgroundColor: colors.background,
    borderRadius: 10,
    paddingRight: 20,
    textAlign: 'center',
    fontSize: 13,
    fontFamily: fonts.primary[400],
    paddingLeft: 20,
  },
  containerinput: {
    flexDirection: 'row',
    paddingVertical: 20,
  },
  childinput: {
    paddingRight: 18,
  },
  time: {
    color: 'red',
    textAlign: 'center',
  },
  otp: {
    paddingTop: 20,
  },
  textotp: {
    textAlign: 'center',
  },
});
