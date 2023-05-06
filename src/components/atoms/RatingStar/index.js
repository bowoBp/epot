import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {starCounter, starFilled} from '../../../assets';

const RatingStar = ({title, onPress}) => {
  const [defaultRating, setDefaultRating] = useState(0);
  const [maxrating, setMaxRating] = useState([1, 2, 3, 4, 5]);
  const starImgFilled = starFilled;
  const startImgCorner = starCounter;
  return (
    <View>
      <Text>{title}</Text>
      <View style={styles.container}>
        {maxrating.map((item, index) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item}
              onPress={() => {
                setDefaultRating(item);
                onPress(item); //fungction properti di kirim ke depan
              }}>
              <Image
                style={styles.img}
                source={item <= defaultRating ? starImgFilled : startImgCorner}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default RatingStar;

const styles = StyleSheet.create({
  img: {width: 30, height: 30, resizeMode: 'cover'},
  container: {justifyContent: 'center', flexDirection: 'row'},
});
