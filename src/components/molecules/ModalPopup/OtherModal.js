import React from 'react';
import {Modal, StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';
import {Button, Gap} from '../../atoms';

const OtherModal = ({visible, onPress, saksi, fasilitas, uraian}) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={visible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Saksi : </Text>
            <Text>{saksi}</Text>
            <Gap height={10} />
            <Text style={styles.modalText}>Alat/Fasilitas Terlapor : </Text>
            <Text>{fasilitas}</Text>
            <Gap height={10} />
            <Text style={styles.modalText}>Uraian Laporan : </Text>
            <Text>{uraian}</Text>
            <Gap height={50} />
            <Button type="Detail-Laporan" title="Kembali" onPress={onPress} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default OtherModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 10,
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    textTransform: 'capitalize',
    textAlign: 'left',
  },
  modalTextinfo: {
    marginTop: 15,
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20,
  },
});
