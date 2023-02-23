import { getAuth } from "firebase/auth" ;
import { getFirestore } from "firebase/firestore" ;
import { getStorage } from "firebase/storage" ;
import type { Auth } from "firebase/auth" ;
import type { Firestore } from "firebase/firestore" ;
import type { FirebaseStorage } from "firebase/storage" ;
// ...
import app from "./public" ;

const auth: Auth = getAuth(app) ;
const db: Firestore = getFirestore(app) ;
const bucket: FirebaseStorage = getStorage(app) ;

// Export
export { auth, db, bucket } ;