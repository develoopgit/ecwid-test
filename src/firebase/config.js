import * as firebase from "firebase/app"
import "firebase/storage"
import "firebase/firestore"

var firebaseConfig = {
	apiKey: "AIzaSyDsQCkqwyEiEBZtDrQPiesbyNeHLWxlQ9g",
	authDomain: "ecwid-project.firebaseapp.com",
	projectId: "ecwid-project",
	storageBucket: "ecwid-project.appspot.com",
	messagingSenderId: "662907114680",
	appId: "1:662907114680:web:0612b2a6223a9e5dcad04d",
	measurementId: "G-SGKLT23T0N",
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectStorage, projectFirestore, timestamp }
