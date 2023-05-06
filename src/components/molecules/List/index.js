import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  IconHelp,
  IconLanguage,
  IconNext,
  IconProfile,
  IconRate,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const List = ({profile, name, desc, type, onPress, icon}) => {
  const Icon = () => {
    if (icon === 'profile') {
      return <IconProfile />;
    }
    if (icon === 'language') {
      return <IconLanguage />;
    }
    if (icon === 'rate') {
      return <IconRate />;
    }
    if (icon === 'help') {
      return <IconHelp />;
    }
    return <IconProfile />;
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {icon ? <Icon /> : <Image source={profile} style={styles.avatar} />}
      <View style={styles.text}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.historychat}>{desc}</Text>
      </View>
      {type === 'next' && <IconNext />}
    </TouchableOpacity>
  );
};

export default List;

const styles = StyleSheet.create({
  avatar: {width: 46, height: 46, borderRadius: 46 / 2, marginRight: 12},
  name: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
    textTransform: 'capitalize',
  },
  historychat: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
    textTransform: 'capitalize',
  },
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    flex: 1,
    marginLeft: 16,
  },
});
