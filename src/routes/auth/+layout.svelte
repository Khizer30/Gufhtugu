<script lang="ts">
  import { onMount } from "svelte" ;
  import { goto } from "$app/navigation" ;
  import { onAuthStateChanged } from "firebase/auth" ;
  import type { User } from "firebase/auth" ;
  // ...
  import Loading from "../../components/Loading.svelte" ;
  import { auth } from "../../config/firebase" ;

  let user: User | null | undefined = undefined ;

  // Redirect
  onMount(() =>
  {
    onAuthStateChanged(auth, (x: User | null) =>
    {
      user = x ;
    }) ;
  }) ;
</script>

{ #if (user === undefined) }
  <Loading />
{ :else if (user === null) }
  <slot />
{ :else }
  { goto("/dashboard") }
{ /if }