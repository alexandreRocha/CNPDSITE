<template>
  <section id="conselhos" class="conselhos">
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
              <b>Canal do Cidadão</b>
            </router-link>
            <b> > </b>
            <router-link style="text-decoration: none" to="/conselhos">
              <b>Conselhos Práticos </b>
            </router-link>
          </h5>
        </div>
        <div class="section-title">
          <h2>Conselhos Práticos</h2>
        </div>
        <div class="container">
          <ConselhoPratico
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
import ConselhoPratico from "../components/ConselhoPratico.vue";

export default {
  name: "ConselhoPraticoView",
  components: {
    ConselhoPratico,
  },
  data() {
    return {
      faqs: [
        {
          question: "Tenha cuidado ao fornecer seus dados pessoais",
          mt1: " Não forneça os seus dados pessoais para além do necessário. Tenha cautela em disponibilizar o seu nome, o número de telefone ou a sua morada na internet ou em fornecê-los a quem não lhe dê confiança.",
          mt2: "Quanto mais informações colocar online maior é a probabilidade de ser vítima de um ciberataque.Seja muito prudente nas fotografias que colocas na internet. Veja que podem ser copiadas, manipuladas e exploradas para diversas finalidades.",
          open: true,
        },
        {
          question: "Exerça o direito de informação",
          mt1: "Se não lhe for fornecida, exija informações sobre quem é o responsável pelo tratamento de dados, a sua finalidade, os seus destinatários, bem como os dados que tem de fornecer obrigatoriamente e os que são facultativos. Peça ainda informações sobre o exercício dos direitos de acesso e de rectificação.",
          open: false,
        },
        {
          question: "Exerça o direito de oposição",
          mt1: "A Lei de Protecção de Dados Pessoais estipula que qualquer pessoa pode “se opor, a seu pedido e gratuitamente, ao tratamento dos dados pessoais que lhe digam respeito previsto pelo responsável pelo tratamento para efeitos de “marketing” directo ou qualquer outra forma de prospecção”. Em caso de incumprimento deve apresentar queixa junto da Comissão Nacional de Protecção de Dados",
          open: false,
        },
        {
          question: "Tenha password forte",
          mt1: "Altere frequentemente de password, preferencialmente uma para cada tipo de conta. Deve escolher password com um mínimo de oito caracteres, misturando letras maiúsculas e minúsculas, números e símbolos especiais (#,@,*,&,%,_ ou -).",
          mt2: "Nunca use password como '102030', '12345', 'a1b2c3d4' ou outras fáceis de se memorizar mas também de ser adivinhado por quem pretenda roubar os seus dados.A resposta à pergunta que permita recuperar o password nunca deve ser igual aos dados colocados no seu perfil de uma conta da rede social. Por isso, deve sempre iludir na resposta",
          mt3: "O uso do telemóvel afigura-se como sendo um dos mecanismos mais seguro para a recuperação da password, Evite partilhar e escrever password em papeis, ficheiros no computador ou no meio dos contactos do telemóvel.",
          open: false,
        },
        {
          question: "Faça logout ao sair",
          mt1: "Ao deixar de navegar no seu email ou em qualquer página que exija os dados de nome de usuário e password accione o botão Logout ou Sair.",
          open: false,
        },
        {
          question: "Navegue em Redes Seguras",
          mt1: "Reserve as actividades mais confidenciais ao seu computador pessoal. Não é aconselhável efectuar o pagamento de contas, a realização de operações bancárias num computador público ou numa rede sem fio público.",
          open: false,
        },
        {
          question: "Atenção aos links perigosos",
          mt1: "Evite clicar nos links que aparentemente levem a fotos de pessoas famosas ou para baixar algum ficheiro necessário para se efectivar a transferência de algum prémio. Normalmente são artifícios utilizados para destruir os dispositivos ou roubar os seus dados pessoais.",
          open: false,
        },
        {
          question: "Certifique-se que a aplicação é confiável",
          mt1: "Antes de baixar qualquer aplicativo certifique-se se é confiável. Esteja ciente, pois alguns visam roubar os seus dados pessoais. Informe-se junto de quem entenda da matéria e tenha em atenção os comentários dos usuários. Leve em consideração as notificações sobre actualizações das aplicações. São necessárias também para suprimir falhas em matéria de segurança.",
          open: false,
        },
        {
          question: "Instale um antivírus",
          mt1: "Hoje, as aplicações maliciosas têm diversos formatos. Sem saber, podem estar nos anexos enviados por pessoas da nossa relação. O risco de baixar o vírus pode ser minimizado com um antivírus. Embora não seja 100% seguro, recomenda-se a sua instalação e actualização.",
          open: false,
        },
        {
          question: "Ative o modo de navegação privada",
          mt1: "Se tiver activado modo de navegação privada (Virtual Private Network) vai impedir que alguém com acesso físico ao seu computador tenha acesso ao seu histórico de navegação. Fique ciente do interesse que as empresas de publicidade têm em querer saber quem são os seus amigos nas redes sociais, os sites que visita, o que gosta e quais são as compras que faz online.",
          open: false,
        },
        {
          question:
            "Protecção de arquivos pessoais no telemóvel/smartphone ou tablet",
          mt1: "Protege os seus arquivos instalando aplicativo que permite o controlo remoto. Em caso de perda tem a opção de apagar os dados remotamente.",
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
#conselhos { 
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
  margin-left: 30px;
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
