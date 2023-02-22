<script lang="ts">
  // ...
  import Contact from "../../components/Contact.svelte" ;
  import Footer from "../../components/Footer.svelte" ;
  import userImg from "../../images/avatar.webp" ;
  import avatar from "../../images/avatar.webp" ;

  let search: string = "" ;
</script>

<svelte:head>
  <title> Dashboard </title>

  <meta name="description" content="Gufhtugu Dashboard" />
  <meta name="keywords" content="Gufhtugu, Dashboard" />
</svelte:head>

<div class="container-fluid d-flex justify-content-between align-items-center height10">
  <a href="/edit" title="Edit Profile">
    <img 
      src={ userImg }
      alt="User"
      loading="eager"
      draggable="false"
      class="navbarImg" 
    />
  </a>

  <input
    type="text"
    bind:value={ search }
    maxlength="100"
    minlength="5"
    placeholder="Find Contact..."
    required
    class="navbarSearch"
  />

  <button type="button" class="d-flex justify-content-center align-items-center navbarBtn2"> Log Out </button>
</div>
<div class="container-fluid d-flex flex-column justify-content-start align-items-center dashboardContainer">
  
  <Contact avatar={ avatar } message="What's Up" />

</div>

<Footer />

<style>
.navbarBtn2 
{
  font-family: Epilogue, sans-serif ;
  font-size: 1em ;
  text-align: center ;
  background: #1B262C ;
  color: var(--bs-white) ;
  font-weight: normal ;
  border-radius: 5px ;
  width: 100px ;
  height: 35px ;
  border: 1px solid #1B262C ;

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

.navbarImg 
{
  min-width: 3rem ;
  max-width: 3rem ;
  min-height: 3rem ;
  max-height: 3rem ;
  border-radius: 100px ;
  background: var(--bs-white) ;
  border: 1px solid var(--bs-white) ;

  transition: all 150ms ease-in ;
}

.navbarImg:hover
{
  transform: scale(0.90) ;
}

.navbarImg:active
{
  transform: scale(0.95) ;
}

.navbarSearch 
{
  font-family: Epilogue, sans-serif ;
  text-align: center ;
  font-size: 0.9em ;
  color: #1B262C ;
  font-weight: bold ;
  border-top-style: none ;
  border-right-style: none ;
  border-bottom: 1px solid #1B262C ;
  border-left-style: none ;
  height: 30px ;
  width: 150px ;
}

.navbarSearch:focus
{
  outline: none ;
}

.dashboardContainer 
{
  min-height: 80vh ;
  background: #1B262C ;
  padding: 0.5rem 1rem ;
}

::placeholder
{
  color: var(--bs-gray-700) ;
}
</style>