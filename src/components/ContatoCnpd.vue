<template>
  <!-- ======= Contact Section ======= -->
  <section id="contact" class="contact">
    <div class="container">
      <div class="section-bredcumbs">
        <h5>
          Onde estou?
          <router-link style="text-decoration: none" to="/">
            <b>Página Inicial</b>
          </router-link>
          <b> > </b>
          <router-link style="text-decoration: none" to="/contato">
            <b>Contato</b>
          </router-link>
        </h5>
      </div>
      <div class="section-title"> 
      </div>

      <div class="row">
        <div class="col-lg-5">
          <div class="info">
            <div class="address">
              <i class="circle"><IconAwe class="icon-color" icon="house" /></i>
              <h4>Endereço:</h4>
              <p>
                Av. da China, Rampa Terra Branca Praia, Santiago, Cabo Verde
              </p>
            </div>
            <br>
            <div class="address">
              <i class="circle"><IconAwe class="icon-color" icon="fax" /></i>
              <h4>Caixa Postal:</h4>
              <p>Apartado 1002, Caixa Postal 7600</p>
            </div>

            <div class="email">
              <i class="circle"
                ><IconAwe class="icon-color" icon="envelope"
              /></i>
              <h4>Email:</h4>
              <p>cnpd@cnpd.cv</p>
            </div>

            <div class="phone">
              <i class="circle"><IconAwe class="icon-color" icon="phone" /></i>
              <h4>Telefone:</h4>
              <p>+238 5340390</p>
            </div>
          </div>
        </div>

        <div class="col-lg-7 mt-5 mt-lg-0" id="divg">
          <div class="section-title">
        <h2>Envie um Email à CNPD</h2>
      </div>
          <Form @submit="onSubmit"
            >
            <div class="row">
              <div class="col-md-6" id="divloco">
                <Field
                  :rules="validateText"
                  type="text"
                  class="form-control"
                  name="nome"
                  id="nome"
                  v-model="nome"
                  placeholder="Seu Nome"
                />
                <ErrorMessage class="errorMessage" name="nome" />
              </div>
              <div class="col-md-6" id="divloco">
                <Field
                  :rules="validateEmail"
                  type="email"
                  class="form-control"
                  name="email"
                  id="email"
                  v-model="email"
                  placeholder="Entre seu email Ex: cnpd@cnpd.cv"
                />
                <ErrorMessage class="errorMessage" name="email" />
              </div>
            </div>
            <div class="row">
              <div class="col-md-6" id="divloco">
                <Field
                  :rules="validateText"
                  type="text"
                  class="form-control"
                  name="morada"
                  id="morada"
                  v-model="morada"
                  placeholder="Sua morada ..."
                />
                <ErrorMessage class="errorMessage" name="morada" />
              </div>
              <div class="col-md-6" id="divloco">
                <Field
                  :rules="validateNumber"
                  type="number"
                  class="form-control"
                  name="telefone"
                  id="telefone"
                  v-model="telefone"
                  placeholder="Nº de telefone Ex: 5900000"
                />
                <ErrorMessage class="errorMessage" name="telefone" />
              </div>
            </div>
            <div class="col-md-12" id="divloco">
              <Field
                :rules="validateText"
                type="text"
                class="form-control"
                name="assunto"
                id="assunto"
                v-model="assunto"
                placeholder="Assunto"
              />
              <ErrorMessage class="errorMessage" name="assunto" />
            </div>
            <div class="col-md-12" id="divloco">
              <Field
                :rules="validateText"
                type="text"
                as="textarea"
                class="form-control"
                name="duvida"
                rows="5"
                id="duvida"
                v-model="duvida"
                placeholder="Qual a sua dúvida ..."
              />
              <ErrorMessage class="errorMessage" name="duvida" />
            </div>
 
            <div class="col-md-12" id="divsave">
              <button
                @click="submitForm"
                id="buttonsave"
                class="btn btn-primary"
                type="submit"
              >
              
                <IconAwe class="icon-color" icon="envelope" /> Enviar Mensagem
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
        <div class="col-md-12"><br /></div>
        <div>
          <ContatoMaps />
        </div>
      </div>
    </div>
    <br />
  </section>
  <!-- End Contact Section -->
</template>

<script>
import ContatoMaps from "./ContatoMaps.vue";
import { Form, Field, ErrorMessage } from "vee-validate";
import { API_ENDPOINT } from "../main.js";
import axios from "axios";
export default {
  name: "ContatoCnpd",
  components: {
    Form,
    Field,
    ErrorMessage,
    ContatoMaps,
  },
  data() {
    return { 
        nome: "",
        email: "",
        telefone: "",
        assunto: "",
        duvida: "",
        morada: "",
        showModal: false,
        ErrorModal: false,
    };
  },

  methods: {
    async onSubmit(/*values*/) {
      const datas = {
        nome: this.nome,
        morada: this.morada,
        email: this.email,
        assunto: this.assunto,
        duvida: this.duvida,
        telefone: this.telefone,
      };

       //SUBMIT FORM WITH AXIOS
    try { 
      await axios.post(`${API_ENDPOINT}/api/contatos/store`, datas, { 
      
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
  },
  mounted() {
    window.scrollTo(0, 0); // Rola para o topo da página quando a página é carregada
  },
}; 
 
  
 
</script>

<style scoped>

 
/*--------------------------------------------------------------
# Contact
--------------------------------------------------------------*/
#divg {
  font-family: "Times New Roman", Times, serif;
  padding: 10px; /*
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
#contact {
  padding-top: 50px;
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
.contact .info {
  width: 100%;
  background: #fff;
}
.contact .info i {
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
.contact .info h4 {
  padding: 0 0 0 60px;
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 5px;
  color: #493c3e;
}
.contact .info p {
  padding: 0 0 0 60px;
  margin-bottom: 0;
  font-size: 14px;
  color: #000;
}
.contact .info .email,
.contact .info .phone {
  margin-top: 40px;
}
.contact .info .email:hover i,
.contact .info .address:hover i,
.contact .info .phone:hover i {
  color: #fff;
}
.contact .php-email-form {
  width: 100%;
  background: #fff;
}
.contact .php-email-form .form-group {
  padding-bottom: 8px;
}
.contact .php-email-form .error-message {
  display: none;
  color: #fff;
  background: #ed3c0d;
  text-align: left;
  padding: 15px;
  font-weight: 600;
}
.contact .php-email-form .error-message br + br {
  margin-top: 25px;
}
.contact .php-email-form .sent-message {
  display: none;
  color: #fff;
  background: #18d26e;
  text-align: center;
  padding: 15px;
  font-weight: 600;
}
.contact .php-email-form .loading {
  display: none;
  background: #fff;
  text-align: center;
  padding: 15px;
}
.contact .php-email-form .loading:before {
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
.contact .php-email-form input,
.contact .php-email-form textarea {
  border-radius: 0;
  box-shadow: none;
  font-size: 14px;
}
.contact .php-email-form input:focus,
.contact .php-email-form textarea:focus {
  border-color: #030b1c;
}
.contact .php-email-form input {
  height: 44px;
}
.contact .php-email-form textarea {
  padding: 10px 12px;
}
.contact .php-email-form button[type="submit"] {
  background: #bd9a13;
  border: 0;
  padding: 10px 28px;
  color: #000;
  font-weight: bold;
  transition: 0.4s;
  border-radius: 50px;
}
.contact .php-email-form button[type="submit"]:hover {
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
