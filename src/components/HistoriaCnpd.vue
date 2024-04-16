<template>
  <!-- ======= historia Section ======= -->
  <section id="historia" class="historia">
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
          <router-link style="text-decoration: none" to="/historia">
            <b>História da CNPD Vindas</b>
          </router-link>
        </h5>
      </div>
      <div class="section-title">
        <h2>HISTÓRIA DA CNPD</h2>
      </div>
      <p id="phistory">
        <IconAwe class="icon-color" icon="check-double" />
        A Comissão Nacional de Protecção de Dados (CNPD) é uma entidade
        administrativa independente, com sede na Praia, que funciona junto da
        Assembleia Nacional, dotada de autonomia administrativa, financeira e
        patrimonial.
      </p>
      <p id="phistory">
        <IconAwe class="icon-color" icon="check-double" />
        A CNPD foi criada pela Lei n.º 41/VIII/2013, de 17 de setembro, que
        alterou a lei n.º 133/V/2001, de 22 de janeiro, tendo a sua organização,
        composição, competência e o modo de funcionamento sido aprovado pela Lei
        n.º 42/VIII/2013, de 17 de setembro.
      </p>
      <p id="phistory">
        <IconAwe class="icon-color" icon="check-double" />
        Cabo Verde, ao criar a CNPD, deu um passo significativo para o controlo
        e fiscalização da utilização de dados pessoais informatizados,
        corporizando direitos fundamentais consagrados na Constituição e na lei.
      </p>
      <p id="phistory">
        <IconAwe class="icon-color" icon="check-double" />
        A CNPD tem por missão controlar e fiscalizar o cumprimento das
        disposições legais e regulamentares em matéria de proteção de dados
        pessoais, em rigoroso respeito pelos direitos humanos e pelas liberdades
        e garantias consagradas na Constituição e na lei; E dispõe de poderes de
        investigação e inquérito, de autoridade e de emitir pareceres prévios ao
        tratamento de dados pessoais.
      </p>
      <p id="phistory">
        <IconAwe class="icon-color" icon="check-double" />
        A atuação da CNPD é orientada pelos seguintes valores: independência,
        integridade, competência, responsabilidade, lisura, objetividade,
        transparência, autonomia, respeito, economia, cortesia e exemplaridade,
        entre outros.
      </p>
      <p id="phistory">
        <IconAwe class="icon-color" icon="check-double" />
        Os membros da CNPD tomaram posse no dia 24 de abril de 2015, por mandato
        de seis anos, devendo, de acordo com a lei, funcionar em regime de
        instalação pelo período de sessenta dias, a contar da data antes
        referida.
      </p>
    </div>
  </section>
  <!-- End historia Section -->
</template>

<script>
export default {
  name: "HistoriaCnpd",
  mounted() {
    window.scrollTo(0, 0); // Rola para o topo da página quando a página é carregada
  },
};
</script>

<style scoped>
#phistory {
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
@media (min-width: 1024px) {
  .section-title p {
    width: 50%;
  }
}

/*--------------------------------------------------------------
# historia
--------------------------------------------------------------*/
.historia {
  background: #fff;

  padding-top: 100px;
}
</style>
