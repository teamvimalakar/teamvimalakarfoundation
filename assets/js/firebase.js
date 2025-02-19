// // Firebase Configuration
// const firebaseConfig = {
//     apiKey: "YOUR_API_KEY",
//     authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
//     projectId: "YOUR_PROJECT_ID",
//     storageBucket: "YOUR_PROJECT_ID.appspot.com",
//     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//     appId: "YOUR_APP_ID"
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// const auth = firebase.auth();
// const db = firebase.firestore();

// // Google Authentication
// const googleLogin = async () => {
//     const provider = new firebase.auth.GoogleAuthProvider();
//     try {
//         const result = await auth.signInWithPopup(provider);
//         console.log("User Signed In:", result.user);
//         alert(`Welcome ${result.user.displayName}!`);
//     } catch (error) {
//         console.error("Google Login Error:", error);
//         alert("Login Failed. Please try again.");
//     }
// };

// // Logout Function
// const logout = async () => {
//     try {
//         await auth.signOut();
//         alert("You have logged out.");
//     } catch (error) {
//         console.error("Logout Error:", error);
//     }
// };

// // Firestore CRUD Operations
// const addDocument = async (collection, data) => {
//     try {
//         const docRef = await db.collection(collection).add(data);
//         console.log("Document added with ID:", docRef.id);
//     } catch (error) {
//         console.error("Error adding document:", error);
//     }
// };

// const getDocuments = async (collection) => {
//     try {
//         const snapshot = await db.collection(collection).get();
//         snapshot.forEach(doc => console.log(doc.id, "=>", doc.data()));
//     } catch (error) {
//         console.error("Error fetching documents:", error);
//     }
// };

// const updateDocument = async (collection, docId, newData) => {
//     try {
//         await db.collection(collection).doc(docId).update(newData);
//         console.log("Document updated:", docId);
//     } catch (error) {
//         console.error("Error updating document:", error);
//     }
// };

// const deleteDocument = async (collection, docId) => {
//     try {
//         await db.collection(collection).doc(docId).delete();
//         console.log("Document deleted:", docId);
//     } catch (error) {
//         console.error("Error deleting document:", error);
//     }
// };

// // Realtime Authentication State Listener
// auth.onAuthStateChanged(user => {
//     if (user) {
//         console.log("User logged in:", user);
//     } else {
//         console.log("User logged out.");
//     }
// });

// // Export Functions
// window.firebaseAuth = { googleLogin, logout };
// window.firebaseDB = { addDocument, getDocuments, updateDocument, deleteDocument };
