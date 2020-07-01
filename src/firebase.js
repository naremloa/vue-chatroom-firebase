import firebase from 'firebase/app';
import 'firebase/database';

// Set the configuration for your app
// TODO: Replace with your project's config object
const config = {
  // apiKey: 'apiKey',
  // projectId: 'vue-chatroom-firebase',
  // authDomain: 'vue-chatroom-firebase.firebaseapp.com',
  databaseURL: 'https://vue-chatroom-firebase.firebaseio.com',
  // storageBucket: 'bucket.appspot.com',
};
firebase.initializeApp(config);

const fPath = (path) => `${process.env.VUE_APP_DATABASE || '/'}${path}`;
// 封裝 database api 引入環境變數
const fDb = () => firebase.database();
export const fDbChatroomRef = (ref = '') => fDb().ref(fPath(ref));
