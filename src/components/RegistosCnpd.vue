<template>
  <section id="decisoes" class="decisoes">
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
             <b>Registos Publicadas</b>
           </router-link>
         </h5>
       </div>
         <div class="section-title">
             <h2>Decisões da CNPD</h2> 
         </div> 
         <div class="col-md-12">
            <div class="form-group">
              <p class="pleft"> Registos disponíveis: {{ countNumbers() }}</p> 
              <input id="idsearch" type="text" class="form-control" v-model="search" placeholder="Procurar por Entidades ou Nº decisão ...">

            </div> 
            <br>
            <div v-for="(lista) in (sortedActivity, filteredList)" :key="lista.id"> 
              <div id="autos">
                <router-link id="links" :to="{name: 'regisview',params: { id: lista.id}}">  
                  <div class="alert alert-secondary" role="alert">
                    <b id="title">{{ lista.tipo_processo }} Nº.{{ lista.num_decisao }} - {{ lista.entidade }}</b> 
                    <br><b id="date">Data Decisão: {{lista.data_decisao}}</b>
                  </div>
                </router-link> 
              </div> 
            </div>
            <div id="idpage">
              <button id="button" @click="prevPage" class="float-left btn btn-outline-info btn-sm"><i class="fas fa-arrow-left"></i> </button> 
              <button id="button" @click="nextPage" class="float-right btn btn-outline-info btn-sm"> <i class="fas fa-arrow-right"></i></button>
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
     name:'RegistosCnpd',
     data: () => ({
     listas: [],//meu array com os itens que vem do API
     currentSort:'entidade',
     currentSortDir:'asc',
     search: '',
     searchSelection: '',
     pageSize: 5,
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
         //let email = data.email.toLowerCase().match(this.search.toLowerCase());
         let entidade = data.entidade.toLowerCase().match(this.search.toLowerCase());
         let tipo_entidade = data.tipo_entidade.toLowerCase().match(this.search.toLowerCase());
         let num_decisao = data.num_decisao.toLowerCase().match(this.search.toLowerCase());
         return entidade || num_decisao || tipo_entidade/* || city || num_decisao*/;
       }).filter((row, index) => {
         let start = (this.currentPage-1)*this.pageSize;
         let end = this.currentPage*this.pageSize;
         if(index >= start && index < end) return true;
       });
     }
   },
 
   created () { 
     axios.get(`${API_ENDPOINT}/api/registos`)
       .then(response => {
         this.listas = response.data  
       },)
   },
   mounted() {  
     document.title = "Autorizações | CNPD";  
     window.scrollTo(0, 0); // Rola para o topo da página quando a página é carregada
   }, 
 
 }
 </script>
 
 <style>
  
#title{ 
  font-size: 14px;
}
#date{ 
font-size: 10px;
}
#autos{
  text-align: left;
  font-family: "Times New Roman", Times, serif;
} 
#autos:hover{ 
  border-width: 2px; /* Aumenta a largura da borda ao passar o mouse */
  box-shadow: 0px 0px 10px #2c3e50;
  border-radius: 10px;
}
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
  
  
 .decisoes {
   background: #fff; 
   padding-top: 120px;
   font-family: "Times New Roman", Times, serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: #2c3e50; 
 } 
 a{
     text-decoration: none;
 }
 .decisoes .icon-box {
   display: flex;
   align-items: center;
   padding: 20px;
   transition: ease-in-out 0.3s;
   box-shadow: 2px 0 35px 0 rgba(68, 88, 144, 0.12);
 }
 .decisoes .icon-box i {
   font-size: 32px;
   padding-right: 10px;
   line-height: 1;
 }
 .decisoes .icon-box h3 {
   font-weight: 700;
   margin: 0;
   padding: 0;
   line-height: 1;
   font-size: 16px;
 }
 .decisoes .icon-box h3 a {
   color: #493c3e;
   transition: ease-in-out 0.3s;
 }
 .decisoes .icon-box:hover a {
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
 </style>
 