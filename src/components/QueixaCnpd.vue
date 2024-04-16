<template>
  <!-- ======= queixa Section ======= -->
  <section id="queixa" class="queixa">
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
          <router-link style="text-decoration: none" to="/queixa">
            <b>Queixas</b>
          </router-link>
        </h5>
      </div>
      <div class="section-title">
        <h2>FORMULÁRIO DE APRESENTAÇÃO DE QUEIXAS/RECLAMAÇÕES</h2>
      </div>
      <div class="col-md-12"  id="divg">
        <Form @submit="onSubmit">  
          <div class="row">
            <p style="text-align: justify;">
              Sem prejuízo do direito de recorrer às instâncias judiciais, 
              qualquer pessoa pode apresentar queixas, reclamações ou petições
               à Comissão Nacional de Protecção de Dados (CNPD) em caso de violação de seus dados pessoais.
            </p>
            <p style="text-align: justify;">
              Para esse efeito, deve preencher o formulário disponibilizado abaixo,  
              nos termos do n.º 1 artigo 30.º <a href="#">Lei n.º 42/VIII/2013</a>, de 17 de setembro,
               alterada pela <a href="#">Lei n.º 120/IX/2021</a>, de 17 de março.
            </p>
            <p style="text-align: justify;">
               As queixas, reclamações ou petições podem também ser apresentadas 
               presencialmente junto da CNPD no seguinte endereço: Avenida da China, Rampa Terra Branca,
               Chã d´Areia, Cidade da Praia.
            </p>
            <div class="col-md-6" id="divloco">
              <p class="pleft"> Dados do queixoso:</p>
               
              <div class="col-md-12" id="divloco"> 
               <Field
                  :rules="validateText"
                  type="text"
                  class="form-control"
                  name="nome"
                  v-model="nome"
                  placeholder="Seu Nome"
                 />
                <ErrorMessage class="errorMessage" name="nome" /> 
              </div>
              <div class="col-md-12" id="divloco">
              <Field
                  :rules="validateText"
                  type="text"
                  class="form-control"
                  name="morada"
                  v-model="morada"
                  placeholder="Sua morada ..."
                 />
                <ErrorMessage class="errorMessage" name="morada" /> 
              </div>
              <div class="col-md-12" id="divloco"> 
               <Field
                  :rules="validateNumber"
                  type="number"
                  class="form-control"
                  name="telefone"
                  v-model="telefone"
                  placeholder="Nº de telefone Ex: 5900000"
                 />
                <ErrorMessage class="errorMessage" name="telefone" /> 
              </div>
              <div class="col-md-12"  id="divloco"> 
                <Field
                  :rules="validateEmail"
                  type="email"
                  class="form-control"
                  name="email"
                  v-model="email"
                  id="email"
                  placeholder="Entre seu email Ex: cnpd@cnpd.cv"
                  />
                <ErrorMessage class="errorMessage" name="email" /> 
              </div>
            </div>

            <div class="col-lg-6" id="divloco">
              <p class="pleft"> Dados do denunciado:</p>
              <div class="col-md-12"> 
              <Field
                  :rules="validateText"
                  type="text"
                  class="form-control"
                  name="entidade"
                  v-model="entidade"
                  placeholder="Queixa contra a Entidade ... Ex: Empresa XPTO"
                     />
                <ErrorMessage class="errorMessage" name="entidade" /> 
              </div>
              <div class="col-md-12" id="divloco">
                <Field
                  :rules="validateText"
                  type="text"
                  class="form-control"
                  name="moradaEntidade"
                  v-model="moradaEntidade"
                  placeholder="Morada da Entidade... Ex: Palmarejo"
                    />
                <ErrorMessage class="errorMessage" name="moradaEntidade" /> 
              </div>
              <div class="col-md-12" id="divloco"> 
                <Field
                  :rules="validateNumber"
                  type="number"
                  class="form-control"
                  name="telefoneEntidade"
                  v-model="telefoneEntidade"
                  placeholder="Nº de telefone da Entidade... Ex: 5900000"
                /> 
              </div>
              <div class="col-md-12" id="divloco">
                <Field
                  :rules="validateEmail"
                  type="email"
                  class="form-control"
                  name="emailEntidade"
                  v-model="emailEntidade"
                  placeholder="Entre o email da Entidade...  Ex: xpto@xpto.cv"
                  /> 
              </div>
            </div>
            
            <p class="pleft"> Obejeto da sua queixa:</p>
            <div class="col-md-12" id="divloco"> 
              <Field
                :rules="validateText"
                type="text"
                class="form-control"
                name="assunto"
                v-model="assunto"
                placeholder="Qual o assunto da sua queixa"
              />
              <ErrorMessage class="errorMessage" name="assunto" /> 
            </div>
            <div class="col-md-12" id="divloco"> 
              <Field
                :rules="validateText"
                type="text"
                as="textarea"
                class="form-control"
                name="descricao"
                v-model="descricao" 
                rows="3"
                placeholder="Descreva a sua queixa em detalhes ..."
              />
              <ErrorMessage class="errorMessage" name="descricao" /> 
              <div><br></div>
  
              
              <div class="col">
                <label class="form-check-label">
                  Pretende anexar algum documento ou fotografia?
                </label>
                <buttom
                  @click="changeAnexos"
                  type="button"
                  class="btn btn-outline-primary"
                  name="morada"
                  id="moradasimbotton"
                >
                  {{ checkAnexos ? "Não" : "Sim" }}
                </buttom>
              </div>
              <div class="col-md-12"><br /></div>
              <div class="col-md-12" v-if="checkAnexos"> 
                
                <Field
                  v-model="anexo"
                  name="anexo"
                  class="form-control"
                  type="file"
                  ref="file"
                  :rules="validateText" 
                  accept="image/png, image/gif, image/jpeg, application/pdf"
                  
                />

                <!--accept="image/png, image/gif, image/jpeg"-->
                
                <ErrorMessage class="errorMessage" name="anexo" />
                <br>
                <span style="color: #BC9913">Se tiver mais do que um anexo por favor entre em contato por email.</span>
              </div>
            </div> 
          </div>
          <br>
          <div class="col-md-12" id="divsave">
          <button
            @click="submitForm"
            id="buttonsave"
            class="btn btn-primary"
            type="submit"
          >
          <IconAwe class="icon-color" icon="paper-plane"
                    /> Submeter Queixa
          </button>
        </div> 
         <!------------------MODAL SHOW ------------------------->
         <div v-show="showModal" class="modal-mask">
              <div class="modal-wrapper">
                <div class="modal-container">
                  <h5 class="modal-title" >
                  Atenção:
                  </h5>
                  <hr> 
                  <div class="modal-header" id="headermodal">
                     <img id="img" src="/img/success1.gif" class="center">
                  </div>
                  <p id="success">O seu formulário foi submetido com Sucesso.</p>   
                  <div class="modalFooter">
                  <button
                        @click="closeSuccess"
                        id="buttonsave"
                        class="btn btn-primary"
                      >
                        <IconAwe class="icon-color" icon="circle-check" /> Fechar
                    </button>
                  </div>
                </div>
              </div>
              
            </div>
            <div v-show="ErrorModal" class="modal-mask">
              <div class="modal-wrapper">
                <div class="modal-container">
                  <h5 class="modal-title" >
                  Atenção:
                  </h5>
                  <hr> 
                  <div class="modal-header" id="headermodal">
                     <img id="img" src="/img/error-img.gif" class="center">
                  </div>
                  <p id="error">O seu formulário não foi submetido.</p>
                  <p id="error1">Por favor tente novamente!</p>     
                  <div class="modalFooter">
                    <button
                        @click="closeError"
                        id="buttonsave"
                        class="btn btn-primary"
                      >
                        <IconAwe class="icon-color" icon="circle-check" /> Fechar
                    </button>
                  </div>
                </div>
              </div>
              
            </div>
            <!------------------FIM DE MODAL SHOW------------------------->
        </Form>
      </div>
    </div>
  </section>
  <!-- End queixa Section -->
