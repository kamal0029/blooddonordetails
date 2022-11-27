import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAaFG98z1sqBnkVJJUDrEKn5qd-9To7sQc",
  authDomain:"blooddonor29.firebaseapp.com",
  projectId: "blooddonor29",
  storageBucket: "blooddonor29.appspot.com",
  messagingSenderId: "115438937689",
  appId: "1:115438937689:web:05d91ac7a0c4c269b43348" ,
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
