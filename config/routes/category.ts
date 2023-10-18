export default [
  {
    path: '/category',
    name: 'category',
    icon: 'smile',
    routes: [
      {
        path: '/category/categoryList',
        name: 'categoryList',
        icon: 'smile',
        component: './category/categoryList',
      },
      {
        path: '/category/categoryForm',
        name: 'categoryForm',
        icon: 'smile',
        component: './category/categoryForm',
      },
      {
        component: './defaultPage/404',
      },
    ],
  },
];
