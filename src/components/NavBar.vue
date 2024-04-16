<template>
  <div>
    <!-- ======= Header ======= <router-link to="/" id=""> <img :src="logo" :alt="alt" id="img"></router-link>-->
    <header id="header" class="fixed-top">
      <div class="container d-flex align-items-center justify-content-between">
        <!--  <h1 class="logo"><a href="index.html">CNPD</a></h1>
            Uncomment below if you prefer to use an image logo -->
        <!-- <a href="index.html" class="logo">
            <img src="/img/logoicon.svg" alt="" class="img-fluid">
            </a>
            
      -->
        <router-link to="/" class="logo">
          <img :src="logo" :alt="alt" class="img-fluid"
        /></router-link>

        <nav id="navbar" class="navbar">
          <ul>
            <li><router-link to="/"> Home </router-link></li>
            <li class="dropdown">
              <router-link to="#"> CNPD</router-link>
              <ul class="ulid">
                <li>
                  <router-link to="/boasvindas"> Boas Vindas </router-link>
                </li>
                <li>
                  <router-link to="/competencias"> Competências </router-link>
                </li>
                <li>
                  <router-link to="/composicao"> Composição </router-link>
                </li>
                <li><router-link to="/historia"> História </router-link></li>
              </ul>
            </li>
            <li class="dropdown"> 
              <router-link to="#"> Decisões</router-link>
              <ul class="ulid">
                <li>
                  <router-link to="/autorizacoes"> Autorizações </router-link>
                </li>
                <li><router-link to="/registos"> Registos </router-link></li>
                <!--
                <li><router-link to="/pareceres"> Pareceres </router-link></li>-->
                <li>
                  <router-link to="/deliberacoes"> Deliberações </router-link>
                </li>
                <li><router-link to="/diretivas"> Diretivas </router-link></li>
              </ul>
            </li>
            <li class="dropdown">
              <router-link to="#"> Canal do Cidadão</router-link> 
              <ul class="ulid">
                <li><router-link to="/direitos"> Direitos dos Titulares </router-link></li>
                <li><router-link to="/conselhospraticos"> Conselhos Práticos </router-link></li>
                <li><router-link to="/faq"> Perguntas Frequentes </router-link></li> 
                <li><router-link to="/consultarp"> Consultar Processo </router-link></li> 
              </ul>
            </li>
            <li class="dropdown">
              <router-link to="#"> Formulários</router-link>  
              <ul class="ulid">
                <li>
                  <router-link to="/formularios"> Notificações </router-link>
                </li>
                <li><router-link to="/taxas"> Taxas </router-link></li>
                <li>
                  <router-link to="/isencoes">
                    Isenções de Notificações
                  </router-link>
                </li>
                <li>
                  <router-link to="/obrigacoes">
                    Obrigações dos Responsáveis
                  </router-link>
                </li> 
                <li><router-link to="/queixa"> Apresentar Queixa </router-link></li> 
              </ul>
            </li>
            
            <li class="dropdown">
              <router-link to="#"> Relações Públicas</router-link>  
              <ul class="ulid">
                <li>
                  <router-link to="/noticias"> Notícias </router-link>
                </li>
                <li>
                  <router-link to="/comunicados">  Comunicados </router-link>
                </li>
              </ul>
            </li>
            <li><router-link to="/legislacao"> Legislação </router-link></li>
            <li class="dropdown">
              <router-link to="#"> Publicações</router-link>  
              <ul class="ulid">
                <li>
                  <router-link to="/panfletos"> Panfletos </router-link>
                </li>
                <li>
                  <router-link to="/videos"> Vídeos Promocionais </router-link>
                </li>
                <li>
                  <router-link to="/relatorios"> Relatórios Atividades </router-link>
                </li>
                <li>
                  <router-link to="/planos"> Plano de Atividades </router-link>
                </li>
              </ul>
            </li>
            <li><router-link to="/contato"> Contato </router-link></li>
          </ul>
          <div class="icon">
            <IconAwe
              @click="toggleMobileNav()"
              v-show="mobile"
              class="icon-color"
              icon="bars"
            />
          </div>
        </nav>
        <!-- .navbar -->
      </div>
      <div class="bt1int" v-show="mobileNav" id="b1" style="">
        <ul id="ulmobile">
          <div class="col-lg-4 col-md-6 portfolio-item filter-app" style="">
            <li>
              <router-link to="/">
                <IconAwe class="iconnavbarmob" icon="house" />
                <span id="menuiten">Home</span>
              </router-link>
            </li>
            <li class="" @click="showcnpditens()" v-show="cnpd">
              <router-link to="#">
                <IconAwe class="iconnavbarmob" icon="building-columns" />
                <span id="menuiten">CNPD</span>
              </router-link>
              <div v-show="showcnpd" id="showcnpd">
                <li>
                  <router-link to="/boasvindas"> Boas Vindas </router-link>
                </li>
                <li>
                  <router-link to="/competencias"> Competências </router-link>
                </li>
                <li>
                  <router-link to="/composicao"> Composição </router-link>
                </li>
                <li><router-link to="/historia"> História </router-link></li>
              </div>
            </li>

            <li @click="showdecisoesitens()" v-show="decisoes">
              <router-link to="#">
                <IconAwe class="iconnavbarmob" icon="folder" />
                <span id="menuiten">Decisões</span></router-link
              >
              <div v-show="showdecisoes" id="showdecisoes">
                <li>
                  <router-link to="/autorizacoes"> Autorizações </router-link>
                </li>
                <li><router-link to="/registos"> Registos </router-link></li>
               <!--<li><router-link to="/pareceres"> Pareceres </router-link></li>--> 
                <li>
                  <router-link to="/deliberacoes"> Deliberações </router-link>
                </li>
                <li><router-link to="/diretivas"> Diretivas </router-link></li>
              </div>
            </li>
            <li @click="showcanalcidadaoitens()" v-show="canalcidadao">
              <router-link to="#">
                <IconAwe class="iconnavbarmob" icon="people-group" />
                <span id="menuiten1">Canal do Cidadão</span></router-link
              >
              <div v-show="showcanalcidadao" id="showcanalcidadao">
               <li><router-link to="/direitos"> Direitos dos Titulares </router-link></li>
                <li><router-link to="/conselhospraticos"> Conselhos Práticos </router-link></li>
                <li><router-link to="/faq"> Perguntas Frequentes </router-link></li> 
                <li><router-link to="/consultarp"> Consultar Processo </router-link></li> 
              </div>
            </li>

            <li @click="showformularioitens()" v-show="formulario">
              <router-link to="#">
                <IconAwe class="iconnavbarmob" icon="list-check" />
                <span id="menuiten">Formulários</span></router-link
              >
              <div v-show="showformulario" id="showformulario">
                <li>
                  <router-link to="/formularios"> Notificações </router-link>
                </li>
                <li><router-link to="/taxas"> Taxas </router-link></li>
                <li>
                  <router-link to="/isencoes">
                    Isenções de Notificações
                  </router-link>
                </li>
                <li>
                  <router-link to="/obrigacoes">
                    Obrigações dos Responsáveis
                  </router-link>
                </li>

                <li><router-link to="/queixa"> Apresentar Queixa </router-link></li> 
              </div>
            </li>
             
            <li @click="showrelacoespublicasitens()" v-show="relacoes">
              <router-link to="#">
                <IconAwe class="iconnavbarmob" icon="newspaper" />
                <span id="menuiten">Relações Públicas</span></router-link
              >
              <div v-show="showrelacoespublicas" id="showrelacoespublicas">
                 <li><router-link to="/noticias"> Notícias </router-link></li>
                  <li><router-link to="/comunicados"> Comunicados </router-link></li> 
              </div>
            </li>
            <li>
              <router-link to="/legislacao">
                <IconAwe class="iconnavbarmob" icon="house" />
                <span id="menuiten">Legislação</span>
              </router-link>
            </li>
            <li @click="showpublicacoesitens()" v-show="publicacoes">
              <router-link to="#">
                <IconAwe class="iconnavbarmob" icon="list-check" />
                <span id="menuiten">Publicações</span></router-link
              >
              <div v-show="showpublicacoes" id="showpublicacoes">
                <li>
                  <router-link to="/panfletos"> Panfletos </router-link>
                </li>
                <li><router-link to="/videos"> Vídeos </router-link></li>
                <li>
                  <router-link to="/relatorios"> Relatórios Atividades </router-link>
                </li>
                <li>
                  <router-link to="/planos"> Plano de Atividades </router-link>
                </li>
              </div>
            </li>
            
            
            <li>
              <router-link to="/contato">
                <IconAwe class="iconnavbarmob" icon="house" />
                <span id="menuiten">Contato</span>
              </router-link>
            </li>
          </div>
        </ul>
      </div>
    </header>
    <!-- End Header  -->
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: ["logo", "alt"],
  data() {
    return {
      scrolledNav: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
      cnpd: null,
      showcnpd: null,
      decisoes: null,
      showdecisoes: null,
      canalcidadao: null,
      showcanalcidadao: null,
      formulario: null,
      publicacoes: null,
      showformulario: null,
      showpublicacoes: null,
      relacoes:null,
      showrelacoespublicas:null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    showcnpditens() {
      this.showcnpd = !this.showcnpd;
    },
    showdecisoesitens() {
      this.showdecisoes = !this.showdecisoes;
    },
    showcanalcidadaoitens() {
      this.showcanalcidadao = !this.showcanalcidadao;
    },
    showformularioitens() {
      this.showformulario = !this.showformulario;
    },
    showpublicacoesitens() {
      this.showpublicacoes = !this.showpublicacoes;
    },
    showrelacoespublicasitens() {
      this.showrelacoespublicas = !this.showrelacoespublicas;
    },
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
        this.cnpd = true;
        this.decisoes = true;
        this.canalcidadao = true;
        this.formulario = true;
        this.publicacoes = true;
        this.relacoes = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
  },
};
</script>

