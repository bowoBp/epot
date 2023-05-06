import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';
import {Picker} from '@react-native-picker/picker';
import {getDataBidang} from '../../../utils/axios';
import {isEmpty} from 'lodash';
import {useDispatch, useSelector} from 'react-redux';

const DropDown = ({label, onChange}) => {
  const [selected, setSelected] = useState([]);
  const stateGlobal = useSelector((state) => state.reducerToken);

  useEffect(() => {
    getBidangs();

    return () => getBidangs();
  }, []);

  const getBidangs = async () => {
    const ress = await getDataBidang(stateGlobal.token);
    const dt = ress.result.data;
    setSelected(dt);
  };

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Picker mode="dropdown" selectedValue={selected} onValueChange={onChange}>
        {!isEmpty(selected) &&
          selected.map((item) => {
            return (
              <Picker.Item label={item.name} value={item._id} key={item._id} />
            );
          })}
      </Picker>
    </View>
  );
};

export default DropDown;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    color: colors.text.secondary,
    marginBottom: 6,
    fontFamily: fonts.primary.normal,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
