import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: (location) => location.pathname === '/',
});

registerApplication({
  name: "@mc/react-single",
  app: () => System.import("@mc/react-single"),
  activeWhen: (location) => location.pathname === '/react-single',
});

registerApplication({
  name: "@mc/react-multiples",
  app: () => System.import("@mc/react-multiples"),
  activeWhen: (location) => location.pathname === '/react-multiples',
});

registerApplication({
  name: "@mc/vue-single",
  app: () => System.import("@mc/vue-single"),
  activeWhen: (location) => location.pathname === '/vue-single',
});

registerApplication({
  name: "@mc/vue-multiples",
  app: () => System.import("@mc/vue-multiples"),
  activeWhen: ['/vue-multiples'] //(location) => location.pathname === '/vue-multiples',
});

start({
  urlRerouteOnly: true,
});
