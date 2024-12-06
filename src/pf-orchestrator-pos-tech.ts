import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    import(
      /* webpackIgnore: true */
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ).then((module) => {
      return module as LifeCycles;
    }),
  activeWhen: ["/"],
});

// registerApplication({
//   name: "@pf/navbar",
//   app: () =>
//     import<LifeCycles>(
//       /* webpackIgnore: true */
//       "@pf/navbar"
//     ),
//   activeWhen: ["/"],
// });

start({
  urlRerouteOnly: true,
});
