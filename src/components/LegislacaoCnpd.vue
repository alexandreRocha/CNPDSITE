<template>
  <!-- ======= legislacao Section ======= -->
  <section id="legislacao" class="legislacao">
    <div class="container" id="geral">
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
        </h5>
      </div>
      <div class="section-title">
        <h2>LEGISLAÇÃO</h2>
      </div>

      <div class="row">
        <div class="form-group">
          <p class="pleft">Legislações disponíveis: {{ countNumbers() }}</p>
          <input
            id="idsearch"
            type="text"
            class="form-control"
            v-model="search"
            placeholder="Procurar por legislação ..."
          />
        </div>
        <p><br /></p>
        <div
          id="box"
          v-for="(lei, index) in filteredList"
          :key="index"
          class="col-lg-3"
        >
          <div class="post-box"> 
            <router-link :to="{ name: 'leiview', params: { id: lei.id } }">
              <!-- :src="user.url" src="/img/lei.png" /img/law1.png-->
              <div class="post-img">
                <img  v-if="lei.titulo === 'Modelo de Aviso de CCTV'" src="/img/AVISO.png" class="img-fluid" alt="" />
                <img v-else src="/img/law11.png" class="img-fluid" alt="" /> 
              </div>
              <h5 class="post-title">
                {{ lei.titulo }}
              </h5>
            </router-link>
          </div>
        </div>
        <p><br /></p>
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
  <!-- End legislacao Section -->
</template>

<script>
import axios from "axios";
import { API_ENDPOINT } from "../main.js";

export default {
  name: "LegislacaoCnpd",
  data: () => ({
    legislacaos: [], //array com os itens
    currentSort: "title", //ordenar por title
    currentSortDir: "asc", // ordenar ascendente
    search: "", //search
    searchSelection: "",
    pageSize: 8, //paginacao por pagina
    currentPage: 1,
  }),

  methods: {
    sort(s) {
      if (s === this.currentSort) {
        this.currentSortDir = this.currentSortDir === "asc" ? "desc" : "asc";
      }
      this.currentSort = s;
    },
    nextPage() {
      if (this.currentPage * this.pageSize < this.legislacaos.length)
        this.currentPage++;
    },
    prevPage() {
      if (this.currentPage > 1) this.currentPage--;
    },

    countNumbers() {
      return this.legislacaos.length;
    },
  },

  computed: {
    filteredList() {
      return this.legislacaos
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
      axios.get(`${API_ENDPOINT}/api/legislacao`)
      .then((response) => {
        this.legislacaos = response.data;
      });
  }, 
  mounted() {
    window.scrollTo(0, 0); // Rola para o topo da página quando a página é carregada
  },
};
</script>

<style scoped>
#geral{

  font-family: "Times New Roman", Times, serif;
}
#box {
  margin-bottom: 15px; 
}
img {
  width: 200px;
  height: 200px;
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

.legislacao {
  background: #fff;
  padding-top: 100px;
}
#idsearch {
  width: 40%;
  height: 30px;
  text-align: center;
  box-shadow: 1px 1px #061536;
}
.form-group {
  display: flex;
  justify-content: space-between;
}

.pleft {
  text-align: left;
  font-weight: bold; 
  font-family: "Times New Roman", Times, serif;
}
.legislacao .icon-box {
  padding: 20px 30px;
  position: relative;
  overflow: hidden;
  background: #fff;
  box-shadow: 2px 0 35px 0 rgba(68, 88, 144, 0.12);
  transition: all 0.3s ease-in-out;
  border-radius: 8px;
  z-index: 1;
  text-align: center;
}
.legislacao .icon-box::before {
  content: "";
  position: absolute;
  background: #fdeff2;
  right: 0;
  left: 0;
  bottom: 0;
  top: 100%;
  transition: all 0.4s;
  z-index: -1;
}

.legislacao .icon {
  margin-bottom: 15px;
}
.legislacao .icon .icon-color {
  font-size: 35px;
  line-height: 1;
  color: #013365;
  transition: all 0.9s ease-in-out;
}
.legislacao .title {
  font-weight: 700;
  margin-bottom: 15px;
  font-size: 18px;
}
.legislacao .title a {
  color: #111;
}
.legislacao .description {
  font-size: 15px;
  line-height: 28px;
  margin-bottom: 0;
}

.legislacao .post-box {
  box-shadow: 0px 0 30px rgba(1, 41, 112, 0.08);
  transition: 0.3s;
  height: 100%;
  overflow: hidden;
  padding: 10px; 
  border-radius: 8px;
  position: relative;
  display: flex;
  flex-direction: column; 
}
.legislacao .post-box .post-img {
  overflow: hidden;
  margin: -10px -10px 10px -10px;
  position: relative;
}
.legislacao .post-box .post-img img {
  transition: 0.5s;
  width: 100%;
}

.legislacao .post-box .post-title {
  font-size: 16px;
  color: #374253;
  font-weight: 700;
  margin-bottom: 18px;
  position: relative;
  text-align: center;
  transition: 0.3s; 
  font-family: "Times New Roman", Times, serif;
}

.legislacao .post-box .readmore {
  display: flex;
  align-items: center;
  font-weight: 600;
  line-height: 1;
  transition: 0.5s;
  color: #013365;
}
.legislacao .post-box .readmore .icon-color {
  line-height: 0;
  margin-left: 4px;
  font-size: 18px;
  color: #013365;
}

.legislacao .post-box:hover .post-img img {
  transform: rotate(-5deg) scale(1.1);
}
a {
  text-decoration: none;
  color: #fff;
  transition: ease-in-out 0.3s;
}

.passarato {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 70%;
  width: 140%;
  opacity: 0;
  transition: 0.5s ease; 
  background-color: #fff; 
}

#box:hover .passarato{
  opacity: 0.9;
}

 
.descricao {
  color: black;
  font-size: 16px;
  position: absolute;
  text-align: justify;
  top: 50%;
  left: 35%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: justify;
  color:#013365;
  background-color: #fff;
  font-family: "Times New Roman", Times, serif;
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
</style>
