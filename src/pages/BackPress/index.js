import React, {useState, useEffect} from 'react';
import {Platform, BackHandler, ToastAndroid} from 'react-native';
import {goBack} from '../../utils';

const DoubleTapToClose = ({statusRoute, navigation}) => {
  //console.log('DoubleTapToClose', statusRoute);
  const [exitApp, setExitApp] = useState(0);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
  });

  const backAction = () => {
    console.log('Page backAction', statusRoute);
    if (statusRoute === 'MainApp' || statusRoute === 'GetStarted') {
      //ToastAndroid.show('Tap again to exit app', ToastAndroid.SHORT);
      setTimeout(() => {
        setExitApp(0);
      }, 2000); // 2 seconds to tap second-time

      if (exitApp === 0) {
        setExitApp(exitApp + 1);

        ToastAndroid.show('Tap sekali lagi untuk keluar', ToastAndroid.SHORT);
      } else if (exitApp === 1) {
        BackHandler.exitApp();
      }
    } else {
      goBack();
    }

    return true;
  };

  return <></>;
};

export default DoubleTapToClose;
