<template>
     <!-- ======= Services Section ======= -->
    <section id="services" class="services">
      <div class="container"> 
          <div class="section-title"> 
            <div class="section-title">
                <h2>CIDADÃOS</h2>  
            </div>
          </div>
           <div class="row">  
              <div class="col-md-4 col-lg-3 d-flex align-items-stretch mb-4 mb-lg-0">
                <router-link to="/conselhospraticos">
                  <div class="icon-box">
                    <div class="icon"><IconAwe class="icon-color" icon="signs-post" /></div> 
                    <h4 class="title">Conselhos Práticos </h4> 
                    <!--<p class="description">Consulte aqui os <router-link to="/conselhospraticos">  
                    <b id="linkqueixa">Conselhos Práticos</b> </router-link> recomendados pela CNPD</p>-->
                  </div>
                </router-link>
              </div>

              
                <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                  <router-link to="/direitos">
                    <div class="icon-box">
                      <div class="icon"><IconAwe class="icon-color" icon="gavel"/></div>
                      <h4 class="title">Direitos dos Titulares dos Dados</h4> 
                    </div>
                  </router-link>
                </div> 
             
              

              <div class="col-md-4 col-lg-3 d-flex align-items-stretch mb-4 mb-lg-0">
                <router-link to="/contato">
                  <div class="icon-box">
                    <div class="icon"><IconAwe class="icon-color" icon="info" /></div> 
                    <h4 class="title">Pedidos de informação</h4> 
                  </div>
                </router-link>
              </div> 
              <div class="col-md-4 col-lg-3 d-flex align-items-stretch mb-4 mb-lg-0">
                <router-link to="/queixa">
                  <div class="icon-box">
                    <div class="icon"><IconAwe class="icon-color" icon="fa-bullhorn" /></div> 
                    <h4 class="title">Apresentar uma Queixa</h4> 
                  </div>
                </router-link>
              </div> 
                
         </div>

         <div class="section-title"> 
          <div class="section-title">
               <h2>ORGANIZAÇÕES</h2>  
           </div>
        </div>

        <div class="row"> 

          <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <router-link to="/formularios">
              <div class="icon-box">
                <div class="icon"><IconAwe class="icon-color" icon="fa-clipboard-list"/></div>
                <h4 class="title">Formulários de Notificação</h4>
              <!--- <p class="description"><router-link to="/formularios">  <b id="linkqueixa">Formulários</b> </router-link>, 
                <router-link to="/taxas"> <b id="linkqueixa">Taxas</b>  </router-link>, <router-link to="/isencoes">  
                  <b id="linkqueixa">Isenções de Notificações</b> </router-link>
                e <router-link to="/obrigacoes">  <b id="linkqueixa">Obrigações do Responsável</b> </router-link></p>-->
              </div>
            </router-link>
          </div>
          <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <router-link to="/taxas">
              <div class="icon-box">
                <div class="icon"><IconAwe class="icon-color" icon="dollar-sign"/></div>
                <h4 class="title">Taxas & Pagamentos</h4> 
              </div>
            </router-link>
          </div>

          <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <router-link to="/obrigacoes">
              <div class="icon-box">
                <div class="icon"><IconAwe class="icon-color" icon="circle-exclamation"/></div>
                <h4 class="title">Obrigações do Responsável pelo Tratamento</h4> 
            </div>
            </router-link> 
          </div>

          <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <router-link to="/isencoes">
              <div class="icon-box">
                <div class="icon"><IconAwe class="icon-color" icon="check-double"/></div>
                <h4 class="title">Isenções de Notificações</h4> 
              </div>
            </router-link>
          </div>
        </div> 
 
      </div>
    </section><!-- End Services Section -->
</template>

<script>
export default {
    name:"ServiceCnpd"
    
}
</script>

<style scoped>
#linkqueixa{
  color: #BD9A13;
}
a {
  text-decoration: none;
  color: #374253;
}

a:hover{
  color: #BD9A13;
}


.section-title {
  color: #BD9A13;
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
  margin-top: 25px;
  background: #BD9A13;
  color: black;
  display: inline-block;
  text-transform: uppercase;
  border-radius: 50px;
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
.services {
  padding-bottom: 30px;
}
.services .icon-box {
  padding: 20px 30px;
  position: relative;
  overflow: hidden;
  background: #fff;
  box-shadow: 2px 0 35px 0 rgba(68, 88, 144, 0.12);
  transition: all 0.3s ease-in-out;
  border-radius: 8px;
  z-index: 1;
  width: 300px; /* Definindo uma largura fixa para os elementos */
  height: 150px; /* Definindo uma altura fixa para os elementos */
  text-align: center;
}
.services .icon-box::hover {
  content: "";
  position: absolute;
  background: #BD9A13; 
  color: #BD9A13;
  right: 0; 
  left: 0;
  bottom: 0;
  top: 100%;
  transition: all 0.4s;
  z-index: -1;
} 

.services .icon {
  margin-bottom: 35px;
}
.services .icon .icon-color {
  font-size: 35px;
  line-height: 1;
  color:#013365;
  transition: all 0.9s ease-in-out;
}
.services .title {
  font-weight: 700;
  margin-bottom: 15px;
  font-size: 18px;
}
.services .title a {
  color: #111;
}
.services .description {
  font-size: 15px;
  line-height: 28px;
  margin-bottom: 0;
} 


    
</style>