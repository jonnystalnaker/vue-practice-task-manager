import "@/assets/main.scss";
import "@fortawesome/fontawesome-free/css/all.css";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate); // Use the persistence plugin
app.use(router);
app.use(pinia);
app.mount("#app");
