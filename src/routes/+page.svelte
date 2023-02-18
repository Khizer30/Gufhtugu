<script lang="ts">
  import { goto } from "$app/navigation" ;
  import { Lottie } from "lottie-svelte" ;
  // ...
  import Footer from "../components/Footer.svelte" ;

  let user: boolean = false ;

  // Redirect
  async function redirect(): Promise<void>
  {
    await goto("/auth/login") ;
  }
</script>

<svelte:head>
  <title> Gufhtugu </title>

  <meta name="description" content="Gufhtugu" />
  <meta name="keywords" content="Gufhtugu, Home" />
</svelte:head>

{ #if !user }
<div class="container-fluid d-flex justify-content-end align-items-center height10">
  <div class="d-flex justify-content-evenly align-items-center navbarWidth">
    <button type="button" on:click={ redirect } class="d-flex justify-content-center align-items-center navbarBtn2"> Log In </button>
    <button type="button" on:click={ redirect } class="d-flex justify-content-center align-items-center navbarBtn2"> Sign Up </button>
  </div>
</div>
{ /if }

<div class="container-fluid background">
  <div class="row">
    <div class="col-md-6 d-flex justify-content-center align-items-center" style={ `min-height: ${ user ? "90" : "80" }vh ;` }>
      <h1 class="homeH"> Chat with your friends & family using <br /> <strong> Gufhtugu </strong> </h1>
    </div>
    <div class="col-md-6 d-flex justify-content-center align-items-center" style={ `min-height: ${ user ? "90" : "80" }vh ;` }>
      <Lottie
        path="/lottie/home.json"
        loop={ true }
        autoplay={ true }
        speed={ 1 }
      />
    </div>
  </div>
</div>

<Footer />

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
  border: 1px solid #1B262C ;

  transition: all 150ms ease-in ;
}

.navbarBtn2:hover
{
  background: var(--bs-white) ;
  color: #1B262C ;
  font-weight: bold ;
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
</style>