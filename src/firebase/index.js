import firebase from 'firebase/app';
import 'firebase/database';
import config from '../config';
import 'firebase/auth';

  const app = firebase.initializeApp(config.firebase);

  export const db =  app.database();
  export const auth = app.auth();