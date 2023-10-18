export default [
    {
        path: '/order',
        name: 'order',
        icon: 'smile',
        routes: [
            {
                path: '/order',
                name: 'order',
                icon: 'smile',
                component: './order/order',
                // redirect: '/order/normalOrder',
                hideChildrenInMenu:true,
                routes: [
                    {
                        path: '/order/normalOrder',
                        name: 'normalOrder',
                        icon: 'smile',
                        component: './order/normalOrder',
                    },
                    {
                        path: '/order/refundOrder',
                        name: 'refundOrder',
                        meat:"退款订单",
                        icon: 'smile',
                        component: './order/refundOrder'
                    },
                ]
            },
            {
                path: '/order/orderDetail',
                name: 'orderDetail',
                icon: 'smile',
                component: './order/orderDetail',
            },
            {
                component: './defaultPage/404',
            },
        ],
    },
];
