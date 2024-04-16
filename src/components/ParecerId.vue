<template>
  <!-- ======= parecer Section ======= -->
  <section id="parecer" class="parecer">
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
          <router-link style="text-decoration: none" to="/pareceres">
            <b>Pareceres Publicados</b>
          </router-link>
          <b> > </b>
          <router-link style="text-decoration: none" to="#">
            <b v-if="lista">Parecer Nº.{{ lista.id }} - {{ lista.name }}</b>
          </router-link>
        </h5>
      </div>
      <div v-if="lista">
        <div class="section-title">
          <h2>Parecer Nº.{{ lista.id }} - {{ lista.name }}</h2>
        </div>
        <p></p>
        <div class="post-img">
          <embed
            class="borda"
            src="/img/auto.pdf"
            width="100%"
            height="800px"
          />
        </div>
      </div>
    </div>
  </section>
  <!-- End parecer Section -->
</template>

<script>
import { API_ENDPOINT } from "../main.js";

export default {
  name: "ParecerId",
  props: ["id"],

  data: function () {
    return {
      lista: null,
    };
  },
 
  mounted() {
    fetch(`${API_ENDPOINT}/api/parecer/`+ this.$route.params.id)
      .then((response) => response.json())
      .then((data) => (this.lista = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style scoped>
.parecer {
  padding-top: 120px;
}

.borda {
  border-radius: 25px;
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
  overflow: hidden;
  margin: -30px -30px 15px -30px;
  position: relative;
  border: 1px solid #061536;
  border-radius: 25px;
}
</style>
