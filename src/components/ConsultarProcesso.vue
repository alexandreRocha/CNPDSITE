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
            <b>Canal do Cidadão</b>
          </router-link>
          <b> > </b>
          <router-link style="text-decoration: none" to="/consultarp">
            <b>Estado Processo</b>
          </router-link>
        </h5>
      </div>
      <div class="section-title">
          <h2>Consultar Estado de Processo na CNPD</h2>  
      </div>  
      <div id="center">
        <input v-model="search" id="idsearch" type="text" class="form-control" @keyup.enter="consultarNumDuc" placeholder="Pesquisar pelo seu número de DUC">
        <button id="buttonsave" class="btn btn-primary" @click="consultarNumDuc" type="button"><IconAwe  class="icon-color" icon="search"/></button> 
      <br><br>
      </div>
      <div v-if="results"> <!-- Verifica se há resultados -->
        <div class="table-responsive">
          <table class="table table-striped table-bordered" style="width:100%">
            <thead width="400px" class="trcabecalho">
              <tr> 
                <th scope="col">#</th> 
                <th scope="col">Entidade</th>
                <th scope="col">Nº. DUC</th>
                <th scope="col">Estado DUC</th>
                <th scope="col">Estado Processo</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(result, index) in results" :key="index">
                <td>{{index + 1}}</td> 
                <td>{{ result.entidade }}</td>
                <td>{{ result.num_duc }}</td>
                <td>{{ result.estadoD }}</td>
                <td>{{ result.estadoP }}</td>
              </tr> 
            </tbody>
          </table>
        </div>
      </div>
      <div v-if="results && results.length === 0"> <!-- Verifica se há resultados e não há resultados -->
        <div class="alert alert-danger" role="alert">
         Upss! Nenhum DUC foi encontrado!
        </div>
      </div>

    </div>
     
 </section> 
</template>

<script>
import axios from 'axios';
import { API_ENDPOINT } from "../main.js";

export default {
  data() {
    return {
      index:0,
      search: '',
      results: null,
    };
  },
  methods: { 
     
    consultarNumDuc() { 
      axios.get(`${API_ENDPOINT}/api/consultarp`)
        .then(response => {
          const foundResults = response.data.data.filter(item => item.num_duc === this.search);
          this.results = foundResults || [];
        })
        .catch(error => {
          console.error('Erro na solicitação axios:', error);
        });
    },
  },
};
</script>

<style> 

#center{
  margin: 0 auto; text-align: center;
}
#buttonsave {
  margin-top: -60px;
  margin-right: -580px;
  background-color: #013365;
  outline: none !important;
  border-color: #013365;
  color: #fff;
  box-shadow: 0 0 10px #061536;
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
#idsearch{
  margin: 0 auto; text-align: center;
  width: 35%;
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
 
.section-title {
  text-align: center;
  padding-bottom: 30px;
}
.section-title h2 {
  font-size: 12px;
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
  padding-bottom: 500px; /* Altura do rodapé */
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
