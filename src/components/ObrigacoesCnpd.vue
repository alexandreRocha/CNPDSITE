<template>
  <section id="obrigacoes" class="obrigacoes">
    <div class="container">
      <div class="section-bredcumbs">
        <h5>
          Onde estou?
          <router-link style="text-decoration: none" to="/">
            <b>Página Inicial</b>
          </router-link> 
          <b> > </b>
          <router-link  style="text-decoration: none" to="#"> <b >Formulários</b> </router-link>
          <b> > </b>
          <router-link style="text-decoration: none" to="/obrigacoes">
            <b>Obrigações do Responsável</b>
          </router-link>
        </h5>
      </div>
      <div class="section-title">
        <div class="section-title">
          <h2>Obrigações do Responsável pelo Tratamento</h2>
        </div>
      </div>

      <div class="row content">
        <div class="col-lg-6">
          <ul>
            <li>
              <IconAwe class="icon-color" icon="check-double" /> Notificar ,
              previamente, a CNPD, a realização de tratamento ou conjunto de
              tratamentos de dados pessoais, total ou parcialmente
              autonomizados, destinados à prossecução de uma ou mais finalidades
              interligadas;
            </li>
            <li>
              <IconAwe class="icon-color" icon="check-double" /> Notificar a
              CNPD de quaisquer alterações posteriores que venham a ocorrer;
            </li>
            <li>
              <IconAwe class="icon-color" icon="check-double" /> Proceder ao
              tratamento de dados de forma legal, lícita e com respeito pelo
              princípio da boa fé.
            </li>
            <li>
              <IconAwe class="icon-color" icon="check-double" /> Recolher os
              dados para finalidades determinadas, explicitas e legítimas.
            </li>
            <li>
              <IconAwe class="icon-color" icon="check-double" /> Recolher os
              dados adequados, pertinentes e não excessivos relativamente às
              finalidades para que são recolhidos e posteriormente tratados;
            </li>
            <li>
              <IconAwe class="icon-color" icon="check-double" /> Garantir que os
              dados sejam exactos e actualizados, devendo tomar medidas
              adequadas para assegurar que sejam apagados ou rectificados os
              dados inexactos ou incompletos.
            </li>
            <li>
              <IconAwe class="icon-color" icon="check-double" />Prestar ao
              titular dos dados todas as informações exigidas por lei, sem se
              esquecer da informação específica exigidas quando se trata da
              recolha de dados em redes abertas.
            </li>
            <li>
              <IconAwe class="icon-color" icon="check-double" /> Não tratar os
              dados pessoais de forma incompatível com as finalidades para que
              tenham sido recolhidos. Caso pretenda efectuar tratamento deve
              previamente solicitar a autorização da CNPD ou o consentimento dos
              titulares dos dados.
            </li>
            <li>
              <IconAwe class="icon-color" icon="check-double" />Assegurar ao
              titular dos dados o direito de acesso, de forma livre e sem
              restrições, com periodicidade razoável e sem demoras ou custos
              excessivos.
            </li>
          </ul>
        </div>
        <div class="col-lg-6 pt-4 pt-lg-0">
          <ul>
            <li>
              <IconAwe class="icon-color" icon="check-double" /> Garantir
              gratuitamente ao titular dos dados o exercício do direito de
              oposição ao tratamento para efeitos de “marketing directo” ou
              qualquer outra forma de prospecção.
            </li>
            <li>
              <IconAwe class="icon-color" icon="check-double" />
              Conseguir junto dos assinantes o consentimento prévio para efeito
              de marketing directo com utilização de chamadas automáticas ou de
              aparelho de fax.
            </li>
            <li>
              <IconAwe class="icon-color" icon="check-double" />Obter e
              conservar o consentimento do titular dos dados para o tratamento
              dos dados pessoais;
            </li>
            <li>
              <IconAwe class="icon-color" icon="check-double" /> Por em prática
              as medidas técnicas e organizativas que garantam a protecção dos
              dados contra a destruição, a perda acidental, a alteração, a
              difusão ou acesso não autorizados. Deve ainda, fazer respeitar a
              obrigação legal quanto ao sigilo profissional relativamente aos
              dados pessoais tratados.
            </li>
            <li>
              <IconAwe class="icon-color" icon="check-double" /> Não proceder à
              interconexão de dados pessoais, salvo disposição legal ou
              autorização da CNPD.
            </li>
            <li>
              <IconAwe class="icon-color" icon="check-double" /> Aplicar coimas;
            </li>
            <li>
              <IconAwe class="icon-color" icon="check-double" /> Não comunicar
              dados a terceiras entidades que não tenham os seus tratamentos
              notificados à CNPD.
            </li>
            <li>
              <IconAwe class="icon-color" icon="check-double" /> Destruir os
              dados pessoais logo que findo o prazo de conservação autorizado.
            </li>
            <li>
              <IconAwe class="icon-color" icon="check-double" />Interromper o
              tratamento de dados pessoais quando ocorra uma situação de
              discordância com a Lei e tenha recebido da entidade competente uma
              orientação nesse sentido.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <!-- End obrigacoes Section -->
</template>

<script>
export default {
  name: "ObrigacoesCnpd",
  mounted() {
    window.scrollTo(0, 0); // Rola para o topo da página quando a página é carregada
  },
};
</script>

<style scoped>
#obrigacoes {
  padding-top: 100px;
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
  background: #bd9a13;
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

.obrigacoes .content h3 {
  font-weight: 600;
  font-size: 26px;

  padding-top: 120px;
}
.obrigacoes .content ul {
  list-style: none;
  padding: 0;
}
.obrigacoes .content ul li {
  padding-left: 28px;
  position: relative;
  text-align: justify;
}
.obrigacoes .content ul li + li {
  margin-top: 10px;
}
.obrigacoes .content ul .icon-color {
  position: absolute;
  left: 0;
  top: 2px;
  font-size: 20px;
  color: #11295f;
  line-height: 1;
}
.obrigacoes .content p:last-child {
  margin-bottom: 0;
}
.obrigacoes .content .btn-learn-more {
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
.obrigacoes .content .btn-learn-more:hover {
  background: #e43c5c;
  color: #fff;
  text-decoration: none;
}
</style>
