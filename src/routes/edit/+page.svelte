<script lang="ts">
  import { Lottie } from "lottie-svelte" ;
  // ...
  import Footer from "../../components/Footer.svelte" ;
  import avatar from "../../images/avatar.webp" ;

  let name: string = "" ;
  let username: string = "" ;
  let email: string = "" ;
  let file: FileList | null | undefined = undefined ;
  let message: string = "" ;
  let fileInput: HTMLInputElement | undefined = undefined ;

  $:
  {
    if (file && file[0])
    {

    }
  }

  // Change Image
  function changeImage(): void
  {
    if (fileInput)
    {
      fileInput.click() ;
    }
  }

  // Send
  async function send(): Promise<void>
  {

  }
</script>

<svelte:head>
  <title> Edit Profile </title>

  <meta name="description" content="Gufhtugu Edit Profile" />
  <meta name="keywords" content="Gufhtugu, Edit, Profile" />
</svelte:head>

<div class="container-fluid background">
  <div class="row">
    <div class="col-md-6 d-flex justify-content-center align-items-center height90">
      <form on:submit|preventDefault={ send } method="post" target="_self" enctype="multipart/form-data" class="d-flex flex-column justify-content-center align-items-center w-100">
        <h1 class="h"> Edit Profile </h1>

        { #if message }
        <span class="span"> { message } </span>
        { :else }
        <span class="span"> <br /> </span>
        { /if }
        
        <input
          type="text"
          bind:value={ username }
          maxlength="100"
          minlength="5"
          placeholder="*Username"
          required
          autofocus
          class="form-control txtInput"
        />

        <input
          type="text"
          bind:value={ name }
          maxlength="100"
          minlength="5"
          placeholder="*Name"
          required
          class="form-control txtInput"
        />

        <input
          type="text"
          bind:value={ email }
          maxlength="100"
          minlength="5"
          placeholder="*Email"
          required
          class="form-control txtInput"
        />

        <div class="d-flex justify-content-evenly align-items-center div">
          <img 
            src={ avatar }
            alt="Avatar"
            loading="eager"
            draggable="false"
            class="divImg" 
          />

          <button type="button" on:click={ changeImage } class="d-flex justify-content-center align-items-center btn"> Change Image </button>

          <input 
            type="file"
            bind:this={ fileInput }
            bind:files={ file }
            accept=".webp, .png, .jpg, .jpeg"
            required
            class="form-control d-none"
          />
        </div>

        <div class="d-flex justify-content-center align-items-center div">
          <button type="button" on:click={ send } class="d-flex justify-content-center align-items-center btn2"> Submit </button>
        </div>
      </form>
    </div>
    <div class="col-md-6 d-flex justify-content-center align-items-center height90">
      <div class="lottie">
        <Lottie
          path="/lottie/edit.json"
          loop={ true }
          autoplay={ true }
          speed={ 1 }
        />
      </div>
    </div>
  </div>
</div>

<Footer />

<style>
.h 
{
  color: var(--bs-white) ;
  font-family: Oxygen, sans-serif ;
  text-align: center ;
  font-size: 2.25em ;
  margin: 1rem 0rem ;
  font-weight: bold ;
}

.span 
{
  color: var(--bs-white) ;
  font-size: 0.9em ;
  font-family: Epilogue, sans-serif ;
  text-align: center ;
}

.txtInput 
{
  width: 75% ;
  margin: 0.5rem 0rem ;
  background: #1B262C ;
  border-radius: 5px ;
  border: 1px solid var(--bs-white) ;
  font-family: Epilogue, sans-serif ;
  text-align: left ;
  font-size: 1em ;
  color: var(--bs-white) ;
}

.txtInput:focus
{
  box-shadow: 1.75px 1.75px var(--bs-white) ;
}

.div 
{
  margin: 0.5rem 0rem ;
  width: 75% ;
}

.divImg 
{
  min-width: 3.75rem ;
  max-width: 3.75rem ;
  min-height: 3.75rem ;
  max-height: 3.75rem ;
  border-radius: 100px ;
  background: var(--bs-white) ;
  border: 1px solid var(--bs-white) ;
}

.btn 
{
  font-family: Epilogue, sans-serif ;
  font-size: 1em ;
  text-align: center ;
  background: #1B262C ;
  border-radius: 5px ;
  width: 150px ;
  height: 37px ;
  color: var(--bs-white) ;
  font-weight: bold ;
  border: 1px solid var(--bs-white) ;

  transition: all 150ms ease-in ;
}

.btn:hover
{
  background: var(--bs-white) ;
  color: #1B262C ;
}

.btn:focus
{
  outline: none ;
}

.btn:active
{
  transform: scale(0.90) ;
}

.btn2 
{
  font-family: Epilogue, sans-serif ;
  font-size: 1em ;
  text-align: center ;
  background: var(--bs-white) ;
  border-radius: 5px ;
  width: 175px ;
  height: 40px ;
  color: #1B262C ;
  font-weight: bold ;
  border: 1px solid var(--bs-white) ;

  transition: all 150ms ease-in ;
}

.btn2:hover
{
  background: #1B262C ;
  color: var(--bs-white) ;
}

.btn2:focus
{
  outline: none ;
}

.btn2:active
{
  transform: scale(0.90) ;
}

.lottie
{
  width: 30rem ;
}

::placeholder
{
  color: var(--bs-gray-500) ;
}
</style>