<style scoped>
@media screen and (max-width: 600px) {
  ul {
    background-color: #0e214b;
    color: #fff;
    font-size: 12px;
    list-style: none;
  }

  .iconnavbarmob {
    color: #bd9a13;
    font-size: 15px;
    margin: 0 auto;
  }

  .divmenu {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  #ulmobile {
    padding: 25px;
    color: white;
  }
  #showcnpd {
    padding-left: 0px;
    background-color: #0e214b;
    border-radius: 2px;
    color: white;
  }
  #showdecisoes {
    padding-left: 10px;
    background-color: #0e214b;
    border-radius: 2px;
    color: white;
  }
  #showcanalcidadao {
    padding-left: 10px;
    background-color: #0e214b;
    border-radius: 2px;
    color: white;
  }

  #showformulario {
    padding-left: 10px;
    background-color: #0e214b;
    border-radius: 2px;
    color: white;
  }
  #showpublicacoes,#showrelacoespublicas {
    padding-left: 10px;
    background-color: #0e214b;
    border-radius: 2px;
    color: white;
  }
  li {
    padding: 10px;
  }
  #menuiten {
    margin-left: 25px;
  }
  #menuiten1 {
    margin-left: 20px;
  }
}
.icon-color {
  cursor: pointer;
  font-size: 24px;
  transform: 0.8s ease all;
  color: white;
}
.icon-active {
  transform: rotate(180deg);
}
#header {
  font-family: "Times New Roman", Times, serif;
  font-size: 48px;
  background-color: #061536;
}

