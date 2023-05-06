import axios from 'axios';
import React, {useState} from 'react';
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {Button, Gap, Header, Input, Loading} from '../../components';
import {endPoint, headrs} from '../../config';
import {
  colors,
  fonts,
  MessagesPoup,
  SuccessMssage,
  useform,
  validateFormLogin,
} from '../../utils';

const Register = ({navigation}) => {
  const token = useSelector((state) => state.reducerPushNotif);
  const [loadingRegis, setLoadingRegis] = useState(false);
  const [form, setForm] = useform({
    name: '',
    email: '',
    nik: '',
    phone: '',
    //id_device: token.idNotif,
  });

  const onRegist = () => {
    setLoadingRegis(true);
    console.log(form);
    const validate = validateFormLogin(form);
    if (!validate) {
      const dt = JSON.stringify(form);
      console.log('dt', dt);
      axios
        .post(`${endPoint.REGISTER}`, dt, headrs)
        .then((res) => {
          setForm('reset');
          setLoadingRegis(false);
          console.log(res.data);
          SuccessMssage();
          navigation.replace('Login');
        })
        .catch((err) => {
          console.log(err.response.data.error.message);
          MessagesPoup(err.response.data.error.message);
          setLoadingRegis(false);
        });
    }
    setLoadingRegis(false);
  };
  return (
    <>
      <View style={styles.page}>
        <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
        <Header
          title="Daftar Akun"
          onPress={() => navigation.navigate('GetStarted')}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <Input
              label="Nama"
              value={form.name}
              placeholder="Masukan Nama Lengkap"
              onChangetext={(value) => setForm('name', value)}
            />
            <Gap height={24} />
            <Input
              label="Email"
              value={form.email}
              placeholder="admin@gmail.com"
              onChangetext={(value) => setForm('email', value)}
            />
            <Text style={styles.textEmail}>
              pastikan email aktif untuk menerima kode OTP
            </Text>
            <Gap height={24} />
            <Input
              label="NIK KTP"
              placeholder="Contoh: 332806XXXXXXXXX"
              value={form.nik}
              keyboardType="numeric"
              onChangetext={(value) => setForm('nik', value)}
              maxLength={16}
            />
            <Gap height={24} />
            <Input
              label="Nomor Handphone"
              value={form.phone}
              placeholder="0812 2673 XXX XXX"
              keyboardType="numeric"
              onChangetext={(value) => setForm('phone', value)}
              maxLength={12}
            />

            <View style={styles.btn}>
              <Button title="Daftar" onPress={onRegist} />
            </View>
          </View>
        </ScrollView>
      </View>
      {loadingRegis && <Loading />}
    </>
  );
};

export default Register;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  content: {
    flex: 1,
    padding: 25,
    paddingTop: 10,
    paddingBottom: 15,
  },
  textEmail: {fontSize: 10, fontFamily: fonts.primary[400], color: 'grey'},
  btn: {paddingHorizontal: 40, flex: 1, paddingTop: 40},
});
