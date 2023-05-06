import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {ICaddress, ICphone, ILogoVerifikasi} from '../../assets';
import {Gap} from '../../components';
import {colors, fonts} from '../../utils';

const About = () => {
  return (
    <View style={styles.page}>
      <ScrollView>
        <View style={styles.logo}>
          <ILogoVerifikasi />
        </View>
        <Text style={styles.textheader}>
          DIREKTORAT TINDAK PIDANA TERTENTU BARESKRIM POLRI
        </Text>
        <Text style={styles.text1}>
          Lapor Tipidter merupakan aplikasi layanan pelaporan atau pengaduan
          masyarakat terhadap pelanggaran terkait : Sumber Daya Alam, Lingkungan
          Hidup, dan Keanekaragaman Hayati.
        </Text>
        <Text style={styles.text1}>
          Tindak pidana tertentu yang ditangani antara lain:
        </Text>
        <Gap height={20} />
        <Text style={styles.text2}>1. Tumbuhan dan Satwa yang Dilindungi</Text>
        <Text style={styles.text2}>2. Pencemaran Lingkungan Hidup, </Text>
        <Text style={styles.text2}>3. Perkebunan dan Kehutanan</Text>
        <Text style={styles.text2}>4. Sumber Daya Air dan Perikanan</Text>
        <Text style={styles.text2}>5.Pertambangan, Minyak dan Gas Bumi</Text>

        <Gap height={20} />
        <View style={styles.phone}>
          <ICphone />
          <Text style={styles.alamat}>Telepon :</Text>
          <Text style={styles.alamat}> 021-7218141</Text>
        </View>
        <Gap height={10} />
        <View style={styles.address}>
          <ICaddress />
          <Text style={styles.alamat}>Alamat : </Text>
          <Text style={styles.alamat}>
            Jl. Trunojoyo No.3 Gedung Bareskrim Lantai 8, Jakarta Selatan Daerah
            Khusus Ibukota Jakarta 12110
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: colors.white},
  logo: {alignContent: 'center', alignItems: 'center', paddingTop: 30},
  textheader: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
    paddingTop: 20,
  },
  text1: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    textAlign: 'auto',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  text2: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    textAlign: 'auto',
    paddingLeft: 30,
  },
  text3: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    textAlign: 'auto',
    paddingLeft: 45,
  },
  phone: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 210,
    paddingLeft: 20,
  },
  address: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 150,
    paddingLeft: 20,
  },
  alamat: {
    paddingLeft: 10,
    fontSize: 12,
    fontFamily: fonts.primary[400],
    textAlign: 'auto',
  },
});
