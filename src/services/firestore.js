
import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    getDocs,
    doc,
    getDoc,
    addDoc,
    deleteDoc
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "budgetplanner-d9747.firebaseapp.com",
    projectId: "budgetplanner-d9747",
    storageBucket: "budgetplanner-d9747.appspot.com",
    messagingSenderId: "866222804598",
    appId: "1:866222804598:web:c6384bc019cd4b9b58d957"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export const getExpenses = async () => {
    try {
        const myCollection = collection(firestore, 'expenses');
        let snapShotDB = await getDocs(myCollection);
        let dataDocs = snapShotDB.docs.map(doc => {
            let docsFormat = {
                ...doc.data(),
                id: doc.id
            };
            return docsFormat
        });
        return dataDocs;
    } catch (error) {
        console.log(error)
    }
}

export const addExpense = async (expenseData) => {
    try {
        const collectionRef = collection(firestore, 'expenses');
        let docToAdd = await addDoc(collectionRef, expenseData);
        const docRef = doc(firestore, 'expenses', docToAdd.id)
        const newDoc = await getDoc(docRef);
        return newDoc.data()

    } catch (error) {
        console.log(error)
    }
}

export const getSingleExpense = async (id) => {
    try {
        const docRef = doc(firestore, 'expenses', id);
        const docSnapShot = await getDoc(docRef);
        return { ...docSnapShot.data(), id: docSnapShot.id }
    } catch (error) {
        console.log(error)
    }
}

export const deleteExpense = async (id) => {
    try {
        await deleteDoc(doc(firestore, 'expenses', id))
    } catch (error) {
        console.log(error)
    }
}


export default firestore;