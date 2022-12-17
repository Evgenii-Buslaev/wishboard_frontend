import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAfWbrtS9I_oZJ2qcQWMw-PwuoOUnCTbHs",
  authDomain: "wishboard-60d7f.firebaseapp.com",
  projectId: "wishboard-60d7f",
  storageBucket: "wishboard-60d7f.appspot.com",
  messagingSenderId: "691609764683",
  appId: "1:691609764683:web:1a45aee1f6616d31681ece",
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
