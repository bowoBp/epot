import React from 'react';
import OtherModal from './OtherModal';
import RatingModal from './RatingModal';
import Status from './Status';

const ModalPopup = ({
  visible,
  onPress,
  type,
  saksi,
  fasilitas,
  uraian,
  statlaporan,
  tanggapan,
  idlap,
  hasRating,
}) => {
  if (type === 'more') {
    return (
      <OtherModal
        saksi={saksi}
        fasilitas={fasilitas}
        uraian={uraian}
        visible={visible}
        onPress={onPress}
      />
    );
  } else if (type === 'ulasan') {
    return (
      <RatingModal
        visible={visible}
        onPress={onPress}
        idlap={idlap}
        hasRating={hasRating}
      />
    );
  } else {
    return (
      <Status
        visible={visible}
        onPress={onPress}
        statlaporan={statlaporan}
        tanggapan={tanggapan}
      />
    );
  }
};

export default ModalPopup;
