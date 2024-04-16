<template>
  <!-- ======= isencoes Section ======= -->
  <section id="isencoes" class="isencoes">
    <div class="container">
      <div class="section-bredcumbs">
        <h5>
          Onde estou?
          <router-link style="text-decoration: none" to="/">
            <b>Página Inicial</b>
          </router-link>
          <b> > </b>
          <router-link style="text-decoration: none" to="#">
            <b>Formulários</b>
          </router-link>
          <b> > </b>
          <router-link style="text-decoration: none" to="/isencoes">
            <b>Isenções de Notificações</b>
          </router-link>
        </h5>
      </div>
      <div class="section-title">
        <h2>ISENÇÕES DE NOTIFICAÇÃO</h2>
      </div>

      <div class="row">
        <div class="form-group">
          <p class="pleft">Isenções disponíveis: {{ countNumbers() }}</p>
          <input
            id="idsearch"
            type="text"
            class="form-control"
            v-model="search"
            placeholder="Procurar por isenções ..."
          />
        </div>
        <p><br /></p>
        <div
          id="box"
          v-for="(pub, index) in filteredList"
          :key="index"
          class="row"
        >
          <router-link :to="{ name: 'isencaoid', params: { id: pub.id } }">
            <div class="post-box" alt="Abrir Isenção em PDF">
              <!-- :src="pub.url" src="/img/lei.png"-->

              <div id="isencao" class="first">
                <img src="/img/isencoes.jpg" alt="Avatar" style="width: 60px" />
              </div>
              <div id="isencao" class="second">
                <h5 class="post-title">
                  {{ pub.titulo }}
                </h5>
              </div>
              <div id="isencao" class="third">
                <div class="icon">
                  <IconAwe class="icon-color" icon="file-pdf" />
                </div>
              </div>
            </div>
          </router-link>
        </div>
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
  <!-- End isencoes Section -->
</template>

<script>
import axios from "axios";
import { API_ENDPOINT } from "../main.js";

export default {
  name: "IsencoesCnpd",
  data: () => ({
    isencoes: [], //array com os itens
    currentSort: "titulo", //ordenar por titulo
    currentSortDir: "asc", // ordenar ascendente
    search: "", //search
    searchSelection: "",
    pageSize: 8, //paginacao
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
      if (this.currentPage * this.pageSize < this.isencoes.length)
        this.currentPage++;
    },
    prevPage() {
      if (this.currentPage > 1) this.currentPage--;
    },

    countNumbers() {
      return this.isencoes.length;
    },
  },

  computed: {
    filteredList() {
      return this.isencoes
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
    axios.get(`${API_ENDPOINT}/api/isencoes`) 
      .then((response) => {
        this.isencoes = response.data;
      });
  },
  mounted() {
    window.scrollTo(0, 0); // Rola para o topo da página quando a página é carregada
  },
};
</script>

<style scoped>
#isencoes {
  padding-top: 100px;
  margin-left: 30px;
}
.post-box {
  box-shadow: 0px 0 30px rgba(1, 41, 112, 0.08);
  transition: 0.3s;
  overflow: hidden;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
} 
#isencao {
  margin: 10px;
}

.first {
  width: 5%;
  display: inline-block;
}

.second {
  width: 75%;
  display: inline-block;
}

.third {
  width: 5%;
  display: inline-block;
}

@media screen and (max-width: 500px) {
  .first,
  .second,
  .third {
    width: 100%;
  }
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
.post-box .post-title {
  font-size: 16px;
  color: #374253;
  margin-bottom: 18px;
  position: relative;
  text-align: left;
  transition: 0.3s;
}
@media (min-width: 1024px) {
  .section-title p {
    width: 50%;
  }
}

.icon .icon-color {
  font-size: 35px;
  line-height: 1;
  color: #013365;
  transition: all 0.9s ease-in-out;
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
#idsearch {
  width: 40%;
  height: 30px;
  text-align: center;
  box-shadow: 1px 1px #061536;
}
.pleft {
  text-align: left;
  font-weight: bold; 
  font-family: "Times New Roman", Times, serif;
}
.form-group {
  display: flex;
  justify-content: space-between;
}
</style>
