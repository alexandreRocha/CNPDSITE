<template>
  <!-- ======= relatorio Section ======= -->
  <section id="relatorio" class="relatorio">
    <div class="container">
      <div class="section-bredcumbs">
        <h5>
          Onde estou?
          <router-link style="text-decoration: none" to="/">
            <b>Página Inicial</b>
          </router-link>
          <b> > </b>
          <router-link style="text-decoration: none" to="/relatorios">
            <b>Relatórios de Atividades</b>
          </router-link>
          <b> > </b>
          <router-link style="text-decoration: none" to="#">
            <b v-if="lista"
              >Relatório de Atividade Nº.{{ lista.num_doc }} - {{ lista.titulo }}</b
            >s
          </router-link>
        </h5>
      </div>
      <div v-if="lista">
        <div class="section-title">
          <h2>Relatório Nº.{{ lista.num_doc }} - {{ lista.titulo }} </h2>
        </div>
        <p></p> 
       
        <div class="post-img"> 
          <embed class="borda" :src="link" width="100%" height="800px" />

         </div>
      </div>
    </div>
  </section>
  <!-- End relatorio Section -->
</template>

<script>

import { API_ENDPOINT } from "../main.js";

export default { 
  name: "RelatorioId",
  props: ["id"],

  data: function () {
    return {
      lista: null,
      link: "",
    };
   
  },  
   
  mounted() { 
    fetch(`${API_ENDPOINT}/api/relatorio/`+ this.$route.params.id)
      .then((response) => response.json())
      .then((data) => {
        this.lista = data,
        // Atualizando o valor de xpto quando a lista é carregada
        this.link = `${API_ENDPOINT}/storage/publicacoesPdf/${this.lista.anexo}`;
      }) 
      .catch((err) => console.log(err.message));
  },
};
</script>

<style scoped>
.relatorio {
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

.borda {
  border-radius: 25px;
}
post-img {
  overflow: hidden;
  margin: -30px -30px 15px -30px;
  position: relative;
  border: 1px solid #061536;
  border-radius: 25px;
}
</style>
