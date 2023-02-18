<script lang="ts">
  import { Lottie } from "lottie-svelte" ;
  // ...
  import Footer from "../components/Footer.svelte" ;
</script>

<svelte:head>
  <title> 404 </title>

  <meta name="description" content="Gufhtugu 404" />
  <meta name="keywords" content="Gufhtugu, 404" />
</svelte:head>

<div class="container-fluid d-flex flex-column justify-content-center align-items-center height90 background">
  <Lottie
    path="/lottie/error.json"
    loop={ true }
    autoplay={ true }
    speed={ 1 }
  />
</div>

<Footer />