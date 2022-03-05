import firebase from 'firebase/compat/app';

const firebaseConfig = {
    apiKey: "AIzaSyBlbBInOMURQP2l7qKB0AXNc9F6EtC3QpQ",
    authDomain: "possible-sun-324801.firebaseapp.com",
    projectId: "possible-sun-324801",
    storageBucket: "possible-sun-324801.appspot.com",
    messagingSenderId: "397379530636",
    appId: "1:397379530636:web:19a95ac672478dcf3170a9",
    measurementId: "G-QBWC4GSM20"
  // 위에서 확인했던 FireBase SDK snippet을 이용
};

export default firebase.initializeApp(firebaseConfig);