import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "@coreui/coreui/dist/css/coreui.min.css";

// ENDPOINT LOCAL
export const API_ENDPOINT = "http://127.0.0.1:8000";


 // ENDPOINT PUBLICO
// export const API_ENDPOINT = "http://sgd.cnpd.cv";
library.add(fas);

createApp(App)
  .component("IconAwe", FontAwesomeIcon)
  .use(router)

   
   
  .mount("#app");
