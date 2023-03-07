import { GoogleAuthProvider, signInWithPopup } from "firebase/auth" ;
// ...
import { auth } from "../config/firebase" ;

// Log In
async function logIn(): Promise<boolean>
{
  const provider: GoogleAuthProvider = new GoogleAuthProvider() ;
  let result: boolean = false ;

  await signInWithPopup(auth, provider)
  .then(async () =>
  {
    result = true ;
  }) ;

  return result ;
}

// Log Out
async function logOut(): Promise<void>
{
  await auth.signOut() ;
}

// Export
export { logIn, logOut } ;