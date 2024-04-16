<template>
  <section id="comunicados" class="comunicados">
    <div class="container">
      <div class="section-bredcumbs">
        <h5>
          Onde estou?
          <router-link style="text-decoration: none" to="/">
            <b>Página Inicial</b>
          </router-link>
          <b> > </b>
          <router-link style="text-decoration: none" to="#">
            <b>Relações Públicas</b>
          </router-link>
          <b> > </b>
          <router-link style="text-decoration: none" to="/diretivas">
            <b>Comunicados Publicadas</b>
          </router-link>
        </h5>
      </div>
      <div class="section-title">
        <h2>Comunicados da CNPD</h2>
      </div>

      <div class="col-md-12">
        <div class="form-group">
          <p class="pleft">Comunicados disponíveis: {{ countNumbers() }}</p>
          <input
            id="idsearch"
            type="text"
            class="form-control"
            v-model="search"
            placeholder="Procurar por título ou por ano ..."
          />
        </div>
        <br>

        <div
          id="box"
          v-for="(pub, index) in filteredList"
          :key="index"
          class="row"
        >
          <router-link :to="{ name: 'comunicadoid', params: { id: pub.id } }">
            <div class="post-box" alt="Abrir Isenção em PDF">
              <!-- :src="pub.url" src="/img/lei.png"-->

              <div id="comunicado" class="first">
                <img src="/img/press.png" alt="Avatar" style="width: 60px" />
              </div>
              <div id="comunicado" class="second">
                <h5 class="post-title">
                  {{ pub.titulo }}
                </h5>
              </div>
              <div id="comunicado" class="third">
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
</template>

<script>
/*eslint-disable*/
import axios from 'axios';

import { API_ENDPOINT } from "../main.js";
export default { 
    name:'ComunicadosCnpd',
    data: () => ({
    listas: [],//meu array com os itens que vem do API
    currentSort:'name',
    currentSortDir:'asc',
    search: '',
    searchSelection: '',
    pageSize: 8,
    currentPage: 1
  }),

  methods:{
    sort(s) {
      if(s === this.currentSort) {
        this.currentSortDir = this.currentSortDir==='asc'?'desc':'asc';
      }
      this.currentSort = s;
    },
    nextPage() {
      if((this.currentPage*this.pageSize) < this.listas.length) this.currentPage++;
    },
    prevPage() {
      if(this.currentPage > 1) this.currentPage--;
    },

    countNumbers(){
      return this.listas.length; 
    }
  },

  computed: { 
    sortedActivity() {
      return this.listas.sort((a,b) => {
        let modifier = 1;
        if(this.currentSortDir === 'desc') modifier = -1;
        if(a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
        if(a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
        return 0;
      }).filter((row, index) => {
        let start = (this.currentPage-1)*this.pageSize;
        let end = this.currentPage*this.pageSize;
        if(index >= start && index < end) return true;
      });
    },
    filteredList () {
      return this.listas.filter((data) => { 
        let titulo = data.titulo.toLowerCase().match(this.search.toLowerCase()); 
        let num_doc = data.num_doc.toLowerCase().match(this.search.toLowerCase());
        return titulo || num_doc;
      }).filter((row, index) => {
        let start = (this.currentPage-1)*this.pageSize;
        let end = this.currentPage*this.pageSize;
        if(index >= start && index < end) return true;
      });
    }
  },

  created () { 
    axios.get(`${API_ENDPOINT}/api/comunicados`)
      .then(response => {
        this.listas = response.data  
      },)
  }, 
  mounted() {
    window.scrollTo(0, 0); // Rola para o topo da página quando a página é carregada
  },

}
</script>

<style>
#idpage {
  display: flex;
  justify-content: center;
}
#button{
   
  color: #061536;
  border: 2px solid #061536;
  box-shadow: 1px 1px #061536;
  height: 30px;
  width: 30px; 
}
#button:hover{
  box-shadow: 1px 1px  3px 3px black;
  color: #fff;
  background-color: #061536;
}
#idsearch{
  width: 40%;
  height: 30px;
  text-align: center;
  box-shadow: 1px 1px  #061536;
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
  background: #BD9A13;
  color: #000;
  display: inline-block;
  text-transform: uppercase;
  border-radius: 50px;
}  
 
 
.comunicados {
  background: #fff; 
  padding-top: 120px;
   font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; 
} 
a{
    text-decoration: none;
}
.comunicados .icon-box {
  display: flex;
  align-items: center;
  padding: 20px;
  transition: ease-in-out 0.3s;
  box-shadow: 2px 0 35px 0 rgba(68, 88, 144, 0.12);
}
.comunicados .icon-box i {
  font-size: 32px;
  padding-right: 10px;
  line-height: 1;
}
.comunicados .icon-box h3 {
  font-weight: 700;
  margin: 0;
  padding: 0;
  line-height: 1;
  font-size: 16px;
}
.comunicados .icon-box h3 a {
  color: #493c3e;
  transition: ease-in-out 0.3s;
}
.comunicados .icon-box:hover a {
  color: #BD9A13; 
}

th {
  cursor:pointer;
  /* width: 500px !important; */
  white-space: nowrap;
}

tr {
  white-space: nowrap;
}
.table-responsive{
    text-align: left;
}

.trcabecalho{
    font-weight: bold;
    background-color: #fff; 
}
 
.post-box {
  box-shadow: 0px 0 30px rgba(1, 41, 112, 0.08);
  transition: 0.3s;
  overflow: hidden;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
}
/*
img {
  border-radius: 80%;
}*/
#comunicado {
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
  
.form-group {
  display: flex;
  justify-content: space-between;
}
</style>