.navbar-toggler {
  background-color: #fff;
}

/*--------------------------------------------------------------
# General
--------------------------------------------------------------*/
body {
  font-family: "Times New Roman", Times, serif;
  color: #444444;
}

a {
  color: #fff;
  text-decoration: none;
}

a:hover {
  color: #bd9a13;
  text-decoration: none;
}

/*--------------------------------------------------------------
# Header
--------------------------------------------------------------*/
#header {
  transition: all 0.5s;
  z-index: 997;
  padding: 20px 0;
}
#header .logo {
  font-size: 30px;
  margin: 0;
  padding: 0;
  line-height: 1;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
}
#header .logo a {
  color: #fff;
}
#header .logo img {
  max-height: 45px;
}
#header.header-scrolled,
#header.header-inner-pages {
  background: rgba(0, 0, 0, 0.9);
  padding: 12px 0;
}

#img {
  width: 100%;
  height: 10px;
}
/*--------------------------------------------------------------
# Navigation Menu
--------------------------------------------------------------*/
/**
* Desktop Navigation 
*/
.navbar {
  padding: 0;
}
.navbar ul {
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  align-items: center;
}
.navbar li {
  position: relative;
}
.navbar > ul > li {
  white-space: nowrap;
  padding: 10px 0 10px 24px;
}
.navbar a,
.navbar a:focus {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Times New Roman", Times, serif; 
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  padding: 0 4px;
  white-space: nowrap;
  transition: 0.3s;
  letter-spacing: 0.4px;
  position: relative;
}
.navbar a i,
.navbar a:focus i {
  font-size: 12px;
  line-height: 0;
  margin-left: 5px;
}
.navbar > ul > li > a:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: -6px;
  left: 0;
  background-color: #bd9a13;
  visibility: hidden;
  transform: scaleX(0);
  transition: all 0.3s ease-in-out 0s;
}
.navbar a:hover:before,
.navbar li:hover > a:before,
.navbar .active:before {
  visibility: visible;
  transform: scaleX(1);
}
.navbar a:hover,
.navbar .active,
.navbar .active:focus,
.navbar li:hover > a {
  color: #cfac0b;
}
.navbar .dropdown ul {
  display: block;
  position: absolute;
  left: 24px;
  top: calc(100% + 30px);
  margin: 0;
  padding: 10px 0;
  z-index: 99;
  opacity: 0;
  visibility: hidden;
  background: #013370;
  color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #cfac0b; /*cor de sombra de dropdown ul*/
  transition: 0.3s;
}
.navbar .dropdown ul li {
  min-width: 200px;
}
.navbar .dropdown ul a {
  padding: 10px 20px;
  font-size: 14px;
  text-transform: none;
  color: #fff; /*COR DE LI NO UL DROPDOWN */
}
.navbar .dropdown ul a i {
  font-size: 12px;
}
.navbar .dropdown ul a:hover,
.navbar .dropdown ul .active:hover,
.navbar .dropdown ul li:hover > a {
  color: #bd9a13;
}
.navbar .dropdown:hover > ul {
  opacity: 1;
  top: 100%;
  visibility: visible;
}
.navbar .dropdown .dropdown ul {
  top: 0;
  left: calc(100% - 30px);
  visibility: hidden;
}
.navbar .dropdown .dropdown:hover > ul {
  opacity: 1;
  top: 0;
  left: 100%;
  visibility: visible;
}
@media (max-width: 1024px) {
  .navbar .dropdown .dropdown ul {
    left: -90%;
  }
  .navbar .dropdown .dropdown:hover > ul {
    left: -100%;
  }
}

