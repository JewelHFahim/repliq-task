import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCeBFGqaENjrM2CY1sLEzZ0qRCsBbuhRdQ",
  authDomain: "health-os-b7032.firebaseapp.com",
  projectId: "health-os-b7032",
  storageBucket: "health-os-b7032.appspot.com",
  messagingSenderId: "133784011904",
  appId: "1:133784011904:web:f4197a78a1897ef1955265"
};

const app = initializeApp(firebaseConfig);

export default app;