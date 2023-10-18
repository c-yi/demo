export default [
  {
    path: '/setting',
    name: 'setting',
    icon: 'smile',
    routes: [
      {
        path: '/setting/orderConfig',
        name: 'orderConfig',
        icon: 'smile',
        component: './category/orderConfig',
      },
      {
        component: './defaultPage/404',
      },
    ],
  },
];
