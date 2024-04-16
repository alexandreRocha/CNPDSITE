<template>
  <!-- ======= Team Section ======= -->
  <section id="team" class="team">
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
          <router-link style="text-decoration: none" to="/boasvindas">
            <b>Boas Vindas</b>
          </router-link>
        </h5>
      </div>
      <div class="section-title">
        <h2>BOAS VINDAS</h2>
      </div>
      <p class="pcente">
        “(…) AS PESSOAS NA SOCIDADE ATUAL VÃO CEDENDO PAULATINAMENTE A
        AUTODETERMINAÇAO INDIVIDUAL, ATÉ A UM PONTO CRÍTICO, DE ONDE NÃO EXISTE
        RETORNO, NEM A POSSIBILIDADE DE RECUPERAR A PRIVACY PERDIDA”.
      </p>
      <p class="pcenter">
        Scharr, Peter, apud Pinheiro, Alexandre Sousa, Privacy e Protecção de
        Dados pessoais: A Construção Dogmática do Direito à Identidade
        Informacional, AAFDL, 2015, pág. 67.
      </p>
      <br />
      <p id="boasvindas">
        <IconAwe class="icon-color" icon="check-double" />
        Numa era em que “os modernos meios informáticos conquistaram já de tal
        modo o nosso espaço de vida e moldam por forma intensa a experiência
        humana nos mais diversos sectores”, agrava-se as possibilidades de
        intromissão na vida privada através de tratamento de dados pessoais.
        Deste modo, exigem sistemas e meios eficazes de proteção das informações
        relativas à pessoa singular identificada ou identificável. Trata-se de
        garantir o exercício efetivo do direito à “autodeterminação
        informacional”.
      </p>
      <p id="boasvindas">
        <IconAwe class="icon-color" icon="check-double" />
        Em Cabo Verde, é sabido que muitos cidadãos não têm ainda ciência de que
        gozam deste direito.
      </p>
      <p id="boasvindas">
        <IconAwe class="icon-color" icon="check-double" />
        A Comissão Nacional de Protecção de Dados é uma entidade administrativa
        independente, que tem por missão controlar e fiscalizar o cumprimento
        das disposições legais e regulamentares em matéria de proteção de dados
        pessoais, em rigoroso respeito pelos direitos humanos e pelas liberdades
        e garantias consagradas na Constituição e na lei.
      </p>
      <p id="boasvindas">
        <IconAwe class="icon-color" icon="check-double" />
        Assim, este sítio da Comissão Nacional de Protecção de Dados pretende
        ser, por um lado, um meio de comunicação direto e acessível, e tanto
        quanto possível completo, sobre as suas funções e actividades e, por
        outro lado, um espaço de divulgação dos direitos dos cidadãos relativos
        à protecção de dados e o modo do seu exercício, bem assim disponibilizar
        aos cidadãos e às entidades instrumentos ágeis por forma a cumprirem às
        disposições legais e regulamentares em matéria de proteção de dados
        pessoais.
      </p>
      <p id="boasvindas">
        <IconAwe class="icon-color" icon="check-double" />
        Conhecendo e reconhecendo a audácia dos desafios, este sítio constitui
        um espaço aberto para Comissão Nacional de Protecção de Dados, que
        acolhe, com interesse, as sugestões e os contributos que entendam
        dirigir-lhe.
      </p>
      <p id="boasvindas">
        <IconAwe class="icon-color" icon="check-double" />
        A todos endereço as boas vindas ao sítio da Comissão Nacional de
        Protecção de Dados.
      </p>
      <br />
      <p class="pcente">
        O Presidente da Comissão Nacional de Protecção de Dados
      </p>
      <br />
      <p class="pcente">Faustino Varela Monteiro</p>
    </div>
  </section>
  <!-- End Team Section -->
</template>

<script>
export default {
  name: "BoasVindas",
  mounted() {
    window.scrollTo(0, 0); // Rola para o topo da página quando a página é carregada
  },
};
</script>

<style scoped>
#boasvindas {
  text-align: justify;
}
.pcente {
  text-align: center;
  font-weight: bold;
  margin-left: 10%;
  margin-right: 10%;
}
.pcenter {
  text-align: center;
  margin-left: 20%;
  margin-right: 20%;
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
@media (min-width: 1024px) {
  .section-title p {
    width: 50%;
  }
}

.team {
  background: #fff;
  padding-top: 100px;
}
</style>
