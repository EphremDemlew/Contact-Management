import { createApp, provide, h } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router/router.js";
import apolloClient from "./ApolloClient.js";
import { DefaultApolloClient } from "@vue/apollo-composable";

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },

  render: () => h(App),
});
  app.use(router)
  .mount("#app");