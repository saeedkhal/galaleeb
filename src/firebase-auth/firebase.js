import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBI1oj-dcdsEcwzoEmQXXwvH4t-G9OW3LM",
    authDomain: "e-commese-auth.firebaseapp.com",
    projectId: "e-commese-auth",
    storageBucket: "e-commese-auth.appspot.com",
    messagingSenderId: "220823033815",
    appId: "1:220823033815:web:f838e889762ea768931d92"
};

const app = initializeApp(firebaseConfig);


export const provider = new GoogleAuthProvider();

export const auth = getAuth(app);

