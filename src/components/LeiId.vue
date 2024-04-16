<template>
  <!-- ======= lei Section ======= -->
  <section id="event" class="event">
    <div class="container">
      <div class="section-bredcumbs">
        <h5>
          Onde estou?
          <router-link style="text-decoration: none" to="/">
            <b>Página Inicial</b>
          </router-link>
          <b> > </b>
          <router-link style="text-decoration: none" to="/legislacao">
            <b>Legislação</b>
          </router-link> 
          <b> > </b>
          <router-link style="text-decoration: none" to="#">
            <b v-if="leis">Lei de {{ leis.titulo }}</b>
          </router-link>
           
        </h5>
      </div>
      <div v-if="leis">
        <div class="section-title">
          <h2>{{ leis.titulo }}</h2>
        </div>
        <div class="row content">
          <div class="col-lg-12" id="descricao">
            <p class="date">Publicado em: {{ leis.created_at }}</p>
            
            <p></p>
            <div class="post-img"> 
                <embed v-if="leis.titulo === 'Modelo de Aviso de CCTV'" class="borda" :src="apiEndpoint+'/storage/legislacaoPdf/'+ leis.anexo " width="auto" height="auto" /> 
                <embed v-else class="borda" :src="apiEndpoint+'/storage/legislacaoPdf/'+ leis.anexo " width="100%" height="1200px" /> 
               
              </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End lei Section -->
</template>

<script>
import { API_ENDPOINT } from "../main.js";


export default {
  name: "EventId",
  props: ["id"],

  data: function () {
    return {
      leis: null,
      apiEndpoint: "", // Variável local para armazenar o endpoint

    };
  },

  mounted() {
    this.apiEndpoint = "http://localhost:8000"; // ou o valor do seu endpoint,

    fetch(`${API_ENDPOINT}/api/legislacao/`+ this.$route.params.id) 
      .then((response) => response.json())
      .then((data) => (this.leis = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style scoped>

.event {
  padding-top: 120px;
}

.section-title {
  text-align: center;
  padding-bottom: 30px;
}
.section-title h2 {
  font-size: 13px;
  letter-spacing: 1px;
  font-weight: 700;
  padding: 8px 20px;
  line-height: 1;
  margin: 0;
  background: #bd9a13;
  color: #000;
  display: inline-block;
  text-transform: uppercase;
  border-radius: 50px;
}
@media (min-width: 1024px) {
  .section-title p {
    width: 50%;
  }
}

.post-img {
  padding-top: 20px;
  overflow: hidden;
  margin: -30px -30px 15px -30px;
  position: relative;
  height: 100%;  
}
.borda{
  border-radius: 25px;
}

img {
  border-radius: 10px;
}
#descricao {
  text-align: justify;
  padding-left: 50px;
}
.date {
  font-size: 14px;
  color: #013365;
}
</style>
