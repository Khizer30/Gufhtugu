<script lang="ts">
  import "@fontsource/epilogue" ;
  import "@fontsource/oxygen" ;
  // ...
  import "../styles/global.css" ;
  import favicon from "../images/favicon.webp" ;
</script>

<svelte:head>
  <link rel="icon" type="image/webp" href={ favicon } />
  <link rel="shortcut icon" type="image/webp" href={ favicon } />
</svelte:head>

<slot />