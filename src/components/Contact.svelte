<script lang="ts">
  export let avatar: string ;
  export let message: string ;
</script>

<a href="/" class="d-flex justify-content-between align-items-center dashboardDiv">
  <img 
    src={ avatar }
    alt="Avatar"
    loading="eager"
    draggable="false"
    class="dashboardImg" 
  />
  <p class="text-break dashboardP"> { message } </p>
</a>

<style>
.dashboardDiv 
{
  width: 90% ;
  min-height: 5rem ;
  font-size: 1em ;
  border: 1px solid var(--bs-white) ;
  border-radius: 10px ;
  padding: 0rem 1rem ;
  margin: 0.25rem 0rem ;
  text-decoration: none ;
  background: #1B262C ;
  color: var(--bs-gray-500) ;
  font-weight: normal ;

  transition: all 200ms ease-in ;
}

.dashboardDiv:hover
{
  background: var(--bs-white) ;
  color: #1B262C ;
  font-weight: bold ;
}

.dashboardDiv:active
{
  transform: scale(0.95) ;
}

.dashboardImg 
{
  min-width: 3rem ;
  max-width: 3rem ;
  min-height: 3rem ;
  max-height: 3rem ;
  border-radius: 100px ;
  border: 1px solid var(--bs-white) ;
  background: var(--bs-white) ;
}

.dashboardP 
{
  font-family: Epilogue, sans-serif ;
  margin: 0 ;
  text-align: right ;
}
</style>