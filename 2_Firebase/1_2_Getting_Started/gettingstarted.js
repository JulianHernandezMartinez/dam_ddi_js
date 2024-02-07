// from
// https://firebase.google.com/docs/firestore/quickstart?hl=es

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

// from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js"

// Your web app's Firebase configuration

//Aquí añadimos los datos de API que nos ha asignado FireBase
const firebaseConfig = {
    apiKey: "AIzaSyDrTMhfffkdLcidPlVj136XjPjx0nOGPLM",
    authDomain: "dawtg24.firebaseapp.com",
    projectId: "dawtg24",
    storageBucket: "dawtg24.appspot.com",
    messagingSenderId: "672174828518",
    appId: "1:672174828518:web:e678e86ba32a3670b64427"
};

//Conectamos con la base de datos
const app = initializeApp(firebaseConfig);
const db = getFirestore()
console.log(db);

// import { collection, addDoc } from "firebase/firestore"; 

try {
	const docRef = await addDoc(collection(db, "users"), {
	  first: "Ada",
	  last: "Lovelace",
	  born: 1815
	});
	console.log("Document written with ID: ", docRef.id);
  } catch (e) {
	console.error("Error adding document: ", e);
  }

