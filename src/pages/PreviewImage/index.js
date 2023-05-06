import React from 'react';
import {StyleSheet, Text, View, Image, StatusBar} from 'react-native';
import {Gap, Header} from '../../components';
import {colors} from '../../utils';

const PreviewImage = ({navigation, route, no}) => {
  const image = route.params;
  const number = no;

  return (
    <>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <Header title={`Image ${image.no}`} onPress={() => navigation.goBack()} />
      <View style={styles.page}>
        <Gap height={50} />
        <Image style={styles.image} source={image} />
      </View>
    </>
  );
};

export default PreviewImage;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: colors.white},
  image: {width: 400, height: 300, alignSelf: 'center'},
});
