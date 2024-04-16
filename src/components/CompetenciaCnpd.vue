<template>
  <section id="competencias" class="competencias">
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
          <router-link style="text-decoration: none" to="/competencias">
            <b>Competências</b>
          </router-link>
        </h5>
      </div>
      <div class="section-title"> 
         <div class="section-title">  
               <h2>Competências da <span>CNPD</span></h2>  
        </div>
        <p>
          Nos termos do n.º 1 do artigo 10.º da Lei n.º 42/VIII/2013, de 17 de
          setembro, compete à CNPD:
        </p>
      </div>

      <div class="row content">
        <div class="col-lg-6">
          <ul>
            <li>
              <IconAwe class="icon-color" icon="check-double" /> Autorizar ou
              registar, consoante os casos, os tratamentos de dados pessoais;
            </li>
            <li>
              <IconAwe class="icon-color" icon="check-double" /> Autorizar
              excepcionalmente a utilização de dados pessoais para ﬁnalidades
              não determinantes da recolha, com respeito pelos princípios
              deﬁnidos na lei;
            </li>
            <li>
              <IconAwe class="icon-color" icon="check-double" /> Autorizar, nos
              casos previstos na lei, a interconexão de tratamentos
              automatizados de dados pessoais;
            </li>
            <li>
              <IconAwe class="icon-color" icon="check-double" /> Autorizar a
              transferência de dados pessoais nos casos previstos na lei;
            </li>
            <li>
              <IconAwe class="icon-color" icon="check-double" /> Fixar o tempo
              da conservação dos dados pessoais em função da ﬁnalidade, podendo
              emitir directivas para determinados sectores de actividade;
            </li>
            <li>
              <IconAwe class="icon-color" icon="check-double" /> Autorizar
              excepcionalmente a utilização de dados pessoais para ﬁnalidades
              não determinantes da recolha, com respeito pelos princípios
              deﬁnidos na lei;
            </li>
            <li>
              <IconAwe class="icon-color" icon="check-double" /> Fazer assegurar
              o direito de acesso à informação, bem como do exercício do direito
              de rectiﬁcação e actualização;
            </li>
            <li>
              <IconAwe class="icon-color" icon="check-double" /> Autorizar a
              ﬁxação de custos ou de periodicidade para o exercício do direi to
              de acesso, bem como ﬁxar os prazos máximos de cumprimento, em cada
              sector de actividade, das obrigações que, nos termos da lei,
              incumbem aos responsáveis pelo tratamento de dados pessoais;
            </li>
            <li>
              <IconAwe class="icon-color" icon="check-double" />Autorizar a
              contratação do pessoal, transferências, requisições e
              destacamentos;
            </li>
          </ul>
        </div>
        <div class="col-lg-6 pt-4 pt-lg-0">
          <ul>
            <li>
              <IconAwe class="icon-color" icon="check-double" /> Dar seguimento
              ao pedido efectuado por qualquer pessoa, ou por associação que a
              represente, para proteção dos seus direitos e liberdades no que
              diz respeito ao tratamento de dados pessoais e informá-la do
              resultado;
            </li>
            <li>
              <IconAwe class="icon-color" icon="check-double" /> Efectuar, a
              pedido de qualquer pessoa, a veriﬁcação de licitude de um
              tratamento de dados, sempre que esse tratamento esteja sujeito a
              restrições de acesso ou de informação, e informá-la da realização
              da veriﬁcação;
            </li>
            <li>
              <IconAwe class="icon-color" icon="check-double" /> Apreciar as
              reclamações, queixas ou petições dos particulares;
            </li>
            <li>
              <IconAwe class="icon-color" icon="check-double" /> Dispensar a
              execução de medidas de segurança, nos termos previstos na lei,
              podendo emitir directivas para determinados sectores de
              actividade;
            </li>
            <li>
              <IconAwe class="icon-color" icon="check-double" /> Assegurar a
              representação de Cabo Verde junto de instâncias internacionais no
              âmbito das suas competências;
            </li>
            <li>
              <IconAwe class="icon-color" icon="check-double" /> Aplicar coimas;
            </li>
            <li>
              <IconAwe class="icon-color" icon="check-double" /> Promover e
              apreciar códigos de conduta;
            </li>
            <li>
              <IconAwe class="icon-color" icon="check-double" /> Promover a
              divulgação e esclarecimento dos direitos relativos à proteção de
              dados e dar publicidade periódica à sua actividade, nomeadamente
              através da publicação de um relatório anual;
            </li>
            <li>
              <IconAwe class="icon-color" icon="check-double" />Autorizar a
              contratação do pessoal, transferências, requisições e
              destacamentos;
            </li>
            <li>
              <IconAwe class="icon-color" icon="check-double" /> Exercer outras
              competências previstas na lei.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <!-- End competencias Section -->
</template>

<script>
export default {
  name: "CompetenciaCnpd",
  mounted() {
    window.scrollTo(0, 0); // Rola para o topo da página quando a página é carregada
  },
  components: {},
};
</script>

<style scoped>
#competencias{

  padding-top: 50px;
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
  margin-top: 15px;
  background: #BD9A13;
  color: black;
  display: inline-block;
  text-transform: uppercase;
  border-radius: 50px;
}

.section-title h3 span {
  color: #013365;
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

.competencias .content h3 {
  font-weight: 600;
  font-size: 26px;

  padding-top: 100px;
}
.competencias .content ul {
  list-style: none;
  padding: 0;
}
.competencias .content ul li {
  padding-left: 28px;
  position: relative;
  text-align: justify;
}
.competencias .content ul li + li {
  margin-top: 10px;
}
.competencias .content ul .icon-color {
  position: absolute;
  left: 0;
  top: 2px;
  font-size: 20px;
  color: #11295f;
  line-height: 1;
}
.competencias .content p:last-child {
  margin-bottom: 0;
}
.competencias .content .btn-learn-more {
  font-family: "Nunito", sans-serif;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 12px 32px;
  border-radius: 50px;
  transition: 0.3s;
  line-height: 1;
  color: #e43c5c;
  -webkit-animation-delay: 0.8s;
  animation-delay: 0.8s;
  margin-top: 6px;
  border: 2px solid #e43c5c;
}
.competencias .content .btn-learn-more:hover {
  background: #e43c5c;
  color: #fff;
  text-decoration: none;
}
</style>
