<template>
  <footer id="footer">
    <div style="text-align: center;">
      Comissão Nacional de Protecção de Dados &copy;2022
    </div>
    <div> 
     <router-link to="/contato"> Contato </router-link> 
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterSite',
}
</script>

<style scoped>
#footer {
  height: 100px;
  background-color: #013365;
  border-top: 4px solid #111;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  bottom: 0;
  width: 100%;
  position: relative;
}
@media only screen and (max-width: 600px) {
  #footer {
    flex-direction: column;
  }
}
.container {
  display: flex;
  justify-content: space-evenly;
}

a {
  text-decoration: none;
  color: white;
}

a:hover{
  color: #BD9A13;
}
 
</style>
