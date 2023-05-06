import {NavigationContainer} from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';
import React, {useState} from 'react';
import Router from './router';
import {Provider, useSelector} from 'react-redux';
import {store} from './redux';
import {navigationRef} from './utils';
import {DobleTapClose} from './pages';
import NotifService from './utils/pushnotif/NotifService';
import {useDispatch} from 'react-redux';
import {Alert} from 'react-native';

const MainApp = () => {
  const [stateRoute, setStateRoute] = useState('');
  const dispatch = useDispatch();
  const isCurrenttScreenInitialOne = (state) => {
    const route = state.routes[state.index];
    setStateRoute(route.name);
  };
  const onRegister = (token) => {
    dispatch({type: 'SET_NOTIF', value: token.token});
  };

  const onNotif = (notif) => {
    Alert.alert(notif.title, notif.message);
  };

  const notif = new NotifService(onRegister, onNotif);

  const handlePerm = (perms) => {
    Alert.alert('Permissions', JSON.stringify(perms));
  };
  return (
    <>
      <NavigationContainer
        onStateChange={(state) => isCurrenttScreenInitialOne(state)}
        ref={navigationRef}>
        <Router />
        <DobleTapClose statusRoute={stateRoute} />
      </NavigationContainer>
      <FlashMessage position="top" />
    </>
  );
};

const App = () => {
  return (
    <>
      <Provider store={store}>
        <MainApp />
      </Provider>
    </>
  );
};

export default App;
