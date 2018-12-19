const config = {
  apiKey: "AIzaSyDYPQE6YHa0Fd-glsACXnr43P-m1XHiuko",
  authDomain: "college-shoutouts.firebaseapp.com",
  databaseURL: "https://college-shoutouts.firebaseio.com",
  projectId: "college-shoutouts",
  storageBucket: "",
  messagingSenderId: "62180872688"
}

let firebaseCache

export const getUiConfig = firebase => ({
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ],
})

const getFirebase = firebase => {
  if (firebaseCache) {
    return firebaseCache
  }

  firebase.initializeApp(config)
  firebaseCache = firebase
  return firebase
}

export default getFirebase
