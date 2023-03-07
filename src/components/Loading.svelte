<script lang="ts">
  import { Lottie } from "lottie-svelte" ;
</script>

<div class="container-fluid d-flex flex-column justify-content-center align-items-center height100 background">
  <div class="scale w-75">
    <Lottie
      path="/lottie/loading.json"
      loop={ true }
      autoplay={ true }
      speed={ 0.9 }
    />
  </div>
</div>

<style>
.w-75
{
  width: 75% ;
}
</style>