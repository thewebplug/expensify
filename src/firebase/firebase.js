import { initializeApp} from 'firebase/app';
import { 
    getDatabase, ref, set, update, remove, onValue, off, push, onChildRemoved, onChildChanged, onChildAdded
} from 'firebase/database'
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
}

const firebaseApp = initializeApp(firebaseConfig);


const db = getDatabase();

export { firebaseApp, db as default };

// onChildRemoved(ref(db, "expenses"), (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// onChildChanged(ref(db, "expenses"), (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// onChildAdded(ref(db, "expenses"), (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })
// onValue(ref(db, 'expenses'), (snapShot) => {
//     const expenses =[]

//     snapShot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     })
//     console.log(expenses)
// })


// const expense1= {
//     description: 'First Expense',
//     amount: 6000,
//     note: "NB",
//     createdAt: "5th January"
// }

// const expense2 = {
//     description: 'Second Expense',
//     amount: 123,
//     note: "NB",
//     createdAt: "5th January"
// }

// const expense3 = {
//     description: 'Third Expense',
//     amount: 6879,
//     note: "NB",
//     createdAt: "5th January"
// }
// const expense4 = {
//     description: 'Fourth Expense',
//     amount: 2435,
//     note: "NB",
//     createdAt: "9th January"
// }


// // push(ref(db, "expenses"), expense2)
// push(ref(db, "expenses"), expense4)