/**
* Mobile Navigation 
*/

@media screen and (min-width: 600px) and (max-width: 2024px) {
  .icon-color {
    display: none;
    color: #fff;
  } /* show it on small screens */
}

@media screen and (min-width: 0px) and (max-width: 600px) {
  .icon-color {
    display: block;
  } /* hide it elsewhere */
}

.mobile-nav-toggle {
  color: #fff;
  font-size: 28px;
  cursor: pointer;
  display: none;
  line-height: 0;
  transition: 0.5s;
}

@media (max-width: 600px) {
  .mobile-nav-toggle {
    display: block;
  }

  .navbar ul {
    display: none;
  }
}
.navbar-mobile {
  position: fixed;
  overflow: hidden;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(45, 37, 38, 0.9);
  transition: 0.3s;
  z-index: 999;
}
.navbar-mobile .mobile-nav-toggle {
  position: absolute;
  top: 15px;
  right: 15px;
}
.navbar-mobile ul {
  display: block;
  position: absolute;
  top: 55px;
  right: 15px;
  bottom: 15px;
  left: 15px;
  padding: 10px 0;
  background-color: #fff;
  overflow-y: auto;
  transition: 0.3s;
}
.navbar-mobile > ul > li {
  padding: 0;
}
.navbar-mobile a:hover:before,
.navbar-mobile li:hover > a:before,
.navbar-mobile .active:before {
  visibility: hidden;
}
.navbar-mobile a,
.navbar-mobile a:focus {
  padding: 10px 20px;
  font-size: 15px;
  color: #493c3e;
}
.navbar-mobile a:hover,
.navbar-mobile .active,
.navbar-mobile li:hover > a {
  color: #bd9a13;
}
.navbar-mobile .getstarted,
.navbar-mobile .getstarted:focus {
  margin: 15px;
}
.navbar-mobile .dropdown ul {
  position: static;
  display: none;
  margin: 10px 20px;
  padding: 10px 0;
  z-index: 99;
  opacity: 1;
  visibility: visible;
  background: #fff;
  box-shadow: 0px 0px 5px rgba(127, 137, 161, 0.25);
}
.navbar-mobile .dropdown ul li {
  min-width: 200px;
}
.navbar-mobile .dropdown ul a {
  padding: 10px 20px;
}
.navbar-mobile .dropdown ul a i {
  font-size: 12px;
}
.navbar-mobile .dropdown ul a:hover,
.navbar-mobile .dropdown ul .active:hover,
.navbar-mobile .dropdown ul li:hover > a {
  color: #bd9a13;
}
.navbar-mobile .dropdown > .dropdown-active {
  display: block;
}

