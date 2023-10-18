export default [
  {
    path: '/marking',
    name: 'marking',
    icon: 'smile',
    routes: [
      {
        path: '/marking/member',
        name: 'member',
        icon: 'smile',
        component: './marking/member',
      },
      {
        path: '/marking/credit',
        name: 'credit',
        icon: 'smile',
        component: './marking/credit',
      },
      {
        path: '/marking/discount',
        name: 'discount',
        icon: 'smile',
        component: './marking/discount',
      },
      {
        component: './defaultPage/404',
      },
    ],
  },
];
