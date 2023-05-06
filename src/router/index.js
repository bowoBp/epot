import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {NavigationBottom} from '../components';
import {
  About,
  AddLaporan,
  CariLokasi,
  DetailLaporan,
  GetStarted,
  History,
  KodeFerivikasi,
  Laporan,
  Login,
  PilihLokasi,
  PreviewImage,
  Register,
  Splash,
  PushNotification,
  DobleTapClose,
  TermsCondition,
} from '../pages';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={(props) => <NavigationBottom {...props} />}>
      <Tab.Screen name="Laporan" component={Laporan} />
      <Tab.Screen name="Buat Laporan" component={AddLaporan} />
      <Tab.Screen name="Info" component={About} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Kodeverifikasi"
        component={KodeFerivikasi}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddLaporan"
        component={AddLaporan}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailLaporan"
        component={DetailLaporan}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="History"
        component={History}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CariLokasi"
        component={CariLokasi}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PilihLokasi"
        component={PilihLokasi}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PreviewImage"
        component={PreviewImage}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="PushNotification"
        component={PushNotification}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DobleTapClose"
        component={DobleTapClose}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TermsCondition"
        component={TermsCondition}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