/*--------------------------------------------------------------
# Sections General
--------------------------------------------------------------*/
section {
  padding: 60px 0;
  overflow: hidden;
}

.section-bg {
  background-color: white;
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
  background: #fdeff2;
  color: #bd9a13;
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
  color: #bd9a13;
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

/*--------------------------------------------------------------
# Footer
--------------------------------------------------------------*/
#footer {
  color: #444444;
  font-size: 14px;
  background: #f6f4f4;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
}
#footer .footer-top {
  padding: 60px 0 30px 0;
  background: #fff;
}
#footer .footer-top .footer-contact {
  margin-bottom: 30px;
}
#footer .footer-top .footer-contact h4 {
  font-size: 22px;
  margin: 0 0 30px 0;
  padding: 2px 0 2px 0;
  line-height: 1;
  font-weight: 700;
}
#footer .footer-top .footer-contact p {
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 0;
  font-family: "Times New Roman", Times, serif;
  color: #777777;
}
#footer .footer-top h4 {
  font-size: 16px;
  font-weight: bold;
  color: #444444;
  position: relative;
  padding-bottom: 12px;
}
#footer .footer-top .footer-links {
  margin-bottom: 30px;
}
#footer .footer-top .footer-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
#footer .footer-top .footer-links ul i {
  padding-right: 2px;
  color: #ea6981;
  font-size: 18px;
  line-height: 1;
}
#footer .footer-top .footer-links ul li {
  padding: 10px 0;
  display: flex;
  align-items: center;
}
#footer .footer-top .footer-links ul li:first-child {
  padding-top: 0;
}
#footer .footer-top .footer-links ul a {
  color: #777777;
  transition: 0.3s;
  display: inline-block;
  line-height: 1;
}
#footer .footer-top .footer-links ul a:hover {
  text-decoration: none;
  color: #bd9a13;
}
#footer .footer-newsletter {
  font-size: 15px;
}
#footer .footer-newsletter h4 {
  font-size: 16px;
  font-weight: bold;
  color: #444444;
  position: relative;
  padding-bottom: 12px;
}
#footer .footer-newsletter form {
  margin-top: 30px;
  background: #fff;
  padding: 6px 10px;
  position: relative;
  border-radius: 50px;
  text-align: left;
  border: 1px solid #f7c2cc;
}
#footer .footer-newsletter form input[type="email"] {
  border: 0;
  padding: 4px 8px;
  width: calc(100% - 100px);
}
#footer .footer-newsletter form input[type="submit"] {
  position: absolute;
  top: 0;
  right: -2px;
  bottom: 0;
  border: 0;
  background: none;
  font-size: 15px;
  padding: 0 22px;
  background: #bd9a13;
  color: #bd9a13;
  transition: 0.3s;
  border-radius: 50px;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
}
#footer .footer-newsletter form input[type="submit"]:hover {
  background: #d01d3f;
}
#footer .credits {
  padding-top: 5px;
  font-size: 13px;
  color: #444444;
}
#footer .social-links a {
  font-size: 18px;
  display: inline-block;
  background: #bd9a13;
  color: #fff;
  line-height: 1;
  padding: 8px 0;
  margin-right: 4px;
  border-radius: 50%;
  text-align: center;
  width: 36px;
  height: 36px;
  transition: 0.3s;
}
#footer .social-links a:hover {
  background: #d01d3f;
  color: #fff;
  text-decoration: none;
}
</style>
