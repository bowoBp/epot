import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Button, Gap} from '../../components';
import {colors, fonts} from '../../utils';

const TermsCondition = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.page}>
        <Text style={styles.header}>
          Ketentuan Penggunaan (Terms of Use) Layanan LAPOR TIPIDTER!
        </Text>
        <Text style={styles.headerChild}>Versi 1</Text>
        <Gap height={'0.5%'} />
        <View>
          <Text style={styles.subHead}>1. Definisi</Text>
          <Text style={styles.subchild}>
            {'\u2022'}
            <Text style={styles.text}>
              {' '}
              Sistem Lapor Tipidter – Layanan Aplikasi Lapor Tipidter merupakan
              aplikasi layanan pelaporan atau pengaduan masyarakat terhadap
              pelanggaran terkait: Sumber Daya Alam, Lingkungan Hidup, dan
              Keanekaragaman Hayati melalui beberapa kanal yaitu website
              https://laportipidter.com dan aplikasi Android.
            </Text>
          </Text>
          <Text style={styles.subchild}>
            {'\u2022'}
            <Text>
              {' '}
              Lembaga pengelola LAPOR TIPIDTER adalah Direktorat Tindak Pidana
              Tertentu.
            </Text>
          </Text>
          <Text style={styles.subchild}>
            {'\u2022'}
            <Text style={styles.text}>
              {' '}
              Pengguna adalah pihak yang menggunakan layanan LAPOR TIPIDTER
              untuk menyampaikan pengaduan terkait dengan pelayanan publik
              melalui LAPOR TIPIDTER.
            </Text>
          </Text>
          <Text style={styles.subchild}>
            {'\u2022'}
            <Text style={styles.text}>
              {' '}
              Akun adalah informasi yang digunakan oleh pengguna, pengelola, dan
              penanggung jawab untuk masuk ke LAPOR TIPIDTER .
            </Text>
          </Text>
          <Text style={styles.subchild}>
            {'\u2022'}
            <Text style={styles.text}>
              {' '}
              Pendaftaran adalah proses untuk membuat akun LAPOR TIPIDTER
            </Text>
          </Text>
          <Text style={styles.subchild}>
            {'\u2022'}
            <Text style={styles.text}>
              {' '}
              Fitur adalah segala bentuk fungsi yang terdapat dalam LAPOR
              TIPIDTER mencakup keseluruhan kanal.
            </Text>
          </Text>
        </View>
        <Gap height={'0.5%'} />
        <View>
          <Text style={styles.subHead}>
            2.Pentingnya Ketentuan Penggunaan Layanan
          </Text>
          <Text style={styles.subchild}>
            {'\u2022'}
            <Text style={styles.text}>
              {' '}
              Dengan mengunduh, mengakses, menjelajahi dan atau menggunakan
              layanan LAPOR TIPIDTER ini, berarti Pengguna setuju untuk terikat
              oleh Ketentuan Penggunaan Layanan ini. Jika Pengguna tidak setuju
              dengan Syarat dan Ketentuan Penggunaan ini, pengguna harus segera
              menghentikan akses dan penggunaan layanan yang ditawarkan pada
              LAPOR TIPIDTER
            </Text>
          </Text>
          <Text style={styles.subchild}>
            {'\u2022'}
            <Text>
              {' '}
              Kebijakan ini berlaku untuk semua kanal layanan LAPOR TIPIDTER
            </Text>
          </Text>
        </View>
        <Gap height={'1%'} />
        <View>
          <Text style={styles.subHead}>
            3.Perubahan Ketentuan Penggunaan Layanan
          </Text>
          <Text style={styles.subchild}>
            {'\u2022'}
            <Text style={styles.text}>
              {' '}
              Penyedia layanan berhak untuk mengubah ketentuan penggunaan ini
              setiap saat dan memberitahukan setiap perubahan kepada pengguna.
              Ketentuan yang baru akan menggantikan ketentuan yang sebelumnya
              telah disetujui.
            </Text>
          </Text>
        </View>
        <Gap height={'1%'} />
        <View>
          <Text style={styles.subHead}>4. Syarat Penggunaan</Text>
          <Text style={styles.subchild}>
            {'\u2022'}
            <Text style={styles.text}>
              {' '}
              Aplikasi LAPOR TIPIDTER hanya digunakan untuk menyampaikan
              pengaduan pelanggaran terkait : Sumber Daya Alam, Lingkungan
              Hidup, dan Keanekaragaman Hayati
            </Text>
          </Text>
          <Text style={styles.subchild}>
            {'\u2022'}
            <Text style={styles.text}>
              {' '}
              Pengguna tidak diperbolehkan untuk menggunakan identitas pribadi
              milik orang lain untuk menggunakan layanan LAPOR TIPIDTER dan
              wajib menjaga kerahasiaan informasi yang didapatkan di aplikasi
              LAPOR TIPIDTER.
            </Text>
             
          </Text>
          <Text style={styles.subchild}>
            {'\u2022'}
            <Text style={styles.text}>
              {' '}
              Pengguna tidak diperkenankan menyalahgunakan data dan informasi
              yang terdapat dalam layanan aplikasi LAPOR TIPIDTER untuk tujuan
              yang merugikan pihak lain serta melanggar peraturan
              perundang-undangan yang berlaku.
            </Text>
          </Text>
          <Text style={styles.subchild}>
            {'\u2022'}
            <Text style={styles.text}>
              {' '}
              Pengguna tidak diperbolehkan memberikan pengaduan dan informasi
              yang mengandung unsur diskriminasi atau berpotensi menimbulkan
              konflik suku, agama, ras, dan antar- golongan (SARA), menistakan,
              melecehkan, dan/atau menodai nilai-nilai agama.
            </Text>
          </Text>
          <Text style={styles.subchild}>
            {'\u2022'}
            <Text style={styles.text}>
              {' '}
              Penggunaan layanan LAPOR TIPIDTER adalah untuk kepentingan
              pribadi, non-komersial, dan tidak boleh digunakan untuk tujuan
              yang merugikan pihak lain.
            </Text>
          </Text>
          <Text style={styles.subchild}>
            {'\u2022'}
            <Text style={styles.text}>
              {' '}
              Dengan mengirimkan teks dan gambar saat menggunakan layanan,
              pengguna dengan ini memberikan lisensi kepada pengelola layanan
              atas materi tersebut dengan ketentuan bebas royalti atas
              penggunaan dan pendistribusian materi tersebut kepada Direktorat
              Tindak Pidana Tertentu.
            </Text>
          </Text>
          <Text style={styles.subchild}>
            {'\u2022'}
            <Text style={styles.text}>
              {' '}
              Penyedia layanan tidak memungut biaya apapun terhadap penggunaan
              layanan. Namun segala bentuk biaya yang diperlukan termasuk
              penyediaan telepon seluler, komputer, dan atau peralatan lain yang
              diperlukan untuk mengakses layanan, koneksi internet, Email OTP,
              dan keperluan telekomunikasi lainnya merupakan tanggung jawab
              pengguna.  Tindak
            </Text>
          </Text>
        </View>
        <Gap height={'1%'} />
        <View>
          <Text style={styles.subHead}>
            5. Tindak Lanjut pada LAPOR TIPIDTER
          </Text>
          <Text style={styles.subchild}>
            {'\u2022'}
            <Text style={styles.text}>
              {' '}
              Penanganan aduan yang diajukan oleh pengguna melalui LAPOR
              TIPIDTER akan mengikuti proses bisnis yang ada sebagaimana
              tercantum dalam Standar Layanan LAPOR TIPIDTER.
            </Text>
          </Text>
          <Text style={styles.subchild}>
            {'\u2022'}
            <Text style={styles.text}>
              {' '}
              Penanganan aduan menjadi kewenangan dan tergantung dari Direktorat
              Tindak Pidana Tertentu.
            </Text>
          </Text>
        </View>
        <Gap height={'1%'} />
        <View>
          <Text style={styles.subHead}>
            6.Kerahasiaan dan Informasi Pribadi
          </Text>
          <Text style={styles.subchild}>
            {'\u2022'}
            <Text style={styles.text}>
              {' '}
              Dengan menggunakan layanan pengaduan ini, pengguna setuju dan
              memahami bahwa informasi yang terkait dengan data pribadi dan data
              pengaduan dari pengguna akan diberikan kepada Direktorat Tindak
              Pidana Tertentu. Namun demikian, pengelola layanan memberikan
              jaminan kerahasiaan data dan informasi pada LAPOR TIPIDTER.
            </Text>
          </Text>
          <Text style={styles.subchild}>
            {'\u2022'}
            <Text style={styles.text}>
              {' '}
              Layanan LAPOR TIPIDTER mengumpulkan data pribadi pengguna sebagai
              jaminan keabsahan dari aduan yang disampaikan. Adapun data pribadi
              yang dikumpulkan adalah sebagai berikut:
              {'\r\n'}1.Nama pengguna sebagai pengenal identitas
              {'\r\n'}2.No Identitas meliputi NIK (No KTP) sebagai pengenal{' '}
              identitas
              {'\r\n'}3.Alamat Email pengguna untuk mengirim kode OTP dan
              notifikasi laporan
              {'\r\n'}4.Nomor Handphone untuk masuk kedalam aplikasi
            </Text>
          </Text>
        </View>
        <Gap height={'1%'} />
        <View>
          <Text style={styles.subHead}>7.Hak-hak Pengguna</Text>
          <Text style={styles.subchild}>
            {'\u2022'}
            <Text style={styles.text}>
              {' '}
              Pengguna berhak memiliki akun dalam menggunakan layanan pengaduan
              ini.
            </Text>
          </Text>
          <Text style={styles.subchild}>
            {'\u2022'}
            <Text>
              {' '}
              Pengguna berhak memanfaatkan fitur yang terdapat dalam layanan
              LAPOR TIPIDTER.
            </Text>
          </Text>
        </View>
        <Gap height={'1%'} />
        <View>
          <Text style={styles.subHead}>8. Kewajiban Pengguna</Text>
          <Text style={styles.subchild}>
            {'\u2022'}
            <Text style={styles.text}>
              {' '}
              Pengguna wajib menggunakan data pribadi milik sendiri.
            </Text>
          </Text>
          <Text style={styles.subchild}>
            {'\u2022'}
            <Text>
              {' '}
              Pengguna wajib menjaga kerahasiaan data pribadinya saat
              menggunakan layanan pengaduan.
            </Text>
          </Text>
          <Text style={styles.subchild}>
            {'\u2022'}
            <Text> Pengguna wajib menyampaikan laporan secara jelas.</Text>
          </Text>
          <Text style={styles.subchild}>
            {'\u2022'}
            <Text>
              Pengguna wajib menjaga informasi yang didapatkan dari pelayanan
              pengaduan ini apabila informasi tersebut mengandung kerahasiaan
              data negara dan/atau pihak lain.
            </Text>
          </Text>
          <Text style={styles.subchild}>
            {'\u2022'}
            <Text>
              Jika akun pengguna diretas atau dicuri sehingga pengguna
              kehilangan kontrol atas akunnya, maka pengguna wajib memberitahu
              pengelola layanan sesegera mungkin agar pengelola layanan dapat
              menonaktifkan akun pengguna dan melakukan tindak pencegahan
              lainnya.
            </Text>
          </Text>
        </View>
        <Gap height={'1%'} />
        <View>
          <Text style={styles.subHead}>
            9. Hak-hak Pengelola LAPOR TIPIDTER
          </Text>
          <Text style={styles.subchild}>
            {'\u2022'}
            <Text style={styles.text}>
              {' '}
              Pengelola layanan berhak mengelola informasi yang disampaikan oleh
              pengguna dalam menyampaikan aduan untuk kepentingan tindak lanjut
              dengan Direktorak Tindak Pidana Tertentu sebagaimana diatur dalam
              syarat dan ketentuan yang berlaku.
            </Text>
          </Text>
          <Text style={styles.subchild}>
            {'\u2022'}
            <Text>
              {' '}
              Pengelola layanan berhak menolak aduan yang tidak sesuai dengan
              syarat penggunaan dan kewajiban pengguna.
            </Text>
          </Text>
        </View>
        <Gap height={'1%'} />
        <View>
          <Text style={styles.subHead}>
            10. Kewajiban Pengelola LAPOR TIPIDTER
          </Text>
          <Text style={styles.subchild}>
            {'\u2022'}
            <Text style={styles.text}>
              {' '}
              Pengelola layanan wajib memiliki mekanisme untuk menjamin
              kerahasiaan data dan informasi yang tersimpan di dalam sistem
              sesuai dengan proses bisnis dan syarat layanan.
            </Text>
          </Text>
          <Text style={styles.subchild}>
            {'\u2022'}
            <Text>
              {' '}
              Pengelola layanan wajib memiliki mekanisme untuk menjaga
              kerahasiaan informasi pribadi pengguna yang tersimpan di dalam
              sistem.
            </Text>
          </Text>
          <Text style={styles.subchild}>
            {'\u2022'}
            <Text>
              {' '}
              Pengelola layanan wajib memiliki mekanisme yang mendukung
              pemenuhan hak-hak pengguna.
            </Text>
          </Text>
        </View>
        <Gap height={'1%'} />
        <View>
          <Text style={styles.subHead}>
            11.Pernyataan dan Pengecualian Kewajiban Penyedia Layanan
          </Text>
          <Text style={styles.subchild}>
            {'\u2022'}
            <Text style={styles.text}>
              {' '}
              Pengelola layanan tidak menjamin bahwa LAPOR TIPIDTER akan selalu
              dapat diakses, tanpa gangguan, tepat waktu, aman, bebas dari
              kesalahan atau bebas dari virus komputer atau hal yang merusak
              lainnya, dan atau bahwa layanan tidak akan terpengaruh oleh
              fasilitas infrastruktur, listrik atau telekomunikasi, kurangnya
              infrastruktur atau kegagalan teknologi informasi.
            </Text>
          </Text>
          <Text style={styles.subchild}>
            {'\u2022'}
            <Text>
              {' '}
              Pengelola layanan tidak bertanggung jawab atas kesalahan
              menjelajahi situs dan atau mengunduh versi aplikasi mobile yang
              dilakukan pengguna dan ketidakcocokan perangkat yang digunakan
              pengguna, serta dampak resiko yang terjadi akibatnya.
            </Text>
          </Text>
          <Text style={styles.subchild}>
            {'\u2022'}
            <Text>
              {' '}
              Jika pengguna terbukti menggunakan aplikasi untuk tujuan yang
              membahayakan, merugikan, atau di luar tujuan penggunaan yang
              dimaksudkan dalam aplikasi ini, maka penyedia layanan aplikasi
              tidak bertanggung jawab terhadap dampak yang ditimbulkan.
            </Text>
          </Text>
        </View>
        <Gap height={'1%'} />
        <View>
          <Text style={styles.subHead}>
            12.Pelanggaran terhadap syarat dan ketentuan
          </Text>
          <Text style={styles.subchild}>
            {'\u2022'}
            <Text style={styles.text}>
              {' '}
              Pelanggaran terhadap syarat dan ketentuan yang berlaku dapat
              dikenakan sanksi sesuai peraturan hukum dan perundang-undangan
              yang berlaku..
            </Text>
          </Text>
        </View>
        <Gap height={'0.5%'} />
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
          <Button
            type="btn-epot"
            title="Kembali"
            onPress={() => navigation.goBack()}
          />
          <Gap width={'15%'} />
          <Button
            type="btn-epot"
            title="Setuju"
            onPress={() => navigation.navigate('Register')}
          />
        </View>
        <Text>
          {'\r\n'}
          {'\r\n'}
          {'\r\n'}
          {'\r\n'}
          {'\r\n'}
          {'\r\n'}
          {'\r\n'}
          {'\r\n'}
          {'\r\n'}
          {'\r\n'}
          {'\r\n'}
          {'\r\n'}
          {'\r\n'}
          {'\r\n'}
          {'\r\n'}
          {'\r\n'}
          {'\r\n'}
          {'\r\n'}
          {'\r\n'}
          {'\r\n'}
          {'\r\n'}
          {'\r\n'}
          {'\r\n'}
          {'\r\n'}
          {'\r\n'}
          {'\r\n'}
        </Text>
      </View>
    </ScrollView>
  );
};

export default TermsCondition;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    color: colors.white,
    //paddingHorizontal: '1%',
    //paddingVertical: '1%',
    //paddingBottom: '5%',
  },
  header: {fontSize: 16, fontFamily: fonts.primary[600], textAlign: 'center'},
  headerChild: {
    fontSize: 14,
    fontFamily: fonts.primary[300],
    textAlign: 'center',
  },
  subHead: {
    fontSize: 12,
    fontFamily: fonts.primary[700],
    textAlign: 'left',
    paddingLeft: '2%',
  },
  subchild: {
    paddingTop: '1%',
    fontSize: 12,
    fontFamily: fonts.primary[400],
    textAlign: 'justify',
    paddingHorizontal: '5%',
  },
  text: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
  },
});
