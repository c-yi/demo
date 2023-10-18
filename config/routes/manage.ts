export default [
  {
    path: '/manage',
    name: 'manage',
    icon: 'smile',
    routes: [
      {
        path: '/manage/organizeList',
        name: 'organizeList',
        icon: 'smile',
        component: './manage/organize/organizeList',
      },
      {
        path: '/manage/roleList',
        name: 'roleList',
        icon: 'smile',
        component: './manage/role/roleList',
      },
      {
        path: '/manage/shopList',
        name: 'shopList',
        icon: 'smile',
        component: './manage/shop/shopList',
      },
      {
        component: './defaultPage/404',
      },
    ],
  },
];
