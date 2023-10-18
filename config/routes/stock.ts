export default [
  {
    path: '/stock',
    name: 'stock',
    icon: 'smile',
    routes: [
      {
        path: '/stock/stockList',
        name: 'stockList',
        icon: 'smile',
        component: './stock/stockList',
      },
      {
        path: '/stock/stockDetail',
        name: 'stockDetail',
        icon: 'smile',
        component: './stock/stockDetail',
      },
      {
        component: './defaultPage/404',
      },
    ],
  },
];
