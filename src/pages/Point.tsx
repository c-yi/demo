import React, {useState} from 'react';
import {Button, Image, Form, Input, Radio, Timeline, Col, Row, Card, Space, message} from 'antd';
import UploadFile from "@/pages/uploadFile";
import pointPng from "../../public/image/location.png";


const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

type FieldType = {
  pointName: string;
  password?: string;
  remember?: string;
};
const point = (name = '氹仔') => ({
  children: <div>
    <div>{name}</div>
    <Image
      width={100}
      src={"https://tuapi.eees.cc/api.php?category=fengjing&type=302"}
    />
  </div>
})

const Region: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const [list, setList] = useState([point()])

  const success = () => {
    messageApi.open({
      type: 'success',
      content: '站点添加成功',
    });
  };
  const onFinish = (values: FieldType) => {
    setList([...list, point(values.pointName)])
    success()
  };

  return (<>

      {contextHolder}
      <Row gutter={16}>
        <Col span={10}>
          <Card title={"站点信息"}>
            <Timeline
              items={list}
            />
          </Card>
        </Col>
        <Col span={12}>

          <Card title={"添加站点"}>
            <Form
              name="basic"
              labelCol={{span: 8}}
              wrapperCol={{span: 16}}
              style={{maxWidth: 600}}
              initialValues={{remember: true}}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item<FieldType>
                label="站点名称"
                name="pointName"
                rules={[{required: true, message: '请输入站点名称!'}]}
              >
                <Input/>
              </Form.Item>

              <Form.Item<FieldType>
                label="经纬度"
                name="password"
              >
                <Image
                  max-width={600}
                  src={pointPng}
                />
              </Form.Item>

              <Form.Item<FieldType>
                label="地标建筑"
                name="password"
              >
                <UploadFile/>
              </Form.Item>

              <Form.Item wrapperCol={{offset: 8, span: 16}}>
                <Button type={'primary'} htmlType="submit">
                  添加站点
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </>

  )


};

export default Region;
