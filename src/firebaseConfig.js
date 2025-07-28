import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA6RvqbUW_HXNlR1mxkO4oI09RXXhAuxw4",
  authDomain: "trip-planner-funadiq.firebaseapp.com",
  projectId: "trip-planner-funadiq",
  storageBucket: "trip-planner-funadiq.appspot.com",
  messagingSenderId: "444217431345",
  appId: "1:444217431345:web:f3bc391382a36e8c788c10",
  measurementId: "G-CT7HPPMH4X",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
