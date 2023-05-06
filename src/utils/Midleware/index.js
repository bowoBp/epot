import axios from 'axios';
import {endPoint, Fire} from '../../config';

export const loginUser = async (email, password) => {
  return Fire.auth().signInWithEmailAndPassword(email, password);
};

export const registerUser = (email, password) => {
  return Fire.auth().createUserWithEmailAndPassword(email, password);
};

export const saveUser = (uid, data) => {
  return Fire.database()
    .ref('users/' + uid + '/')
    .set(data);
};

export const getUser = (uid) => {
  return Fire.database().ref(`users/${uid}/`).once('value');
};

export const updateUser = (uid, profile) => {
  return Fire.database().ref(`users/${uid}/`).update(profile);
};

export const getSession = () => {
  Fire.auth().onAuthStateChanged();
};

export const getNews = () => {
  Fire.database().ref('news/').once();
};
