export default [
  {
    path: '/goods',
    name: 'goods',
    icon: 'smile',
    routes: [
      {
        path: '/goods/goodsList',
        name: 'goodsList',
        icon: 'smile',
        component: './goods/goodsList',
      },
      {
        path: '/goods/createGoods',
        name: 'createGoods',
        icon: 'smile',
        component: './goods/createGoodsForm.tsx',
      },
      {
        component: './defaultPage/404',
      },
    ],
  },
];
