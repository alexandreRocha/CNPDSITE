<template>
  <section id="taxa" class="taxa">
    <div class="faqs">
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
            <router-link style="text-decoration: none" to="/taxas">
              <b>Taxas de Notificações</b>
            </router-link>
          </h5>
        </div>
        <div class="section-title">
          <h2>TAXAS & PAGAMENTOS</h2>
        </div>
        <div class="row">
          <p class="ptest">
            O procedimento administrativo de notificação de tratamentos de dados
            está sujeito ao pagamento de uma taxa, fixada pela CNPD, na
            Deliberação N.º 1/2015, publicada no Boletim Oficial n.º 44, II
            Série, de 18 de setembro de 2015.
          </p>
          <TaxaCnpd
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
  </section>
</template>

<script>
import TaxaCnpd from "../components/TaxaCnpd.vue";

export default {
  name: "TaxaView",
  components: {
    TaxaCnpd,
  },
  data() {
    return {
      faqs: [
        {
          question: "Montante das taxas",
          mt1: "O registo de notificações de tratamento de dados pessoais, que não implique a concessão de autorização prévia, fica sujeito ao pagamento de uma taxa fixada no valor de 3.000$00 (três mil escudos.)",
          mt2: "O tratamento de dados pessoais que implique a concessão de autorização prévia, prevista na Lei n.º 133/V/2001, de 22 de janeiro, alterada pela Lei n.º 41/VIII/2013, de 17 de setembro, ou outra disposição legal, de acordo com os exemplos em anexo que faz parte integrante da presente deliberação, fica sujeito ao pagamento de uma taxa fixada no valor de 5.000$00 (cinco mil escudos).",
          mt3: "No caso referido no número anterior, havendo especial complexidade, devidamente fundamentada, a CNPD pode fixar, a final, o valor da taxa a pagar, com o limite máximo de 7.000$00 (sete mil escudos).",
          open: true,
        },
        {
          question:
            "Fundamentação económico-financeira relativa à fixação do montante das taxas",
          mt1: "A fixação do montante das taxas referida no artigo anterior assenta na estimativa dos seguintes custos:",
          mt2: "Os custos de formulários e os de instrução do procedimento administrativo inerente ao registo das notificações;",
          mt3: "O custo técnico de emissão de parecer necessário para emissão de autorização.",
          open: false,
        },
        {
          question: "Modo de liquidação e de pagamento",
          mt1: "O pagamento da taxa de notificação realizada por via electrónica, no sítio da CNPD, é efectuado no prazo máximo de 5 (cinco) dias úteis a contar da submissão do formulário electrónico.",
          mt2: "O pagamento da taxa de notificação realizada em suporte papel, apresentada directamente nos serviços da CNPD ou remetida por correio, é feito, respectivamente, no ato de apresentação ou previamente, devendo, neste caso, fazer-se acompanhar do comprovativo.",
          mt3: "No caso previsto no n.º 3 do artigo 4.º, a entidade requerente é notificada para pagar a diferença da taxa, no prazo de 5 dias após a recepção das respectivas guias. ",
          mt4: "Meios de pagamento da taxa de notificação",
          mt5: "O pagamento da taxa de notificação electrónica pode ser efectuado por transferência bancária, através do sistema de banco electrónico ou directamente no balcão de agência bancária, por cheque emitido à ordem da CNPD entregue nas suas instalações, sendo obrigatoriamente indicado o código referência de pagamento fornecido pela CNPD no momento da submissão do formulário.",
          mt6: "Pagamento em prestação",
          mt7: "Por deliberação da CNPD, sempre que a situação económica do requerente o justifique e este o requeira, pode ser autorizado que o pagamento das taxas se efectue em prestações, devendo, metade do montante da taxa ser paga nos termos do artigo 6.º e a outra metade um mês depois.",
          mt8: "Falta de pagamento",
          mt9: "Se não for feito o pagamento das taxas, nos termos da presente deliberação, a notificação não se considera efectuada.",
          mt10: "Erros na liquidação da taxa",
          mt11: "No caso de a entidade requerente ter pago a quantia prevista no n.º 2 do artigo 4.º, respeitante à concessão de autorização prévia, e a CNPD considerar que o tratamento em causa não está sujeito a autorização, a diferença entre os montantes das respectivas taxas é devolvida à entidade requerente.",
          mt12: "No caso de a entidade requerente ter pago a quantia prevista no n.º 1 do artigo 4.º, respeitante a um mero registo e a CNPD verificar que está perante um tratamento de dados que carece de autorização prévia, a entidade requerente é notificada para pagar a diferença da taxa, no prazo de 5 (cinco) dias após a recepção das respectivas guias.",
          mt13: "Devolução",
          mt14: "Se o responsável pelo tratamento tiver efectuado qualquer pagamento sem indicação do código de referência de pagamento, nas situações em que este é exigido, pode requerer a devolução da quantia paga no prazo de 30 (trinta) dias, mediante a entrega do comprovativo do pagamento, sob pena de perda desse montante a favor da CNPD.",
          mt15: "No caso de a entidade requerer a devolução nos termos do número anterior, a CNPD devolverá ao requerente 90 % da taxa paga, retendo os restantes 10 % a título de despesas administrativas.",
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
#taxa { 
  margin-left: 30px;
}
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
