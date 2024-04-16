<template>
  <div class="faqs">
    <div class="container">
    <div class="section-bredcumbs">
        <h5>
          Onde estou?
          <router-link style="text-decoration: none" to="/">
            <b>Página Inicial</b>
          </router-link> 
          <b> > </b>
          <router-link  style="text-decoration: none" to="#"> <b >Canal do Cidadão</b> </router-link>
          <b> > </b>
          <router-link style="text-decoration: none" to="/obrigacoes">
            <b>Obrigações do Responsável</b>
          </router-link>
        </h5>
      </div>
    <div class="section-title">
      <h2>DIREITOS DO TITULAR DOS DADOS</h2>
    </div>

    <div class="container">
      <DireitosTitulares
        v-for="(faq, i) in faqs"
        :faq="faq"
        :index="i"
        :key="i"
        :open="faq.open"
        @toggleOpen="toggleOpen"
      />
    </div>
  </div>
  </div>
</template>

<script>
import DireitosTitulares from "../components/DireitosTitulares.vue";

export default {
  name: "DireitosTitularesView",
  components: {
    DireitosTitulares,
  },
  data() {
    return {
      faqs: [
        {
          question: "Direito de informação",
          mt1: " Quando se procede à recolha de dados pessoais junto do seu titular, o responsável pelo tratamento ou seu representante deve prestar-lhe, salvo se já dele forem conhecidas, as seguintes informações:",
          mt2: "Quem é o responsável pelo tratamento dos dados;",
          mt3: "Qual é a finalidade do tratamento;",
          mt4: "Quais os dados que tem de fornecer obrigatoriamente e quais são facultativos;",
          mt5: "A existência de condições do direito de acesso e de rectificação dos seus dados;",
          mt6: "Se os dados não forem recolhidos junto do seu titular, e exceto se dele já forem conhecidas, as informações antes referidas devem ser prestadas no momento do registo dos dados ou, se estiver prevista a comunicação a terceiros, o mais tardar aquando da primeira comunicação desses dados.",
          mt7: "Se a recolha de dados ocorrer em redes abertas, o titular dos dados dever ser informado de que os seus dados pessoais podem circular sem condições de segurança, correndo o risco de serem vistos e utilizados por terceiros não autorizados.",
          open: true,
        },
        {
          question: "Direito de acesso",
          mt1: "O titular dos dados tem o direito de obter, directamente junto do responsável pelo tratamento, livremente e sem restriçoes, sem demoras ou custos excessivos, a confirmação de que os dados que lhe digam respeito estão ou não a serem tratados. Assiste-lhe o direito de saber qual é a finalidade desse tratamento, as categorias de dados sobre que incide, a lógica subjacente ao tratamento automatizados desses dados e a quem são comunicados;",
          mt2: "O direito de acesso à informação relativa a dados da saúde, incluindo os dados genéticos, é exercido por intermédio de médico escolhido pelo titular dos dados, devendo para o efeito dirigir-se à CNPD;",
          mt3: "O execercício de direito de acesso a dados tratados como medidas adequadas à segurança do Estado, defesa e segurança pública, prevenção, investigação ou repressão de infracções penais é exercido através da CNPD;",
          mt4: "No caso de tratamento de dados efectuado para fins exclusivamente jornalísticos ou de expressão artística ou literária o direito de acesso é também exercido através da CNPD;",
          mt5: "Se a comunicação dos dados ao seu tittular poder prejudicar a segurança do Estado, a aprevenção ou a investigação, a investigação criminal ou ainda a liberdade de expressão e informação ou a liberdade de imprensa, a CNPD limita-se a informar o titular dos dados das diligências efetuadas.",
          open: false,
        },
        {
          question: "A rectificação, apagamento ou o bloqueio",
          mt1: "O titular dos dados tem o direito de exigir junto do responsável pelo tratamento a rectificação, o apagamento ou o bloqueio dos dados devido ao carácter incompleto ou inexacto;",
          mt2: "Tem o direito de exigir junto do responsável pelo tratamento a notificação aos terceiros a quem os dados tenham sido comunicados de qualquer rectificação, apagamento ou bloqueio.",
          open: false,
        },
        {
          question: "Direito de oposição",
          mt1: "O titular dos dados tem o direito de se opor em qualquer altura, por razões ponderosas e legítimas relacionadas com a sua situação particular, a que os dados que lhe digam respeito sejam objecto de tratamento;",
          mt2: "Tem o direito de se opor, a seu pedido e gratituitamente, ao tratamento dos dados pessoais que lhe digam respeito para efeitos de 'marketing' directo ou qualquer outra forma de prospecção;",
          mt3: "Tem o direito de se opor a que os seus dados de cliente sejam utilizados para efeitos de 'marketing' da empresa;",
          mt4: "Assiste-lhe o direito de se opor, sem despesas, a que os seus dados sejam comunicados pela primeira vez a terceiros visando a realização de «marketing» directo ou qualquer outra forma de prospecção bem ainda de serem utilizados por conta de terceiros.",
          open: false,
        },
        {
          question: "Outros Direitos",
          mt1: "O titular dos dados tem ainda direito de:",
          mt2: "Não ficar sujeita ao tratamento automatizado de dados destinado a avaliar determinados aspectos da sua personalidade, designadamente a sua capacidade profissional, o seu crédito, a confiança ou o seu comportamento;",
          mt3: "Exigir que os dados sejam tratados de forma legal e lícita;",
          mt4: "Exigir que os dados recolhidos não sejam excessivos às finalidades;",
          mt5: "Impedir que os seus dados pessoais sejam utilizados para finalidade incompatível com aquela que determinou a recolha;",
          mt6: "Exigir que os dados não sejam comunicados a terceiros sem o seu consentimento ou conhecimento.",
          open: false,
        },
      ],
    };
  },
  methods: {
    toggleOpen: function (index) {
      this.faqs = this.faqs.map((faq, i) => {
        if (index === i) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      });
    },
  },
};
</script>

<style>
.ptest {
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
.faqs {
  padding-top: 100px;
}
.faq {
  display: block;
  width: 100%;
  max-width: 1300px;
  margin: 15px auto;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  background-color: #fff;
}

.faq .question {
  position: relative;
  color: #3c3c3c;
  font-size: 20px;
  transition: all 0.4s linear;
}

.faq .question::after {
  content: "";

  position: absolute;
  right: 0px;
  transform: translateY(-50%) rotate(0deg);

  width: 30px;
  height: 30px;
  background-image: url("../arrow-down-mint.svg");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

  transition: all 0.2s linear;
}
.faq.open .question {
  margin-bottom: 15px;
}
.faq.open .question::after {
  transform: translateY(-50%) rotate(90deg);
}
.faq .answer {
  color: #3c3c3c;
  font-size: 18px;
  opacity: 0;
  max-height: 0px;
  overflow-y: hidden;
  transition: all 0.4s ease-out;
}
.faq.open .answer {
  opacity: 1;
  max-height: 1000px;
}

.ptexto {
  background-color: red;
}
</style>
