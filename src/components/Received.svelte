<script lang="ts">
  export let message: string ;
  export let time: string ;
</script>

<div class="d-flex justify-content-start align-items-center chatDiv">
  <div class="d-flex justify-content-between align-items-center chatMessage">
    <p class="text-break chat"> { message } </p>
    <span class="chatTime"> { time } </span>
  </div>
</div>

<style>
.chatDiv 
{
  width: 97.5% ;
  margin: 0.25rem 0rem ;
}

.chatMessage 
{
  min-height: 2.5rem ;
  background: var(--bs-white) ;
  border-style: none ;
  border-radius: 10px ;
  padding: 0px 1rem ;
}

.chat 
{
  font-family: Epilogue, sans-serif ;
  color: #1B262C ;
  font-size: 1em ;
  margin: 0 ;
  text-align: left ;
  font-weight: bold ;
}

.chatTime 
{
  color: var(--bs-gray-700) ;
  font-size: 0.75em ;
  font-family: Epilogue, sans-serif ;
  font-weight: bold ;
  text-align: right ;
  margin-left: 1rem ;
}
</style>