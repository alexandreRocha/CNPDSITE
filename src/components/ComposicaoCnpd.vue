<template>
  <!-- ======= composicao Section ======= -->
  <section id="composicao" class="composicao">
    <div class="container">
      <div class="section-bredcumbs">
        <h5>
          Onde estou?
          <router-link style="text-decoration: none" to="/">
            <b>Página Inicial</b>
          </router-link>
          <b> > </b>
          <router-link style="text-decoration: none" to="#">
            <b>CNPD</b>
          </router-link>
          <b> > </b>
          <router-link style="text-decoration: none" to="/composicao">
            <b>Composição</b>
          </router-link>
        </h5>
      </div>
      <div class="section-title">
        <h2>COMPOSIÇÃO</h2>
        <h3></h3>
      </div>
      <p id="pmembros">
        A CNPD é composta por três personalidades de reconhecida competência e
        integridade moral, eleitos pela Assembleia Nacional, por maioria de dois
        terços dos deputados presentes, desde que superior à maioria absoluta
        dos Deputados em efectividade de funções. Conta com um secretário,
        habilitado com licenciatura e de reconhecida competência para o
        desempenho do cargo, e ainda pessoal de apoio administrativo e técnico.
      </p>
      <p><br /></p>
      <div class="row">
        <div class="col-lg-4">
          <div class="member">
            <div class="member-img">
              <img src="img/pre.png" class="img-fluid" alt="" />
            </div>
            <div class="member-info">
              <h4>Faustino Varela Monteiro</h4>
              <span>Presidente</span>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="member">
            <div class="member-img">
              <img src="img/membros.png" class="img-fluid" alt="" />
            </div>
            <div class="member-info">
              <h4>José Maria de Pina</h4>
              <span>Membro</span>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="member">
            <div class="member-img">
              <img src="img/membros.png" class="img-fluid" alt="" />
            </div>
            <div class="member-info">
              <h4>Djamilson Pinto</h4>
              <span>Membro</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End composicao Section -->
</template>

<script>
export default {
  name: "ComposicaoCnpd",
  mounted() {
    window.scrollTo(0, 0); // Rola para o topo da página quando a página é carregada
  },
};
</script>

<style scoped>
#pmembros {
  text-align: justify;
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

/*--------------------------------------------------------------
# composicao
--------------------------------------------------------------*/
.composicao {
  background: #fff;
  padding: 60px 0;
  padding-top: 100px;
}
.composicao .member {
  margin-bottom: 20px;
  overflow: hidden;
  text-align: center;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
}
.composicao .member .member-img {
  position: relative;
  overflow: hidden;
  width: 50%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.composicao .member .social {
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 40px;
  opacity: 0;
  transition: ease-in-out 0.3s;
  background: rgba(255, 255, 255, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
}
.composicao .member .social a {
  transition: color 0.3s;
  color: #493c3e;
  margin: 0 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.composicao .member .social a i {
  line-height: 0;
}
.composicao .member .social a:hover {
  color: #e43c5c;
}
.composicao .member .social i {
  font-size: 18px;
  margin: 0 2px;
}
.composicao .member .member-info {
  padding: 25px 15px;
}
.composicao .member .member-info h4 {
  font-weight: 700;
  margin-bottom: 5px;
  font-size: 18px;
  color: #013365;
}
.composicao .member .member-info span {
  display: block;
  font-size: 13px;
  font-weight: 400;
  color: #aaaaaa;
}
.composicao .member .member-info p {
  font-style: italic;
  font-size: 14px;
  line-height: 26px;
  color: #777777;
}
.composicao .member:hover .social {
  opacity: 1;
}
</style>
