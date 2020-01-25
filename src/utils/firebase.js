import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCK48yyyfcpGM79oYP3v9S-EcvCvGbSWHA",
  authDomain: "dev-launchers.firebaseapp.com",
  databaseURL: "https://dev-launchers.firebaseio.com",
  projectId: "dev-launchers",
  storageBucket: "dev-launchers.appspot.com",
  messagingSenderId: "522846071272",
  appId: "1:522846071272:web:c7c50dbe55a2ffdf115c5d",
  measurementId: "G-H25GMXJSXB"
}

export default firebase.initializeApp(config);

/*
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.6.2/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.6.2/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCK48yyyfcpGM79oYP3v9S-EcvCvGbSWHA",
    authDomain: "dev-launchers.firebaseapp.com",
    databaseURL: "https://dev-launchers.firebaseio.com",
    projectId: "dev-launchers",
    storageBucket: "dev-launchers.appspot.com",
    messagingSenderId: "522846071272",
    appId: "1:522846071272:web:c7c50dbe55a2ffdf115c5d",
    measurementId: "G-H25GMXJSXB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>
*/
