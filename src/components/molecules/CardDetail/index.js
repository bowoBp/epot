import {isEmpty} from 'lodash';
import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import {ModalPopup} from '../../molecules';
import {colors, fonts} from '../../../utils';
import {getTanggapan} from '../../../utils/axios';
import {Button, Gap, Link} from '../../atoms';
import MultipleImage from '../MultipleImage';

const CardDetail = ({
  onPress,
  ticketNo,
  status,
  namepelapor,
  alamatTerlapor,
  polda,
  image,
  saksi,
  fasilitas,
  uraian,
  idlap,
  rating,
  hasRating,
  toPreview,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [moreModal, setMoreModal] = useState('');
  const [tanggapan, setTanggapan] = useState({});

  const stateGlobal = useSelector((state) => state.reducerToken);
  const stateGBtn = useSelector((state) => state.reducerBtnSurvey);
  //console.log('survey', rating, stateGBtn);
  useEffect(() => {
    lihatTanggapan();
    return () => lihatTanggapan();
  }, [idlap]);
  const openModal = (param) => {
    if (param === 'more') {
      setMoreModal(param);
      setModalVisible(true);
    } else if (param === 'ulasan') {
      setMoreModal(param);
      setModalVisible(true);
    }
    {
      setModalVisible(true);
    }
  };
  const closeModal = (val) => {
    if (moreModal === 'more') {
      setMoreModal('');
      setModalVisible(false);
    } else if (moreModal === 'ulasan') {
      setMoreModal('');
      setModalVisible(false);
    }
    {
      setModalVisible(false);
    }
  };
  const lihatTanggapan = async () => {
    const ress = await getTanggapan(stateGlobal.token, idlap);
    if (ress.status === 'OK') {
      setTanggapan(ress.result);
    }
  };
  return (
    <>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrappertext}>
            <View style={{flex: 1}}>
              <Text style={styles.title}>#{ticketNo}</Text>
              <Text style={styles.company}>polda {polda}</Text>
              <Text style={styles.citytext}>Terlapor</Text>
              <Text style={styles.pelapor}>{namepelapor}</Text>
              <Text style={styles.citytext}>Lokasi</Text>
              <Text style={styles.locationtext}>{alamatTerlapor}</Text>
              <Link
                blue
                size={10}
                title="Lihat Selengkapnya"
                onPress={() => openModal('more')}
              />
            </View>
            <View style={styles.wrapbidang}>
              {status === 'menunggu' && (
                <Button type="btn-epot" title="Menunggu" />
              )}
              {status === 'terverifikasi' && (
                <Button type="btn-epot" title="verifikasi" />
              )}
              {status === 'diterima' && (
                <View>
                  <Button type="btn-epot" title="Diterima" />
                  <Gap height={10} />
                  {stateGBtn.status && rating === 0 && (
                    <Button
                      type="btn-epot"
                      title="Buat Ulasan"
                      onPress={() => openModal('ulasan')}
                    />
                  )}
                </View>
              )}
              {status === 'ditolak' && (
                <Button type="btn-epot" title="ditolak" />
              )}
            </View>
          </View>
          <View style={styles.uploadimages}>
            <ScrollView
              style={styles.img}
              horizontal
              showsHorizontalScrollIndicator={false}>
              {!isEmpty(image) &&
                image.map((item, index) => {
                  const img = item.includes('base64');
                  const image = {
                    uri: img ? item : `data:image/jpeg;base64,${item}`,
                    no: index + 1,
                  };
                  const no = index + 1;
                  return (
                    <TouchableOpacity
                      key={index}
                      onPress={() => toPreview(image)}>
                      <MultipleImage key={index} source={image} />
                    </TouchableOpacity>
                  );
                })}
            </ScrollView>
          </View>
          <View style={styles.wappertextupdate}></View>
          <View style={styles.btn}>
            <View>
              <Button
                type="Detail-Laporan"
                title="History Status"
                onPress={onPress}
              />
            </View>
            <View>
              <Button
                type="Detail-Laporan"
                title="Lihat Tanggapan"
                onPress={openModal}
              />
            </View>
          </View>
          <ModalPopup
            idlap={idlap}
            statlaporan={tanggapan.status}
            tanggapan={tanggapan.response}
            saksi={saksi}
            fasilitas={fasilitas}
            uraian={uraian}
            type={moreModal}
            visible={modalVisible}
            onPress={(val) => closeModal(val)}
            hasRating={hasRating}
          />
        </ScrollView>
      </View>
    </>
  );
};

export default CardDetail;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: 100,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    textTransform: 'capitalize',
  },
  company: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    textTransform: 'capitalize',
  },

  wrappertext: {
    //justifyContent: 'space-between',
    flex: 1,
    flexDirection: 'row',
    paddingTop: 5,
    paddingHorizontal: 10,
    //backgroundColor: 'yellow',
    //paddingBottom: 193,
    justifyContent: 'space-between',
  },

  locationtext: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.primary,
    textTransform: 'capitalize',
    maxWidth: '78%',
  },
  pelapor: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.primary,
    textTransform: 'capitalize',
    maxWidth: '80%',
  },
  citytext: {
    paddingTop: 5,
    fontSize: 10,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
  },
  img: {flex: 1},
  btn: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  uploadimages: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    paddingBottom: 10,
    //flex: 1,
    //marginTop: 70,
    //paddingTop: 70,
  },
  textupdate: {
    textAlign: 'center',
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.menuActive,
    paddingBottom: 7,
  },
  wrapbidang: {
    alignContent: 'center',
    //backgroundColor: 'red',
    //flex: 1,
    alignItems: 'flex-end',
  },
  wappertextupdate: {},
});
