import {Card} from 'antd';
import React, {useState} from 'react';


const tabListNoTitle = [
    {
        key: 'normalOrder',
        tab: '普通订单',
    },
    {
        key: 'refundOrder',
        tab: '退款订单',
    },
];

const Order: React.FC = () => {
    const [activeTabKey2, setActiveTabKey2] = useState<string>('normalOrder');
    // 全部订单 待发货 待收货 待核销 待付款 已取消 已完成

    const onTab2Change = (key: string) => {
        setActiveTabKey2(key);
    };

    return (
        <Card
            bordered={false}
            style={{width: '100%'}}
            tabList={tabListNoTitle}
            activeTabKey={activeTabKey2}
            tabBarExtraContent={<a href='#'>More</a>}
            onTabChange={key => {
                onTab2Change(key);
            }}
        />
    );
};
export default Order;