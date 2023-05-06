import React from 'react';
import {TouchableOpacity} from 'react-native';
import {
  IconAddLaporanCircle,
  IconBackDark,
  IconBackLight,
} from '../../../assets';

const IconOnly = ({onPress, icon}) => {
  const Icon = () => {
    if (icon === 'back-dark') {
      return <IconBackDark />;
    }
    if (icon === 'back-light') {
      return <IconBackLight />;
    }
    if (icon === 'add-laporan') {
      return <IconAddLaporanCircle />;
    }
    return <IconAddLaporanCircle />;
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
};

export default IconOnly;
