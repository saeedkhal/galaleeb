import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_Firebase_apiKey,
    authDomain: process.env.REACT_APP_Firebase_authDomain,
    projectId: process.env.REACT_APP_Firebase_projectId,
    storageBucket: process.env.REACT_APP_Firebase_storageBucket,
    messagingSenderId: process.env.REACT_APP_Firebase_messagingSenderId,
    appId: process.env.REACT_APP_Firebase_appId
};

const app = initializeApp(firebaseConfig);


export const provider = new GoogleAuthProvider();

export const auth = getAuth(app);

