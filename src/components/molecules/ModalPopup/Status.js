import React from 'react';
import {Modal, StyleSheet, Text, View} from 'react-native';
import {IcInformasi, ICtolakTanggapan} from '../../../assets';
import {Button, Gap} from '../../atoms';

const Status = ({visible, onPress, statlaporan, tanggapan}) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={visible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {statlaporan === 'ditolak' ? <ICtolakTanggapan /> : <IcInformasi />}

            {/* <Text bold style={styles.modalTextinfo}>
              {statlaporan}
            </Text> */}
            <Gap height={20} />
            <Text style={styles.modalText}>{tanggapan}</Text>
            <Button type="Detail-Laporan" title="Kembali" onPress={onPress} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Status;

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
    alignItems: 'center',
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
    marginBottom: 15,
    textAlign: 'center',
    //textTransform: 'capitalize',
  },
  modalTextinfo: {
    marginTop: 15,
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20,
    textTransform: 'capitalize',
  },
});
