import React, {useState} from 'react';
import {Modal, StyleSheet, Text, View} from 'react-native';
import {sub} from 'react-native-reanimated';
import {useDispatch, useSelector} from 'react-redux';
import {CreateSurvey} from '../../../utils/axios';
import {Button, Gap, Input, RatingStar, TextArea} from '../../atoms';

const RatingModal = ({visible, onPress, idlap, hasRating}) => {
  const stateGlobal = useSelector((state) => state.reducerToken);
  const [survey, setSurvey] = useState({
    id: idlap,
    rating_kecepatan: 0,
    rating_kepuasan: 0,
    ulasan: '',
  });
  const dispatch = useDispatch();
  const onStarRatingPress = (star) => {};
  const changeText = (key, value) => {
    //console.log(key, value);
    setSurvey({...survey, [key]: value});
  };
  const submitSurvey = async () => {
    const ress = await CreateSurvey(stateGlobal.token, survey);
    if (ress.status === 'OK') {
      dispatch({type: 'SET_BTN', value: false});
      hasRating();
    }
  };
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={visible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <RatingStar
              onPress={(item) => changeText('rating_kecepatan', item)}
              title="Kecepatan"
              selectedStar={(rating) => onStarRatingPress(rating)}
            />
            <Gap height={20} />
            <RatingStar
              onPress={(item) => changeText('rating_kepuasan', item)}
              title="Kepuasan"
              selectedStar={(rating) => onStarRatingPress(rating)}
            />
            <Gap height={20} />
            <TextArea
              type="ulasan"
              value={survey.ulasan}
              label="Ulasan"
              multiline={true}
              numberOfLines={5}
              onChangetext={(value) => changeText('ulasan', value)}
            />
            <View style={{flexDirection: 'row'}}>
              <Button type="btn-epot" title="Kembali" onPress={onPress} />
              <Gap width={20} />
              <Button type="btn-epot" title="Kirim" onPress={submitSurvey} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default RatingModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 50,
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
    marginBottom: 10,
  },
  modalTextinfo: {
    marginTop: 15,
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20,
  },
});
