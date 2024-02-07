// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
// import { initializeApp } from "./firebase-app.js";
// from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
	getFirestore,
	collection,
	getDocs,
	onSnapshot,
	addDoc,
	deleteDoc,
	doc,
	getDoc,
	updateDoc,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

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

// CRUD - Create, Read, Uddate and Delete
// https://en.wikipedia.org/wiki/Create,_read,_update_and_delete

export const saveData = (ref,objeto) => addDoc(collection(db,ref),objeto)
export const getDataCollection = (ref) => getDocs(collection(db,ref))
export const getDataChanged = ( ref, callBack) => onSnapshot(collection(db,ref),callBack)
export const deleteData = (id, ref) => deleteDoc(doc(db,ref,id))
export const getDataDocument = (id, ref) => getDoc(doc(db,ref,id))
export const updateData = (id, ref,objeto) => updateDoc(doc(db,ref,id),objeto)