</template>

<script> 
import { API_ENDPOINT } from "../main.js";

import { Form, Field, ErrorMessage } from "vee-validate";
import axios from "axios";
export default { 
  components: {
    Form,
    Field,
    ErrorMessage, 
  }, 
  data() {
    return {
      anexo:"",
      checkAnexos: false,
    }
  },

  methods: {
    async onSubmit() {
      const datas = {

          nome_queixoso: this.nome,
          morada_queixoso: this.morada,
          telefone_queixoso: this.telefone,
          email_queixoso: this.email,
          entidade_queixa: this.entidade,
          morada_queixa: this.moradaEntidade,
          telefone_queixa: this.telefoneEntidade,
          email_queixa: this.emailEntidade,
          assunto_queixa: this.assunto,
          descricao_queixa: this.descricao,
          anexo_queixa: this.anexo,  
      };
       
  //SUBMIT FORM WITH AXIOS 
    try {
      await axios.post(`${API_ENDPOINT}/api/queixa/create`, datas, { 
        headers: { "Content-Type": "multipart/form-data; charset=utf-8" },
      }); 
      this.showModal = !this.showModal; 
      setTimeout(function(){
        window.location.reload();
      }, 5000)

    }catch(error){
          this.ErrorModal = !this.ErrorModal; 
         setTimeout(function(){
          window.location.reload();
        }, 5000)
      } 
        
    },
    
    closeError(event) {
      this.ErrorModal = !this.ErrorModal; 
     event.preventDefault();
      window.location.reload();
    },
    closeSuccess(event) {
      this.showModal = !this.showModal;  
    event.preventDefault();
    window.location.reload();
    },
    validateText(value) {
      // if the field is empty
      if (!value) {
        return "Campo obrigatório!";
      }
      return true;
    },
 
    validateNumber(value) {
      // if the field is empty
      if (!value) {
        return "Campo obrigatório!";
      }
      // if the field is not a valid number
      const regex = /[0-9]/;
      if (!regex.test(value)) {
        return "Carater inválido, precisa ser um número!";
      }

      return true;
    },
    validateEmail(value) {
      // if the field is empty
      if (!value) {
        return "Campo obrigatório!";
      }
      // if the field is not a valid email
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return "Email inválido, precisa ser nesse formato: cnpd@example.cv";
      }
      // All is good
      return true;
    },
    changeAnexos() {
      this.checkAnexos = !this.checkAnexos;
    },
    mounted() {
    window.scrollTo(0, 0); // Rola para o topo da página quando a página é carregada
  },
  }
  
};
</script>


