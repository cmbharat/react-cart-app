import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAdYuIIrCiA0LYxlifNMuTkflBiu7Kia6Y",
  authDomain: "cart-app-9f55e.firebaseapp.com",
  projectId: "cart-app-9f55e",
  storageBucket: "cart-app-9f55e.appspot.com",
  messagingSenderId: "695684509423",
  appId: "1:695684509423:web:96808300e0659db2e7351a",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ReactDOM.render(<App/>, document.getElementById("root"));
