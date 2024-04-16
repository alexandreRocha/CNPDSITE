import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PageNotFound from "../components/PageNotFound.vue";

const routes = [
  
  {
    path: "/",
    name: "home",
    meta: {
      title: "Página Inicial - CNPD",
    },
    component: HomeView,
  },
  {
    path: "/composicao",
    meta: {
      title: "Composição - CNPD",
    },
    name: "ComposicaoView",
    component: () => import("../views/ComposicaoView.vue"),
  },
  {
    path: "/competencias",
    meta: {
      title: "Competências - CNPD",
    },
    name: "CompetenciaView",
    component: () => import("../views/CompetenciasView.vue"),
  },
  {
    path: "/contato",
    name: "ContatoView",
    meta: {
      title: "Contato - CNPD",
    },
    component: () => import("../views/ContatoView.vue"),
  },
  {
    path: "/queixa",
    name: "QueixaView",
    meta: {
      title: "Queixa - CNPD",
    },
    component: () => import("../views/QueixaView.vue"),
  },
  {
    path: "/historia",
    meta: {
      title: "História - CNPD",
    },
    name: "HistoriaView",
    component: () => import("../views/HistoriaView.vue"),
  },
  {
    path: "/boasvindas",
    meta: {
      title: "Boasvindas - CNPD",
    },
    name: "BoasVindasView",
    component: () => import("../views/BoasVindasView.vue"),
  },
  {
    path: "/autorizacoes",
    meta: {
      title: "Autorizações - CNPD",
    },
    name: "AutorizacoesView",
    component: () => import("../views/AutorizacoesView.vue"),
  },
  {
    path: "/autoview/:id",
    meta: {
      title: "Autorização ID - CNPD",
    },
    name: "autoview",
    component: () => import("../views/AutoView.vue"),
  },
  {
    path: "/registos",
    meta: {
      title: "Registos - CNPD",
    },
    name: "RegistosView",
    component: () => import("../views/RegistosView.vue"),
  },

  {
    path: "/regisview/:id",
    meta: {
      title: "Registo ID - CNPD",
    },
    name: "regisview",
    component: () => import("../views/RegisView.vue"),
  },
  {
    path: "/pareceres",
    meta: {
      title: "Pareceres - CNPD",
    },
    name: "PareceresView",
    component: () => import("../views/PareceresView.vue"),
  },

  {
    path: "/parecerview/:id",
    meta: {
      title: "Parecer ID - CNPD",
    },
    name: "parecerview",
    component: () => import("../views/ParecerView.vue"),
  },
  {
    path: "/deliberacoes",
    meta: {
      title: "Deliberações - CNPD",
    },
    name: "DeliberacoesView",
    component: () => import("../views/DeliberacoesView.vue"),
  },

  {
    path: "/deliberaview/:id",
    meta: {
      title: "Deliberação ID - CNPD",
    },
    name: "deliberaid",
    component: () => import("../views/DeliberaView.vue"),
  },
  {
    path: "/diretivas",
    meta: {
      title: "Diretivas - CNPD",
    },
    name: "DiretivasView",
    component: () => import("../views/DiretivasView.vue"),
  },

  {
    path: "/diretivaview/:id",
    meta: {
      title: "Diretiva ID - CNPD",
    },
    name: "diretivaid",
    component: () => import("../views/Diretivaview.vue"),
  },
  {
    path: "/planos",
    meta: {
      title: "Planos - CNPD",
    },
    name: "PlanosView",
    component: () => import("../views/PlanosView.vue"),
  },

  {
    path: "/planoview/:id",
    meta: {
      title: "Plano ID - CNPD",
    },
    name: "planoview",
    component: () => import("../views/PlanoView.vue"),
  },
  {
    path: "/relatorios",
    meta: {
      title: "Relatórios - CNPD",
    },
    name: "RelatoriosView",
    component: () => import("../views/RelatoriosView.vue"),
  },

  {
    path: "/relatorioview/:id",
    meta: {
      title: "Relatório ID - CNPD",
    },
    name: "relatorioview",
    component: () => import("../views/RelatorioView.vue"),
  },
  {
    path: "/comunicados",
    meta: {
      title: "Comunicados - CNPD",
    },
    name: "ComunicadosView",
    component: () => import("../views/ComunicadosView.vue"),
  },
  {
    path: "/comunicadoview/:id",
    meta: {
      title: "Comunicado ID - CNPD",
    },
    name: "comunicadoid",
    component: () => import("../views/Comunicadoview.vue"),
  },

  {
    path: "/formularios",
    meta: {
      title: "Formulários - CNPD",
    },
    name: "FormulariosView",
    component: () => import("../views/FormulariosView.vue"),
  },
  {
    path: "/taxas",
    meta: {
      title: "Taxas",
    },
    name: "TaxaView",
    component: () => import("../views/TaxaView.vue"),
  },
  /*{
       path: '/conselhos',
       meta:{
        title: "Conselhos Práticos",
        },
        name: 'ConselhoPraticoView',
        component: () =>
            import ('../views/ConselhoPraticoView.vue')

    },*/
  {
    path: "/direitos",
    meta: {
      title: "Direitos dos Titulares",
    },
    name: "DireitosTitularesView",
    component: () => import("../views/DireitosTitularesView.vue"),
  },
  {
    path: "/obrigacoes",
    meta: {
      title: "Obrigação do Respónsavel do Tratamento",
    },
    name: "ObrigacoesView",
    component: () => import("../views/ObrigacoesView.vue"),
  },
  {
    path: "/legislacao",
    meta: {
      title: "Legislação - CNPD",
    },
    name: "LegislacaoView",
    component: () => import("../views/LegislacaoView.vue"),
  },
  {
    path: "/leiview/:id",
    meta: {
      title: "Legislação CNPD",
    },
    name: "leiview",
    component: () => import("../views/LeiView.vue"),
  },
  {
    path: "/noticias",
    meta: {
      title: "Notícias - CNPD",
    },
    name: "NoticiasView",
    component: () => import("../views/NoticiasView.vue"),
  },

  {
    path: "/eventview/:id",
    meta: {
      title: "Eventos ID - CNPD",
    },
    name: "eventview",
    component: () => import("../views/EventView.vue"),
  },
  {
    path: "/formscctv",
    meta: {
      title: "VIDEOVIGILÂNCIA - CNPD",
    },
    name: "CctvFormsView",
    component: () => import("../views/CctvFormsView.vue"),
  },

  {
    path: "/formstic",
    meta: {
      title: "TIC - CNPD",
    },
    name: " TicFormsView",
    component: () => import("../views/TicFormsView.vue"),
  },
  {
    path: "/formsgeo",
    meta: {
      title: "GEOLOCALIZAÇÃO - CNPD",
    },
    name: "GpsFormsView",
    component: () => import("../views/GpsFormsView.vue"),
  },
  {
    path: "/formsinter",
    meta: {
      title: "INTERCONEXÃO - CNPD",
    },
    name: "IntcnFormsView",
    component: () => import("../views/IntcnFormsView.vue"),
  },
  {
    path: "/biometria",
    meta: {
      title: "BIOMETRIA - CNPD",
    },
    name: "BiometriaFormsView",
    component: () => import("../views/BiometriaFormsView"),
  },
  {
    path: "/formsgeral",
    meta: {
      title: "TRATAMENTO DE DADOS GERAL - CNPD",
    },
    name: "GeralFormsView",
    component: () => import("../views/GeralFormsView"),
  },

  {
    path: "/panfletos",
    meta: {
      title: "Panfletos - CNPD",
    },
    name: "PanfletosView",
    component: () => import("../views/PanfletosView.vue"),
  },
  {
    path: "/panfletview/:id",
    meta: {
      title: "Panfletos Promocionais - CNPD",
    },
    name: "panfletview",
    component: () => import("../views/PanfletView.vue"),
  },
  {
    path: "/videos",
    meta: {
      title: "Videos - CNPD",
    },
    name: "VideosView",
    component: () => import("../views/VideosView.vue"),
  },
  {
    path: "/isencoes",
    meta: {
      title: "Isenções - CNPD",
    },
    name: "IsencoesView",
    component: () => import("../views/IsencoesView.vue"),
  },

  {
    path: "/isencaoid/:id",
    meta: {
      title: "Isenção CNPD",
    },
    name: "isencaoid",
    component: () => import("../views/IsencaoView.vue"),
  },
  
  {
    path: "/conselhospraticos",
    meta: {
      title: "Conselhos Práticos - CNPD",
    },
    name: "ConselhosView",
    component: () => import("../views/ConselhosView.vue"),
  },

  {
    path: "/conselhoview/:id",
    meta: {
      title: "Conselho Prático ID - CNPD",
    },
    name: "conselhoview",
    component: () => import("../views/ConselhoView.vue"),
  },

  {
    name: "NotFound",
    path: "/:pathMatch(.*)*", 
    meta: {
      title: "Página não encontrado - CNPD",
    },
    component: PageNotFound,
  },
  {
    path: "/consultarp",
    meta: {
      title: "Consultar Processo - CNPD",
    },
    name: "ConsultarView",
    component: () => import("../views/ConsultarView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router;
