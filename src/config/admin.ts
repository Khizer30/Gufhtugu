import { getFirestore } from "firebase-admin/firestore" ;
import { getStorage } from "firebase-admin/storage" ;
import type { Storage } from "firebase-admin/storage" ;
// ...
import app from "./private" ;

const db: FirebaseFirestore.Firestore = getFirestore(app) ;
const bucket: Storage = getStorage(app) ;

// Export
export { db, bucket } ;