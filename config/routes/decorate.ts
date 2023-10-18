export default [
  {
    path: '/decorate',
    name: 'decorate',
    icon: 'smile',
    routes: [
      {
        path: '/decorate/home',
        name: 'decorateHome',
        icon: 'smile',
        component: './decorate/home',
      },
      {
        path: '/decorate/mine',
        name: 'decorateMine',
        icon: 'smile',
        component: './decorate/mine',
      },
      {
        path: '/decorate/decorateFactory',
        name: 'decorateFactory',
        icon: 'smile',
        component: './decorate/decorateFactory',
      },
      {
        path: '/decorate/custom',
        name: 'decorateCustom',
        icon: 'smile',
        component: './decorate/custom',
      },
      {
        component: './defaultPage/404',
      },
    ],
  },
];
