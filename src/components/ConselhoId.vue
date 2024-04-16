<template> 
  <section id="lista" class="lista">
    <div class="container">
      <div class="section-bredcumbs">
        <h5>
          Onde estou?
          <router-link style="text-decoration: none" to="/">
            <b>Página Inicial</b>
          </router-link>
          <b> > </b>
          <router-link style="text-decoration: none" to="/conselhospraticos">
            <b>Conselhos Práticos</b>
          </router-link>
          <b> > </b>
          <router-link style="text-decoration: none" to="#">
            <b v-if="lista"> {{ lista.titulo }}</b>
          </router-link>
        </h5>
      </div>
      <div v-if="lista">
        <div class="section-title">
          <h2>{{ lista.titulo }}</h2>
        </div>
        <div class="row content">
          <div class="col-lg-4">
            <div class="post-img">
              <img
              :src="apiEndpoint+'/storage/conselhopratico/'+ lista.imagem "
                class="img-fluid"
                alt=""
                
              />
            </div>
          </div>
          <div class="col-lg-8" id="descricao">
            <p class="date">Publicado em: {{ lista.created_at }} </p>
            
              <div class="col-md-12">
                <p>{{ lista.descricao }}</p>
              </div> 
          </div>
        </div>
      </div>
    </div>
  </section> 
</template>

<script>

import { API_ENDPOINT } from "../main.js";
export default {
  name: "ConselhoId",
  props: ["id"],

  data: function () {
    return {
      lista: null,
      apiEndpoint: "", // Variável local para armazenar o endpoint
    };
  },

  mounted() { 
    this.apiEndpoint = "http://localhost:8000"; // ou o valor do seu endpoint,
    fetch(`${API_ENDPOINT}/api/conselho/`+ this.$route.params.id)
      .then((response) => response.json())
      .then((data) => (this.lista = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style scoped>
.lista {
  padding-top: 100px;
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
  height: 500px;
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
