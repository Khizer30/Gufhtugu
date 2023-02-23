import { initializeApp } from "firebase/app" ;
import type { FirebaseApp } from "firebase/app" ;
// ...
import { PUBLIC_FIREBASE } from "$env/static/public" ;

const firebaseConfig: object = JSON.parse(PUBLIC_FIREBASE) ;
const app: FirebaseApp = initializeApp(firebaseConfig) ;

// Export App
export default app ;