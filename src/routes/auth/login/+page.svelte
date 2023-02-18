<script lang="ts">
  // ...
  import Footer from "../../../components/Footer.svelte" ;
  import logo from "../../../images/logo_dark.webp" ;

  // Sign In
  async function signIn(): Promise<void>
  {
  }
</script>

<svelte:head>
  <title> Log In </title>

  <meta name="description" content="Gufhtugu Log In" />
  <meta name="keywords" content="Gufhtugu, Log In" />
</svelte:head>

<div class="container-fluid d-flex flex-column justify-content-center align-items-center height90 background">
  <img 
    src={ logo }
    alt="Logo"
    loading="eager"
    draggable="false"
    class="img-fluid loginImg" 
  />
  <form method="post" target="_self" enctype="application/x-www-form-urlencoded" class="d-flex justify-content-center align-items-center w-100">
    <button type="button" on:click={ signIn } class="d-flex justify-content-center align-items-center loginBtn">
      <i class="fab fa-google loginBtnIcon"></i> &nbsp; &nbsp; Google
    </button>
  </form>
</div>

<Footer />

<style>
.loginImg 
{
  width: 17rem ;
  margin: 1.5rem 0rem ;
}

.loginBtn 
{
  font-family: Epilogue, sans-serif ;
  font-size: 1em ;
  text-align: center ;
  background: var(--bs-white) ;
  border-radius: 5px ;
  width: 250px ;
  height: 40px ;
  color: #1B262C ;
  font-weight: bold ;
  border: 1px solid var(--bs-white) ;

  transition: all 150ms ease-in ;
}

.loginBtn:hover
{
  background: #1B262C ;
  color: var(--bs-white) ;
}

.loginBtn:active
{
  transform: scale(0.90) ;
}

.loginBtnIcon 
{
  color: #1B262C ;

  transition: all 150ms ease-in ;
}

.loginBtnIcon:hover
{
  background: #1B262C ;
  color: var(--bs-white) ;
}

.loginBtnIcon:active
{
  transform: scale(0.90) ;
}
</style>