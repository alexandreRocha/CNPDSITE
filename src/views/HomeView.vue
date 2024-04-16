<template>

  <div class="main-container"> 
   <BannerHome/>
   <EventsCnpd/>   
  </div>
   
  
</template>

<script>
// @ is an alias to /src 
import EventsCnpd from "../components/EventsCnpd.vue"
import BannerHome from "../components/BannerHome.vue"




export default {
  name: 'HomeView',
  components: {
    EventsCnpd,
    BannerHome
 
  }
}
</script>
