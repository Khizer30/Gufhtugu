<script lang="ts">
  import { onMount, onDestroy } from "svelte" ;
  import { onAuthStateChanged } from "firebase/auth" ;
  import { Lottie } from "lottie-svelte" ;
  import type { Unsubscribe, User } from "firebase/auth" ;
  // ...
  import Loading from "../components/Loading.svelte" ;
  import Footer from "../components/Footer.svelte" ;
  import { auth } from "../config/firebase" ;

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

<svelte:head>
  <title> Gufhtugu </title>

  <meta name="description" content="Gufhtugu" />
  <meta name="keywords" content="Gufhtugu, Home" />
</svelte:head>

{ #if (user === undefined) }
  <Loading />
{ :else if (user === null) }
  <div class="container-fluid d-flex justify-content-end align-items-center height10">
    <div class="d-flex justify-content-evenly align-items-center navbarWidth">
      <a href="/auth/login" class="d-flex justify-content-center align-items-center navbarBtn2"> Log In </a>
    </div>
  </div>

  <div class="container-fluid background">
    <div class="row">
      <div class="col-md-6 d-flex justify-content-center align-items-center mh-80">
        <h1 class="homeH"> Chat with your friends & family using <br /> <strong> Gufhtugu </strong> </h1>
      </div>
      <div class="col-md-6 d-flex justify-content-center align-items-center mh-80">
        <div class="scale">
          <Lottie
            path="/lottie/home.json"
            loop={ true }
            autoplay={ true }
            speed={ 1 }
          />
        </div>
      </div>
    </div>
  </div>

  <Footer />
{ :else }
  <div class="container-fluid background">
    <div class="row">
      <div class="col-md-6 d-flex justify-content-center align-items-center mh-90">
        <h1 class="homeH"> Chat with your friends & family using <br /> <strong> Gufhtugu </strong> </h1>
      </div>
      <div class="col-md-6 d-flex justify-content-center align-items-center mh-90">
        <div class="scale">
          <Lottie
            path="/lottie/home.json"
            loop={ true }
            autoplay={ true }
            speed={ 1 }
          />
        </div>
      </div>
    </div>
  </div>

  <Footer />
{ /if }

<style>
.navbarWidth 
{
  width: 250px ;
}

.navbarBtn2 
{
  font-family: Epilogue, sans-serif ;
  font-size: 1em ;
  text-align: center ;
  background: #1B262C ;
  border-radius: 5px ;
  width: 100px ;
  height: 35px ;
  color: var(--bs-white) ;
  font-weight: normal ;
  border: 1px solid #1B262C ;
  text-decoration: none ;

  transition: all 150ms ease-in ;
}

.navbarBtn2:hover
{
  background: var(--bs-white) ;
  color: #1B262C ;
  font-weight: bold ;
}

.navbarBtn2:focus
{
  outline: none ;
}

.navbarBtn2:active
{
  transform: scale(0.90) ;
}

.homeH 
{
  color: var(--bs-white) ;
  font-family: Oxygen, sans-serif ;
  text-align: left ;
  font-size: 3em ;
  margin: 0rem 1rem ;
}

.mh-80
{
  min-height: 80vh ;
}

.mh-90
{
  min-height: 90vh ;
}
</style>