import { Card, Col, Row, Tabs } from 'antd';
import * as React from 'react';

const Home: React.FC = () => {
  const onChange = (key: string) => {
    console.log(key);
  };
  return (
    <div>
      <Row justify="space-between" align="top" gutter={[32, 32]}>
        <Col span={6}>
          <Card>
            <h3>今日订单</h3>
            <p>1231笔</p>
            <p style={{ textAlign: 'right' }}>明细</p>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <h3>今日营收</h3>
            <p>$1231</p>
            <p style={{ textAlign: 'right' }}>明细</p>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <h3>本月订单</h3>
            <p>4231单</p>
            <p style={{ textAlign: 'right' }}>明细</p>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <h3>本月营收</h3>
            <p>$24231</p>
            <p style={{ textAlign: 'right' }}>明细</p>
          </Card>
        </Col>
      </Row>
      <Row justify="space-between" align="top" gutter={[32, 32]} style={{ marginTop: '32px' }}>
        <Col span={16}>
          <Card>
            <Tabs
              defaultActiveKey="1"
              onChange={onChange}
              items={[
                {
                  label: `订单处理`,
                  key: '1',
                  children: `Content of Tab Pane 1`,
                },
                {
                  label: `营收走势`,
                  key: '2',
                  children: `Content of Tab Pane 1`,
                },
              ]}
            ></Tabs>
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <h3>咨询</h3>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
