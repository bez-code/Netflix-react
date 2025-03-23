import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyCxgd5ulpc821xFPpBV-Ex28H6DvAA94iM",
    authDomain: "netflix-clone-95855.firebaseapp.com",
    projectId: "netflix-clone-95855",
    storageBucket: "netflix-clone-95855.firebasestorage.app",
    messagingSenderId: "540280730907",
    appId: "1:540280730907:web:1cfc5d27cdb6fe46fe0fbe",
    measurementId: "G-5PW3LM1P5X"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export default app;
