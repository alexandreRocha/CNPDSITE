<template>
  <!-- ======= auto Section ======= -->
  <section id="auto" class="auto">
    <div class="container">
      <div class="section-bredcumbs">
        <h5>
          Onde estou?
          <router-link style="text-decoration: none" to="/">
            <b>Página Inicial</b>
          </router-link>
          <b> > </b>
          <router-link style="text-decoration: none" to="#">
            <b>Decisões</b>
          </router-link>
          <b> > </b>
          <router-link style="text-decoration: none" to="/registos">
            <b>Registo Publicadas</b>
          </router-link>
          <b> > </b>
          <router-link style="text-decoration: none" to="#">
            <b v-if="lista">Registo Nº.{{ lista.id }} - {{ lista.entidade }}</b>
          </router-link>
        </h5>
      </div>
      <div v-if="lista">
        <div class="section-title">
          <h2>Registo Nº.{{ lista.id }} - {{ lista.entidade }}</h2>
        </div>
        <p></p>
        <div class="post-img"> 
          <embed class="borda" :src="`${API_ENDPOINT}/autos/${lista.anexo}`" width="100%" height="800px" /> 
         
          
        </div>
      </div>
    </div>
  </section>
  <!-- End auto Section -->
</template>

<script>
import { API_ENDPOINT } from "../main.js";

export default {
  name: "AutoId",
  props: ["id"],

  data: function () {
    return {
      lista: null,
    };
  },

  mounted() {
    fetch(`${API_ENDPOINT}/api/autorizacao/`+ this.$route.params.id)
      .then((response) => response.json())
      .then((data) => (this.lista = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style scoped>
.auto {
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
.borda {
  border-radius: 25px;
}
.post-img {
  overflow: hidden;
  margin: -30px -30px 15px -30px;
  position: relative;
  border: 1px solid #061536;
  border-radius: 25px;
}
</style>
