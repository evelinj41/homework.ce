// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBa27gvCISh95m3XFf1vA4sYnOEVpJb8wg",
    authDomain: "chat-ba37b.firebaseapp.com",
    databaseURL: "https://chat-ba37b.firebaseio.com",
    projectId: "chat-ba37b",
    storageBucket: "chat-ba37b.appspot.com",
    messagingSenderId: "151313050576"
  };
  firebase.initializeApp(config);

  const database = firebase.database();