<style scoped>
/*--------------------------------------------------------------
# queixa
--------------------------------------------------------------*/
a:hover {
  color: #bd9a13;
  text-decoration: none;
}
a {
  color: #bd9a13;
  text-decoration: none;
}
#divg {
  font-family: "Times New Roman", Times, serif;
  padding: 10px;/*
  border: 1px solid #061536;
  border-radius: 10px;*/
}
#buttonsave {
  background-color: #061536;
}
#divsave {
  margin-top: 10px;
  text-align: center;
}
button#buttonsave:hover,
button#buttonsave:focus {
  background-color: #061536;
  outline: none !important;
  border-color: #061536;
  color: #bd9a13;
  box-shadow: 0 0 10px #061536;
}
#divloco {
  margin-top: 10px;
}
.pleft{
    text-align: left;  
    font-weight: bold
}
#queixa {
  padding-top: 60px;
}
#framemaps {
  border-radius: 1%;
  width: 100%;
  height: 400px;
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
.section-title h3 {
  margin: 15px 0 0 0;
  font-size: 32px;
  font-weight: 700;
}
.section-title h3 span {
  color: #000;
}
.section-title p {
  margin: 15px auto 0 auto;
  font-weight: 600;
}
@media (min-width: 1024px) {
  .section-title p {
    width: 50%;
  }
}
.queixa .info {
  width: 100%;
  background: #fff;
}
.queixa .info i {
  font-size: 20px;
  color: #030b1c;
  float: left;
  width: 32px;
  height: 32px;
  background: #bd9a13;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  transition: all 0.3s ease-in-out;
}
.queixa .info h4 {
  padding: 0 0 0 60px;
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 5px;
  color: #493c3e;
}
.queixa .info p {
  padding: 0 0 0 60px;
  margin-bottom: 0;
  font-size: 14px;
  color: #000;
}
.queixa .info .email,
.queixa .info .phone {
  margin-top: 40px;
}
.queixa .info .email:hover i,
.queixa .info .address:hover i,
.queixa .info .phone:hover i {
  color: #fff;
}
.queixa .php-email-form {
  width: 100%;
  background: #fff;
}
.queixa .php-email-form .form-group {
  padding-bottom: 8px;
}
.queixa .php-email-form .error-message {
  display: none;
  color: #fff;
  background: #ed3c0d;
  text-align: left;
  padding: 15px;
  font-weight: 600;
}
.queixa .php-email-form .error-message br + br {
  margin-top: 25px;
}
.queixa .php-email-form .sent-message {
  display: none;
  color: #fff;
  background: #18d26e;
  text-align: center;
  padding: 15px;
  font-weight: 600;
}
.queixa .php-email-form .loading {
  display: none;
  background: #fff;
  text-align: center;
  padding: 15px;
}
.queixa .php-email-form .loading:before {
  content: "";
  display: inline-block;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin: 0 10px -6px 0;
  border: 3px solid #18d26e;
  border-top-color: #eee;
  -webkit-animation: animate-loading 1s linear infinite;
  animation: animate-loading 1s linear infinite;
}
.queixa .php-email-form input,
.queixa .php-email-form textarea {
  border-radius: 0;
  box-shadow: none;
  font-size: 14px;
}
.queixa .php-email-form input:focus,
.queixa .php-email-form textarea:focus {
  border-color: #030b1c;
}
.queixa .php-email-form input {
  height: 44px;
}
.queixa .php-email-form textarea {
  padding: 10px 12px;
}
.queixa .php-email-form button[type="submit"] {
  background: #bd9a13;
  border: 0;
  padding: 10px 28px;
  color: #000;
  font-weight: bold;
  transition: 0.4s;
  border-radius: 50px;
}
.queixa .php-email-form button[type="submit"]:hover {
  background: #bd9a13;
}
@-webkit-keyframes animate-loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes animate-loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.icon-color {
  font-size: 14px;
}
</style>
