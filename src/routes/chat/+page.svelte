<script lang="ts">
  // ...
  import Sent from "../../components/Sent.svelte" ;
  import Received from "../../components/Received.svelte" ;
  import contactImg from "../../images/avatar.webp" ;

  let text: string = "" ;

  // Send
  async function send(): Promise<void>
  {

  }
</script>

<svelte:head>
  <title> Chat </title>

  <meta name="description" content="Gufhtugu Chat" />
  <meta name="keywords" content="Gufhtugu, Chat" />
</svelte:head>

<div class="container-fluid d-flex justify-content-between align-items-center height10">
  <a href="/dashboard" class="d-flex justify-content-center align-items-center navbarBtn">
    <i class="fas fa-play navbarBtnIcon"></i>
  </a>
  <img 
    src={ contactImg }
    alt="User"
    loading="eager"
    draggable="false"
    class="navbarImg" 
  />
</div>

<div class="container-fluid d-flex flex-column justify-content-start align-items-center chatContainer">

  <Sent message="Hello World" time="11:00" />

  <Received message="By Hell" time="05:45" />

</div>

<div class="container-fluid d-flex justify-content-evenly align-items-center chatContainer2">
  <form on:submit|preventDefault={ send } method="post" enctype="application/x-www-form-urlencoded" class="d-flex justify-content-evenly align-items-center w-100">
    <input
      type="text"
      bind:value={ text }
      maxlength="250"
      placeholder="*Message"
      required
      autofocus
      class="chatTxtInput"
    />
    <button type="button" on:click={ send } class="d-flex justify-content-center align-items-center chatBtn2">
      <i class="fas fa-paper-plane chatBtnIcon2"></i>
    </button>
  </form>
</div>

<style>
.navbarBtn 
{
  background: #1B262C ;
  color: var(--bs-white) ;
  font-size: 1em ;
  min-width: 2.75rem ;
  max-width: 2.75rem ;
  min-height: 2.75rem ;
  max-height: 2.75rem ;
  border-radius: 100px ;
  border: 1px solid #1B262C ;
  text-decoration: none ;

  transition: all 150ms ease-in ;
}

.navbarBtn:hover
{
  background: var(--bs-white) ;
  color: #1B262C ;
}

.navbarBtn:active
{
  transform: scale(0.90) ;
}

.navbarBtnIcon 
{
  transform: rotate(180deg) ;
  margin-right: 3px ;
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
}

.chatContainer 
{
  background: #1B262C ;
  overflow: auto ;
  height: 80vh ;
  padding: 0.75rem ;
}

.chatContainer2 
{
  min-height: 10vh ;
  background: #1B262C ;
}

.chatTxtInput 
{
  background: #1B262C ;
  border: 1px solid var(--bs-white) ;
  border-radius: 5px ;
  font-size: 1em ;
  color: var(--bs-white) ;
  font-family: Epilogue, sans-serif ;
  min-height: 2.75rem ;
  max-height: 2.75rem ;
  width: 80% ;
  padding: 1px 10px ;
}

.chatTxtInput:focus
{
  outline: none ;
  box-shadow: 2.5px 2.5px var(--bs-white) ;
}

.chatBtn2 
{
  background: var(--bs-white) ;
  color: #1B262C ;
  font-size: 1.25em ;
  min-width: 2.75rem ;
  max-width: 2.75rem ;
  min-height: 2.75rem ;
  max-height: 2.75rem ;
  border-radius: 100px ;
  border: 1px solid var(--bs-white) ;

  transition: all 150ms ease-in ;
}

.chatBtn2:hover
{
  background: #1B262C ;
  color: var(--bs-white) ;
}

.chatBtn2:active
{
  transform: scale(0.90) ;
}

.chatBtnIcon2 
{
  margin-right: 3px ;
}

::placeholder
{
  color: var(--bs-gray-500) ;
}
</style>