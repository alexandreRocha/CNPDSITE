<template>
  <!-- ======= Recent Blog Posts Section ======= -->
  <section id="Panfletos" class="Panfletos">
    <div class="container" data-aos="fade-up">
      <div class="section-bredcumbs">
        <h5>
          Onde estou?
          <router-link style="text-decoration: none" to="/">
            <b>Página Inicial</b>
          </router-link>
          <b> > </b>
          <router-link style="text-decoration: none" to="#">
            <b>Publicações</b>
          </router-link>
          <b> > </b>
          <router-link style="text-decoration: none" to="/panfletos">
            <b>Panfletos Publicados</b>
          </router-link>
        </h5>
      </div>
      <div class="section-title">
        <div class="section-title">
          <h2>Panfletos Publicados</h2>
        </div>
      </div>
      <div class="row">
        <div class="form-group">
          <p class="pleft">Panfletos disponíveis: {{countNumbers()}}</p> 
          <input id="idsearch" type="text" class="form-control" v-model="search" 
          placeholder="Procurar por título ...">
         </div>

        <p><br></p>
        <div
          id="box"
          v-for="(panf, index) in filteredList"
          :key="index"
          class="col-lg-4"
        >
          <div class="post-box">
            <router-link
              :to="{ name: 'panfletview', params: { id: panf.id } }"
            >
              <div class="post-img"> 
                <img
                :src="apiEndpoint+'/storage/publicacoesPdf/'+ panf.imagem "
                  class="img-fluid"
                  alt=""
                />
              </div>
              <h3 class="post-title">{{ panf.titulo }}</h3>
            </router-link>
          </div>
        </div>
        <p></p>

        <div id="idpage">
          <button
            id="button"
            @click="prevPage"
            class="float-left btn btn-outline-info btn-sm"
          >
            <i class="fas fa-arrow-left"></i>
          </button>
          <button
            id="button"
            @click="nextPage"
            class="float-right btn btn-outline-info btn-sm"
          >
            <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import { API_ENDPOINT } from "../main.js";

export default {
  name: "PanfletosCnpd",
  data: () => ({
    panfletos: [], //array com os itens
    currentSort: "titulo", //ordenar por title
    currentSortDir: "asc", // ordenar ascendente
    search: "", //search
    searchSelection: "",
    pageSize: 9, //paginacao
    currentPage: 1,
    apiEndpoint: "", // Variável local para armazenar o endpoint

  }),

  methods: {
    sort(s) {
      if (s === this.currentSort) {
        this.currentSortDir = this.currentSortDir === "asc" ? "desc" : "asc";
      }
      this.currentSort = s;
    },
    nextPage() {
      if (this.currentPage * this.pageSize < this.panfletos.length)
        this.currentPage++;
    },
    prevPage() {
      if (this.currentPage > 1) this.currentPage--;
    },

    countNumbers() {
      return this.panfletos.length;
    },
  },

  computed: {
    filteredList() {
      return this.panfletos
        .filter((data) => {
          let titulo = data.titulo.toLowerCase().match(this.search.toLowerCase());
          return titulo;
        })
        .filter((row, index) => {
          let start = (this.currentPage - 1) * this.pageSize;
          let end = this.currentPage * this.pageSize;
          if (index >= start && index < end) return true;
        });
    },
  },

  created() { 
    this.apiEndpoint = "http://localhost:8000"; // ou o valor do seu endpoint,
    axios.get(`${API_ENDPOINT}/api/panfletos`)
    .then((response) => {
      this.panfletos = response.data;
    });
  },
  mounted() {
    window.scrollTo(0, 0); // Rola para o topo da página quando a página é carregada
  },
};
</script>

<style scoped>
#idpage {
  display: flex;
  justify-content: space-between;
}
#button {
  color: #061536;
  border: 2px solid #061536;
  box-shadow: 1px 1px #061536;
  height: 30px;
  width: 30px;
}
#button:hover {
  box-shadow: 1px 1px 3px 3px black;
  color: #fff;
  background-color: #061536;
}
#box {
  margin-bottom: 10px;
}
a {
  text-decoration: none;
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
  color: black;
  display: inline-block;
  text-transform: uppercase;
  border-radius: 50px;
}
.Panfletos .post-box {
  box-shadow: 0px 0 30px rgba(1, 41, 112, 0.08);
  transition: 0.3s;
  height: 100%;
  overflow: hidden;
  padding: 30px;
  border-radius: 8px;
  position: relative;
  display: flex;
  flex-direction: column;
}
.Panfletos .post-box .post-img {
  overflow: hidden;
  margin: -30px -30px 15px -30px;
  position: relative;
}
.Panfletos .post-box .post-img img {
  transition: 0.5s;
}
.Panfletos .post-box .post-date {
  font-size: 10px;
  font-weight: 600;
  color: #012970;
  display: block;
  margin-bottom: 10px;
}
.Panfletos .post-box .post-title {
  font-size: 15px;
  text-align: justify;
  color: #012970;
  font-weight: 700;
  margin-bottom: 18px;
  position: relative;
  transition: 0.3s;
}

.Panfletos .post-box:hover .post-title {
  color: #013365;
}
.Panfletos .post-box:hover .post-img img {
  transform: rotate(6deg) scale(1.2);
}
a {
  text-decoration: none;
  color: #493c3e;
  transition: ease-in-out 0.3s;
}

a:hover {
  color: #bd9a13;
}

#Panfletos {
  padding-top: 100px;
}
#idpage {
  display: flex;
  justify-content: center;
}
#button {
  color: #061536;
  border: 2px solid #061536;
  box-shadow: 1px 1px #061536;
  height: 30px;
  width: 30px;
}
#button:hover {
  box-shadow: 1px 1px 3px 3px black;
  color: #fff;
  background-color: #061536;
}
#vermais {
  color: #000;
  border: 1px solid #061536;
  background-color: #fff;
}
#vermais:hover {
  color: #fff;
  background-color: #061536;
}
#idsearch{
  width: 40%;
  height: 30px;
  text-align: center;
  box-shadow: 1px 1px  #061536;
}
.form-group{
  display: flex;
  justify-content: space-between;
}

.pcente{
    text-align: center;
    font-weight: bold;
    margin-left: 10%;
    margin-right:  10%;
}
.pcenter{
    text-align: center; 
    margin-left: 20%;
    margin-right:  20%;
    font-weight: bold
}
.pleft{
    text-align: left;  
    font-weight: bold
}
</style>
