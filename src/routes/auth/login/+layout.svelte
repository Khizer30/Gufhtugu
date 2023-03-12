<script lang="ts">
  import { onMount, onDestroy } from "svelte" ;
  import { goto } from "$app/navigation" ;
  import { onAuthStateChanged } from "firebase/auth" ;
  import type { Unsubscribe, User } from "firebase/auth" ;
  // ...
  import Loading from "../../../components/Loading.svelte" ;
  import { auth } from "../../../config/firebase" ;

  let unsub: Unsubscribe | undefined = undefined ;
  let user: User | null | undefined = undefined ;

  // Redirect
  onMount(() =>
  {
    unsub = onAuthStateChanged(auth, (x: User | null) =>
    {
      user = x ;
    }) ;
  }) ;

  // Destructor
  onDestroy(() =>
  {
    if (unsub)
    {
      unsub() ;
    }
  }) ;
</script>

{ #if (user === undefined) }
  <Loading />
{ :else if (user === null) }
  <slot />
{ :else }
  { goto("/dashboard") }
{ /if }