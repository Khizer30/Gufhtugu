import { initializeApp, cert } from "firebase-admin/app" ;
import type { App } from "firebase-admin/app" ;
// ...
import { SERVICE_ACCOUNT } from "$env/static/private" ;

const app: App = initializeApp({ credential: cert(JSON.parse(SERVICE_ACCOUNT)) }) ;

// Export App
export default app ;