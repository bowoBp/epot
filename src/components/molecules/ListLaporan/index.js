import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  ICmenungguLaporan,
  IConStar,
  ICterimaLaporan,
  ICtolakLaporan,
  ICverifyLaporan,
} from '../../../assets';
import {colors, fonts} from '../../../utils';
import {Gap} from '../../atoms';

const ListLaporan = ({title, subtitle, score, onPress, status}) => {
  return (
    <View style={styles.headder}>
      <View style={styles.wrapper}>
        <View style={styles.childwrapeer}>
          <View style={styles.container}>
            <View style={styles.content}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.subtitle}>{subtitle}</Text>
              {score > 0 ? (
                <View style={styles.rated}>
                  <Text style={styles.score}>{score}</Text>
                  {score === 1 && <IConStar />}
                  {score === 2 && (
                    <Text style={styles.star}>
                      <IConStar /> <IConStar />
                    </Text>
                  )}
                  {score === 3 && (
                    <Text style={styles.star}>
                      <IConStar /> <IConStar /> <IConStar />
                    </Text>
                  )}
                  {score === 4 && (
                    <Text style={styles.star}>
                      <IConStar />
                      <IConStar />
                      <IConStar />
                      <IConStar />
                    </Text>
                  )}
                  {score === 5 && (
                    <Text style={styles.star}>
                      <IConStar />
                      <IConStar />
                      <IConStar />
                      <IConStar />
                      <IConStar />
                    </Text>
                  )}
                </View>
              ) : null}
            </View>
            {/* <View style={styles.icStatus}>
              {status === 'menunggu' && <ICmenungguLaporan />}
            </View> */}
            <TouchableOpacity style={styles.detail} onPress={onPress}>
              <Text style={styles.textdetail}>Detail</Text>
              <Gap height={5} />
              {(status === 'menunggu' && <ICmenungguLaporan />) ||
                (status === 'terverifikasi' && <ICverifyLaporan />) ||
                (status === 'verifikasi' && <ICverifyLaporan />) ||
                (status === 'diterima' && <ICterimaLaporan />) ||
                (status === 'ditolak' && <ICtolakLaporan />)}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ListLaporan;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    //backgroundColor: 'cyan',
  },
  rated: {
    flexDirection: 'row',
    position: 'absolute',
    top: '100%',
    left: 1,
  },
  star: {flexDirection: 'row'},
  content: {position: 'relative'},
  detail: {
    paddingTop: 3,
    paddingRight: 20,
    flex: 1,
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 14,
    fontFamily: fonts.primary[600],
    color: colors.text.secondary,
    textTransform: 'capitalize',
    maxWidth: '80%',
  },
  subtitle: {
    fontSize: 12,
    fontFamily: fonts.primary.normal,
    textTransform: 'capitalize',
  },
  textdetail: {
    fontSize: 10,
    fontFamily: fonts.primary[400],
    color: colors.text.menuActive,
  },
  score: {
    fontSize: 10,
    fontFamily: fonts.primary[600],
    color: colors.text.rate,
    paddingRight: 5,
  },
  wrapper: {
    backgroundColor: colors.mainApp.borderlist,
    paddingLeft: 4,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  childwrapeer: {
    backgroundColor: colors.white,
    paddingBottom: '5%',
    paddingTop: '2%',
    paddingLeft: '2%',
    paddingRight: '2%',
  },
  headder: {paddingTop: 9},
  icStatus: {paddingVertical: '10%', backgroundColor: 'red', flex: 1},
});
